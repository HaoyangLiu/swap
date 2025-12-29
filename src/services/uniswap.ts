import { ethers } from 'ethers'
import { Token, CurrencyAmount, TradeType, Percent } from '@uniswap/sdk-core'
import { Pool, Route, SwapRouter, Trade } from '@uniswap/v3-sdk'
import IUniswapV3PoolABI from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json'
import SwapRouterABI from '@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

const SWAP_ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564'

export class UniswapService {
    private provider: ethers.Provider
    private signer?: ethers.Signer

    constructor(provider: ethers.Provider, signer?: ethers.Signer) {
        this.provider = provider
        this.signer = signer
    }

    async getPoolData(poolAddress: string) {
        const poolContract = new ethers.Contract(
            poolAddress,
            IUniswapV3PoolABI.abi,
            this.provider
        )

        const [token0, token1, fee, liquidity, slot0] = await Promise.all([
            poolContract.token0(),
            poolContract.token1(),
            poolContract.fee(),
            poolContract.liquidity(),
            poolContract.slot0(),
        ])

        return {
            token0,
            token1,
            fee,
            liquidity: liquidity.toString(),
            sqrtPriceX96: slot0[0].toString(),
            tick: slot0[1],
        }
    }

    async createTrade(
        tokenIn: Token,
        tokenOut: Token,
        amountIn: string,
        poolFee: number
    ) {
        const poolAddress = Pool.getAddress(tokenIn, tokenOut, poolFee)
        const poolData = await this.getPoolData(poolAddress)

        const pool = new Pool(
            tokenIn,
            tokenOut,
            poolFee,
            poolData.sqrtPriceX96,
            poolData.liquidity,
            poolData.tick
        )

        const route = new Route([pool], tokenIn, tokenOut)

        const amountInWei = ethers.parseUnits(amountIn, tokenIn.decimals)
        const currencyAmount = CurrencyAmount.fromRawAmount(
            tokenIn,
            amountInWei.toString()
        )

        const trade = await Trade.fromRoute(
            route,
            currencyAmount,
            TradeType.EXACT_INPUT
        )

        return trade
    }

    async executeTrade(
        trade: Trade<Token, Token, TradeType>,
        slippageTolerance: Percent
    ) {
        if (!this.signer) throw new Error('Signer not available')

        const swapRouter = new ethers.Contract(
            SWAP_ROUTER_ADDRESS,
            SwapRouterABI.abi,
            this.signer
        )

        const options = {
            slippageTolerance,
            deadline: Math.floor(Date.now() / 1000) + 60 * 20, // 20 minutes
            recipient: await this.signer.getAddress(),
        }

        const methodParameters = SwapRouter.swapCallParameters([trade], options)

        const tx = await swapRouter[methodParameters.methodName](
            ...methodParameters.args,
            {
                value: methodParameters.value,
                gasLimit: ethers.parseUnits('500000', 'wei'),
            }
        )

        return tx.wait()
    }
}

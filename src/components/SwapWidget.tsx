import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import { parseUnits, formatUnits } from 'viem'
import { Token, Percent } from '@uniswap/sdk-core'
import { useTokenData } from '../hooks/useTokenData'

export function SwapWidget() {
    const { address } = useAccount()
    const [tokenInAddress, setTokenInAddress] = useState('')
    const [tokenOutAddress, setTokenOutAddress] = useState('')
    const [amountIn, setAmountIn] = useState('')
    const [amountOut, setAmountOut] = useState('')
    const [loading, setLoading] = useState(false)

    const { tokenData: tokenIn } = useTokenData(tokenInAddress, address)
    const { tokenData: tokenOut } = useTokenData(tokenOutAddress, address)

    const handleSwap = async () => {
        if (!address || !tokenIn || !tokenOut) return

        setLoading(true)
        try {
            // Swap logic here using UniswapService
            console.log('Executing swap...')
        } catch (error) {
            console.error('Swap failed:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="swap-widget bg-white rounded-2xl p-6 shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Swap</h2>

            {/* Token In */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">From</label>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-4">
                    <input
                        type="text"
                        value={amountIn}
                        onChange={(e) => setAmountIn(e.target.value)}
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-2xl outline-none"
                    />
                    <div className="flex items-center gap-2">
                        {tokenIn && (
                            <span className="font-semibold">{tokenIn.symbol}</span>
                        )}
                    </div>
                </div>
                {tokenIn?.balance && (
                    <div className="text-sm text-gray-500 mt-1">
                        Balance: {formatUnits(BigInt(tokenIn.balance), tokenIn.decimals)}
                    </div>
                )}
            </div>

            {/* Swap Direction Button */}
            <div className="flex justify-center my-2">
                <button className="bg-gray-100 rounded-xl p-2 hover:bg-gray-200">
                    ↓
                </button>
            </div>

            {/* Token Out */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-2">To</label>
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-4">
                    <input
                        type="text"
                        value={amountOut}
                        readOnly
                        placeholder="0.0"
                        className="flex-1 bg-transparent text-2xl outline-none"
                    />
                    <div className="flex items-center gap-2">
                        {tokenOut && (
                            <span className="font-semibold">{tokenOut.symbol}</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Swap Button */}
            <button
                onClick={handleSwap}
                disabled={loading || !amountIn || !tokenInAddress || !tokenOutAddress}
                className="w-full bg-pink-500 text-white rounded-xl py-4 font-semibold text-lg hover:bg-pink-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
                {loading ? 'Swapping...' : 'Swap'}
            </button>
        </div>
    )
}

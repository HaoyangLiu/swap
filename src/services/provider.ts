import { ethers } from 'ethers'
import { customRpcUrls } from '../config/web3'

export class ProviderService {
    private static providers: Map<number, ethers.JsonRpcProvider> = new Map()

    static getProvider(chainId: number = 1): ethers.JsonRpcProvider {
        if (!this.providers.has(chainId)) {
            let rpcUrl: string

            switch (chainId) {
                case 1: // Mainnet
                    rpcUrl = customRpcUrls.mainnet
                    break
                case 137: // Polygon
                    rpcUrl = customRpcUrls.polygon
                    break
                case 42161: // Arbitrum
                    rpcUrl = customRpcUrls.arbitrum
                    break
                case 10: // Optimism
                    rpcUrl = customRpcUrls.optimism
                    break
                case 11155111: // Sepolia
                    rpcUrl = customRpcUrls.sepolia
                    break
                default:
                    rpcUrl = customRpcUrls.mainnet
            }

            const provider = new ethers.JsonRpcProvider(rpcUrl)
            this.providers.set(chainId, provider)
        }

        return this.providers.get(chainId)!
    }

    // 清理 provider 缓存
    static clearCache() {
        this.providers.clear()
    }
}

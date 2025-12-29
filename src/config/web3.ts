import { createConfig, http } from 'wagmi'
import { mainnet, polygon, arbitrum, optimism, sepolia } from 'wagmi/chains'
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'demo-project-id'

// 使用自定义免费 RPC URLs
const customRpcUrls = {
    mainnet: import.meta.env.VITE_MAINNET_RPC_URL || 'https://eth.llamarpc.com',
    polygon: import.meta.env.VITE_POLYGON_RPC_URL || 'https://polygon-rpc.com',
    arbitrum: import.meta.env.VITE_ARBITRUM_RPC_URL || 'https://arb1.arbitrum.io/rpc',
    optimism: import.meta.env.VITE_OPTIMISM_RPC_URL || 'https://mainnet.optimism.io',
    sepolia: import.meta.env.VITE_SEPOLIA_RPC_URL || 'https://rpc.sepolia.org',
    haskkey: import.meta.env.VITE_HASHKEY_RPC_URL || 'https://qa.hashkeychain.net',
}

export const config = createConfig({
    chains: [mainnet, polygon, arbitrum, optimism, sepolia],
    connectors: [
        injected(),
        walletConnect({
            projectId,
            showQrModal: true
        }),
        coinbaseWallet({
            appName: 'Uniswap Dashboard',
            darkMode: false
        }),
    ],
    transports: {
        [mainnet.id]: http(customRpcUrls.mainnet),
        [polygon.id]: http(customRpcUrls.polygon),
        [arbitrum.id]: http(customRpcUrls.arbitrum),
        [optimism.id]: http(customRpcUrls.optimism),
        [sepolia.id]: http(customRpcUrls.sepolia),
    },
})

// 导出 RPC URLs 供其他地方使用
export { customRpcUrls }

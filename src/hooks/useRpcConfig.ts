import { useState, useEffect } from 'react'
import { useChainId } from 'wagmi'
import { rpcEndpoints, getBestRpc } from '../config/rpcConfig'

export function useRpcConfig() {
    const chainId = useChainId()
    const [currentRpc, setCurrentRpc] = useState<string>('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function selectBestRpc() {
            setLoading(true)
            let endpoints = rpcEndpoints.mainnet

            switch (chainId) {
                case 1:
                    endpoints = rpcEndpoints.mainnet
                    break
                case 137:
                    endpoints = rpcEndpoints.polygon
                    break
                case 42161:
                    endpoints = rpcEndpoints.arbitrum
                    break
            }

            const bestRpc = await getBestRpc(endpoints)
            setCurrentRpc(bestRpc)
            setLoading(false)
        }

        selectBestRpc()
    }, [chainId])

    return { currentRpc, loading }
}

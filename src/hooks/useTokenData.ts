import { useState, useEffect } from 'react'
import { usePublicClient } from 'wagmi'
import { erc20Abi } from 'viem'

export interface TokenData {
    address: string
    symbol: string
    name: string
    decimals: number
    balance?: string
    price?: number
}

export function useTokenData(tokenAddress: string, userAddress?: string) {
    const [tokenData, setTokenData] = useState<TokenData | null>(null)
    const [loading, setLoading] = useState(false)
    const publicClient = usePublicClient()

    useEffect(() => {
        async function fetchTokenData() {
            if (!publicClient || !tokenAddress) return

            setLoading(true)
            try {
                const [symbol, name, decimals, balance] = await Promise.all([
                    publicClient.readContract({
                        address: tokenAddress as `0x${string}`,
                        abi: erc20Abi,
                        functionName: 'symbol',
                    }),
                    publicClient.readContract({
                        address: tokenAddress as `0x${string}`,
                        abi: erc20Abi,
                        functionName: 'name',
                    }),
                    publicClient.readContract({
                        address: tokenAddress as `0x${string}`,
                        abi: erc20Abi,
                        functionName: 'decimals',
                    }),
                    userAddress
                        ? publicClient.readContract({
                            address: tokenAddress as `0x${string}`,
                            abi: erc20Abi,
                            functionName: 'balanceOf',
                            args: [userAddress as `0x${string}`],
                        })
                        : null,
                ])

                setTokenData({
                    address: tokenAddress,
                    symbol: symbol as string,
                    name: name as string,
                    decimals: decimals as number,
                    balance: balance?.toString(),
                })
            } catch (error) {
                console.error('Error fetching token data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchTokenData()
    }, [tokenAddress, userAddress, publicClient])

    return { tokenData, loading }
}

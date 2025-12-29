interface RpcEndpoint {
    name: string
    url: string
    priority: number
}

export const rpcEndpoints = {
    mainnet: [
        { name: 'LlamaRPC', url: 'https://eth.llamarpc.com', priority: 1 },
        { name: 'Ankr', url: 'https://rpc.ankr.com/eth', priority: 2 },
        { name: 'Cloudflare', url: 'https://cloudflare-eth.com', priority: 3 },
    ] as RpcEndpoint[],

    polygon: [
        { name: 'Official', url: 'https://polygon-rpc.com', priority: 1 },
        { name: 'Ankr', url: 'https://rpc.ankr.com/polygon', priority: 2 },
    ] as RpcEndpoint[],

    arbitrum: [
        { name: 'Official', url: 'https://arb1.arbitrum.io/rpc', priority: 1 },
        { name: 'Ankr', url: 'https://rpc.ankr.com/arbitrum', priority: 2 },
    ] as RpcEndpoint[],
}

// RPC 健康检查
export async function checkRpcHealth(url: string): Promise<boolean> {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                jsonrpc: '2.0',
                method: 'eth_blockNumber',
                params: [],
                id: 1,
            }),
        })
        return response.ok
    } catch {
        return false
    }
}

// 获取最佳 RPC
export async function getBestRpc(
    endpoints: RpcEndpoint[]
): Promise<string> {
    for (const endpoint of endpoints.sort((a, b) => a.priority - b.priority)) {
        const isHealthy = await checkRpcHealth(endpoint.url)
        if (isHealthy) {
            console.log(`✅ Using RPC: ${endpoint.name}`)
            return endpoint.url
        }
    }
    // 如果都失败，返回第一个
    return endpoints[0].url
}

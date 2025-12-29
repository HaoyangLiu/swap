#!/bin/bash

echo "🚀 Setting up free RPC URLs..."

# 创建 .env 文件
cat > .env << 'EOF'
# WalletConnect (可选)
VITE_WALLETCONNECT_PROJECT_ID=

# 免费公共 RPC URLs
VITE_MAINNET_RPC_URL=https://eth.llamarpc.com
VITE_POLYGON_RPC_URL=https://polygon-rpc.com
VITE_ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
VITE_OPTIMISM_RPC_URL=https://mainnet.optimism.io
VITE_SEPOLIA_RPC_URL=https://rpc.sepolia.org
VITE_HASHKEY_RPC_URL=https://qa.hashkeychain.net
EOF

echo "✅ .env file created with free RPC URLs"
echo "📝 You can customize these URLs in the .env file"

# 测试 RPC 连接
echo ""
echo "🔍 Testing RPC connections..."

test_rpc() {
    local name=$1
    local url=$2

    response=$(curl -s -X POST -H "Content-Type: application/json" \
        --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \
        $url)

    if [[ $response == *"result"* ]]; then
        echo "✅ $name: Connected"
    else
        echo "❌ $name: Failed"
    fi
}

test_rpc "Ethereum Mainnet" "https://eth.llamarpc.com"
test_rpc "Polygon" "https://polygon-rpc.com"
test_rpc "Arbitrum" "https://arb1.arbitrum.io/rpc"
test_rpc "Optimism" "https://mainnet.optimism.io"

echo ""
echo "🎉 Setup complete! Run 'npm run dev' to start"


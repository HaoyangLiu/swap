import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from './config/web3'
import { SwapWidget } from './components/SwapWidget'
import { ConnectButton } from './components/ConnectButton'
import { useState, useCallback } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { SwapPanel } from "./components/panels/SwapPanel"

const queryClient = new QueryClient()

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
                    <nav className="p-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-purple-600">
                            Uniswap Dashboard
                        </h1>
                        <ConnectButton />
                    </nav>

                    <main className="container mx-auto px-4 py-8">
                        <SwapWidget />
                    </main>
                </div>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default App

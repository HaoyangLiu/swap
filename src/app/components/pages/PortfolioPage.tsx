import { ArrowDownCircleIcon, ArrowUpCircleIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export function PortfolioPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="size-16 bg-gradient-to-br from-[#2362dd] to-[#AD81F1] rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M8 8 L16 8 L16 16 L8 16 Z M16 16 L24 16 L24 24 L16 24 Z" fill="white" />
              </svg>
            </div>
            <div>
              <h1 className="font-['Aleo:SemiBold',sans-serif] text-[24px] text-white">0x5dEe...0926</h1>
              <p className="text-[#94a3b8] text-[14px]">+1 more</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-[rgba(148,163,184,0.5)] text-[#94a3b8] hover:text-white transition-colors">
            All networks
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="6" cy="6" r="2" fill="#627eea" />
              <circle cx="14" cy="6" r="2" fill="#AD81F1" />
              <circle cx="6" cy="14" r="2" fill="#2362dd" />
              <circle cx="14" cy="14" r="2" fill="#00d395" />
            </svg>
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 border-b border-[rgba(148,163,184,0.3)] mb-8">
          <button className="font-['Aleo:SemiBold',sans-serif] text-white border-b-2 border-[#2362dd] pb-3">Overview</button>
          <button className="font-['Aleo:Medium',sans-serif] text-[#94a3b8] pb-3">Tokens</button>
          <button className="font-['Aleo:Medium',sans-serif] text-[#94a3b8] pb-3">NFTs</button>
          <button className="font-['Aleo:Medium',sans-serif] text-[#94a3b8] pb-3">Activity</button>
        </div>

        {/* Balance */}
        <div className="mb-12">
          <h2 className="font-['Aleo:SemiBold',sans-serif] text-[56px] text-[#94a3b8] mb-8">$0.00</h2>

          {/* Chart Placeholder */}
          <div className="h-48 border-b border-[rgba(148,163,184,0.2)] mb-4 flex items-end">
            <div className="w-full h-px bg-[rgba(148,163,184,0.2)]" />
          </div>

          {/* Time Range Buttons */}
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">1D</button>
            <button className="px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">1W</button>
            <button className="px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">1M</button>
            <button className="px-3 py-1.5 text-[#94a3b8] hover:text-white transition-colors text-[14px]">1Y</button>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-3 gap-4">
          {/* Buy Crypto */}
          <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6 hover:border-[rgba(148,163,184,0.7)] transition-colors cursor-pointer">
            <div className="inline-flex items-center justify-center size-12 bg-gradient-to-br from-[#ff5c5c] to-[#ff8080] rounded-full mb-4">
              <ArrowDownCircleIcon className="size-6 text-white" />
            </div>
            <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-2">Buy crypto</h3>
            <p className="text-[#94a3b8] text-[14px]">Purchase with a debit card or bank account.</p>
          </div>

          {/* Receive Crypto */}
          <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6 hover:border-[rgba(148,163,184,0.7)] transition-colors cursor-pointer">
            <div className="inline-flex items-center justify-center size-12 bg-gradient-to-br from-[#AD81F1] to-[#c9a3f5] rounded-full mb-4">
              <ArrowUpCircleIcon className="size-6 text-white" />
            </div>
            <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-2">Receive crypto</h3>
            <p className="text-[#94a3b8] text-[14px]">Move funds from another wallet.</p>
          </div>

          {/* Transfer */}
          <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6 hover:border-[rgba(148,163,184,0.7)] transition-colors cursor-pointer">
            <div className="inline-flex items-center justify-center size-12 bg-gradient-to-br from-[#2362dd] to-[#4a8af4] rounded-full mb-4">
              <ArrowPathIcon className="size-6 text-white" />
            </div>
            <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-2">Transfer</h3>
            <p className="text-[#94a3b8] text-[14px]">Move funds from a trading platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
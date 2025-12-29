import { PlusIcon, ChevronDownIcon, ArrowRightIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const mockPoolsWithRewards = [
  { pair: 'SUSDE / USDT', apr: '2.18% APR', change: '+7.75%', v4: true, fee: '0.008%' },
  { pair: 'USDC / USDT', apr: '1.04% APR', change: '+7.7%', v4: true, fee: '0.0008%' },
  { pair: 'USDE / USDT', apr: '2.84% APR', change: '+0.48%', v4: true, fee: '0.0042%' },
];

const mockTopPools = [
  { pair: 'WISE / ETH', apr: '0.00% APR', v2: true, fee: '0.3%' },
  { pair: 'ETH / USDT', apr: '17.63% APR', v3: true, fee: '0.3%' },
  { pair: 'ETH / USDC', apr: '5.87% APR', v3: true, fee: '0.05%' },
];

interface PoolPageProps {
  onNavigateToNewPosition: () => void;
}

export function PoolPage({ onNavigateToNewPosition }: PoolPageProps) {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="grid grid-cols-3">
        {/* Left Column - Your Positions */}
        <div className="col-span-2">
          {/* Your Positions */}
          <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6">
            <h2 className="font-['Aleo:SemiBold',sans-serif] text-[20px] text-white mb-4">Your positions</h2>
            
            {/* Filters */}
            <div className="flex items-center gap-2 mb-6">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white border border-[rgba(148,163,184,0.3)]">
                <PlusIcon className="size-4" />
                New
                <ChevronDownIcon className="size-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[#94a3b8] border border-[rgba(148,163,184,0.3)] hover:text-white transition-colors">
                Status
                <ChevronDownIcon className="size-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-[#94a3b8] border border-[rgba(148,163,184,0.3)] hover:text-white transition-colors">
                Protocol
                <ChevronDownIcon className="size-4" />
              </button>
              <button className="p-2 text-[#94a3b8] border border-[rgba(148,163,184,0.3)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" fill="currentColor" />
                  <rect x="11" y="2" width="7" height="7" fill="currentColor" />
                  <rect x="2" y="11" width="7" height="7" fill="currentColor" />
                  <rect x="11" y="11" width="7" height="7" fill="currentColor" />
                </svg>
              </button>
            </div>

            {/* Empty State */}
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center size-16 bg-[rgba(148,163,184,0.1)] rounded-full mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" stroke="#94a3b8" strokeWidth="2" fill="none" />
                  <path d="M12 16 L20 16 M16 12 L16 20" stroke="#94a3b8" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-white font-['Aleo:SemiBold',sans-serif] text-[18px] mb-2">No positions</h3>
              <p className="text-[#94a3b8] text-[14px] mb-6 max-w-md mx-auto">
                You don't have any liquidity positions. Create a new position to start earning fees and rewards on eligible pools.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button className="px-4 py-2 text-[#94a3b8] border border-[rgba(148,163,184,0.3)] hover:text-white transition-colors">
                  Explore pools
                </button>
                <button className="px-4 py-2 bg-black text-white border border-[rgba(148,163,184,0.3)]" onClick={onNavigateToNewPosition}>
                  New position
                </button>
              </div>
            </div>

            {/* Footer Info */}
            <div className="mt-6 pt-6 border-t border-[rgba(148,163,184,0.3)] flex items-center gap-2 text-[#94a3b8] text-[14px]">
              <span className="inline-block size-4 bg-[rgba(148,163,184,0.2)] rounded-full text-center text-[10px]">i</span>
              <span>Looking for your closed positions?</span>
              <span className="ml-1">You can see them by using the filter at the top of the page.</span>
            </div>
          </div>
        </div>

        {/* Right Column - Pools with Rewards & Top Pools */}
        <div>
          {/* Pools with Rewards */}
          <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6">
            <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-4">Pools with rewards</h3>
            <div className="space-y-3">
              {mockPoolsWithRewards.map((pool, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[rgba(148,163,184,0.05)] border border-[rgba(148,163,184,0.2)] hover:border-[rgba(148,163,184,0.4)] transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="size-8 rounded-full bg-[#26a17b] border-2 border-[#141419]" />
                      <div className="size-8 rounded-full bg-[#2775ca] border-2 border-[#141419]" />
                    </div>
                    <div>
                      <p className="text-white font-['Inter:Medium',sans-serif] text-[14px]">{pool.pair}</p>
                      <div className="flex items-center gap-2 text-[#94a3b8] text-[12px]">
                        <span className="px-1.5 py-0.5 bg-[rgba(148,163,184,0.2)] text-[10px]">v{pool.v4 ? '4' : '3'}</span>
                        <span>{pool.fee}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-['Inter:Medium',sans-serif] text-[14px]">{pool.apr}</p>
                    <p className="text-[#00d395] text-[12px] flex items-center justify-end gap-1">
                      <ArrowUpIcon className="size-3" />
                      {pool.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full text-center text-[#2362dd] hover:text-[#1e56c7] transition-colors text-[14px] flex items-center justify-center gap-1">
              Explore Unichain pools
              <ArrowRightIcon className="size-4" />
            </button>
          </div>

          {/* Top Pools by TVL */}
          <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] p-6">
            <h3 className="font-['Aleo:SemiBold',sans-serif] text-[18px] text-white mb-4">Top pools by TVL</h3>
            <div className="space-y-3">
              {mockTopPools.map((pool, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-[rgba(148,163,184,0.05)] border border-[rgba(148,163,184,0.2)] hover:border-[rgba(148,163,184,0.4)] transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="size-8 rounded-full bg-[#627eea] border-2 border-[#141419]" />
                      <div className="size-8 rounded-full bg-[#2775ca] border-2 border-[#141419]" />
                    </div>
                    <div>
                      <p className="text-white font-['Inter:Medium',sans-serif] text-[14px]">{pool.pair}</p>
                      <div className="flex items-center gap-2 text-[#94a3b8] text-[12px]">
                        <span className="px-1.5 py-0.5 bg-[rgba(148,163,184,0.2)] text-[10px]">v{pool.v2 ? '2' : pool.v3 ? '3' : '4'}</span>
                        <span>{pool.fee}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-['Inter:Medium',sans-serif] text-[14px]">{pool.apr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
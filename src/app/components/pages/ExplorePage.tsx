import { ArrowUpIcon, ArrowDownIcon, ArrowTrendingUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const mockTokens = [
  { id: 1, name: 'Tether USD', symbol: 'USDT', price: '$1.00', change1h: 0.00, change1d: 0.00, fdv: '$192.3B', volume: '$407.7M', chart: 'flat' },
  { id: 2, name: 'Ethereum', symbol: 'ETH', price: '$2,925.54', change1h: 0.04, change1d: 0.04, fdv: '$360.7B', volume: '$302.4M', chart: 'up' },
  { id: 3, name: 'Binance Coin', symbol: 'BNB', price: '$840.96', change1h: 0.02, change1d: 0.58, fdv: '$116.9B', volume: '$268.1M', chart: 'up' },
  { id: 4, name: 'Tether USD', symbol: 'USDT', price: '$1.00', change1h: 0.00, change1d: 0.00, fdv: '$192.3B', volume: '$250.6M', chart: 'flat' },
  { id: 5, name: 'Yooldo Games', symbol: 'ESPORTS', price: '$0.424', change1h: -0.02, change1d: null, fdv: '$381.3M', volume: '$243.5M', chart: 'volatile' },
  { id: 6, name: 'USD Coin', symbol: 'USDC', price: '$1.00', change1h: 0.00, change1d: 0.00, fdv: '$76.5B', volume: '$182.3M', chart: 'flat' },
  { id: 7, name: 'Base ETH', symbol: 'ETH', price: '$2,928.59', change1h: 0.02, change1d: 0.33, fdv: '$360.7B', volume: '$133.7M', chart: 'up' },
];

const mockStats = [
  { label: '1D volume', value: '$1.88B', change: 18.05 },
  { label: 'Total Uniswap TVL', value: '$3.19B', change: 1.11 },
  { label: 'v2 TVL', value: '$1.21B', change: 0.87 },
  { label: 'v3 TVL', value: '$1.34B', change: 1.39 },
  { label: 'v4 TVL', value: '$640.07M', change: 1.42 },
];

export function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#111215] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl mb-2">Explore Tokens</h1>
          <p className="text-[#94a3b8] text-sm md:text-base">Discover and trade top crypto assets</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 md:mb-8">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search tokens..."
              className="w-full bg-[#1a1d24]/50 backdrop-blur-sm border border-[#2a2e3a] rounded-xl pl-12 pr-4 py-3 md:py-4 text-white placeholder:text-[#94a3b8] focus:outline-none focus:border-[#2362dd] transition-colors text-sm md:text-base"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="hidden md:grid grid-cols-5 border-b border-[rgba(148,163,184,0.3)] pb-6 mb-6">
          {mockStats.map((stat, index) => (
            <div key={index} className="px-4">
              <p className="text-[#94a3b8] text-[12px] mb-1">{stat.label}</p>
              <p className="text-white font-['Aleo:SemiBold',sans-serif] text-[20px] mb-1">{stat.value}</p>
              <div className="flex items-center gap-1">
                {stat.change > 0 ? (
                  <ArrowUpIcon className="size-3 text-[#00d395]" />
                ) : (
                  <ArrowDownIcon className="size-3 text-[#ff5c5c]" />
                )}
                <span className={`text-[12px] ${stat.change > 0 ? 'text-[#00d395]' : 'text-[#ff5c5c]'}`}>
                  {stat.change}% today
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs and Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4 md:gap-6 overflow-x-auto w-full sm:w-auto">
            <button className="font-['Aleo:SemiBold',sans-serif] text-white border-b-2 border-[#2362dd] pb-2 whitespace-nowrap">Tokens</button>
            <button className="font-['Aleo:Medium',sans-serif] text-[#94a3b8] pb-2 whitespace-nowrap">Pools</button>
            <button className="font-['Aleo:Medium',sans-serif] text-[#94a3b8] pb-2 whitespace-nowrap">Transactions</button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 bg-[#141419] border border-[rgba(148,163,184,0.3)] text-[#94a3b8] hover:text-white transition-colors">
              <span className="text-[14px]">1D volume</span>
              <ArrowDownIcon className="size-4" />
            </button>
            <button className="p-2 bg-[#141419] border border-[rgba(148,163,184,0.3)] text-[#94a3b8] hover:text-white transition-colors">
              <MagnifyingGlassIcon className="size-4" />
            </button>
          </div>
        </div>

        {/* Tokens Table */}
        <div className="bg-[#141419] border border-[rgba(148,163,184,0.5)] overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-[rgba(148,163,184,0.3)]">
                <th className="text-left px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px]">#</th>
                <th className="text-left px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px]">Token name</th>
                <th className="text-right px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px]">Price</th>
                <th className="text-right px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px]">1H</th>
                <th className="text-right px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px]">1D</th>
                <th className="text-right px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px] hidden lg:table-cell">FDV</th>
                <th className="text-right px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px] flex items-center justify-end gap-1">
                  <ArrowDownIcon className="size-4" />
                  Volume
                </th>
                <th className="text-right px-3 md:px-6 py-4 text-[#94a3b8] font-['Inter:Medium',sans-serif] text-[12px] md:text-[14px] hidden md:table-cell">1D chart</th>
              </tr>
            </thead>
            <tbody>
              {mockTokens.map((token) => (
                <tr key={token.id} className="border-b border-[rgba(148,163,184,0.1)] hover:bg-[rgba(148,163,184,0.05)] transition-colors">
                  <td className="px-6 py-4 text-[#94a3b8]">{token.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`size-8 rounded-full flex items-center justify-center ${
                        token.symbol === 'USDT' ? 'bg-[#26a17b]' :
                        token.symbol === 'ETH' ? 'bg-[#627eea]' :
                        token.symbol === 'BNB' ? 'bg-[#f3ba2f]' :
                        token.symbol === 'USDC' ? 'bg-[#2775ca]' :
                        'bg-[#94a3b8]'
                      }`}>
                        <span className="text-white font-['Aleo:SemiBold',sans-serif] text-[14px]">
                          {token.symbol.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-['Inter:Medium',sans-serif]">{token.name}</p>
                        <p className="text-[#94a3b8] text-[12px]">{token.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-white">{token.price}</td>
                  <td className="px-6 py-4 text-right">
                    {token.change1h !== null && (
                      <span className={`flex items-center justify-end gap-1 ${
                        token.change1h > 0 ? 'text-[#00d395]' : token.change1h < 0 ? 'text-[#ff5c5c]' : 'text-[#94a3b8]'
                      }`}>
                        {token.change1h > 0 && <ArrowUpIcon className="size-3" />}
                        {token.change1h < 0 && <ArrowDownIcon className="size-3" />}
                        {Math.abs(token.change1h).toFixed(2)}%
                      </span>
                    )}
                    {token.change1h === null && <span className="text-[#94a3b8]">-</span>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {token.change1d !== null && (
                      <span className={`flex items-center justify-end gap-1 ${
                        token.change1d > 0 ? 'text-[#00d395]' : token.change1d < 0 ? 'text-[#ff5c5c]' : 'text-[#94a3b8]'
                      }`}>
                        {token.change1d > 0 && <ArrowUpIcon className="size-3" />}
                        {token.change1d < 0 && <ArrowDownIcon className="size-3" />}
                        {Math.abs(token.change1d).toFixed(2)}%
                      </span>
                    )}
                    {token.change1d === null && <span className="text-[#94a3b8]">-</span>}
                  </td>
                  <td className="px-6 py-4 text-right text-white hidden lg:table-cell">{token.fdv}</td>
                  <td className="px-6 py-4 text-right text-white">{token.volume}</td>
                  <td className="px-6 py-4 text-right hidden md:table-cell">
                    <div className="w-20 h-10 ml-auto">
                      {token.chart === 'up' && (
                        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                          <path d="M0 35 L20 30 L40 20 L60 15 L80 10" stroke="#00d395" strokeWidth="2" fill="none" />
                        </svg>
                      )}
                      {token.chart === 'flat' && (
                        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                          <path d="M0 20 L20 19 L40 20 L60 21 L80 20" stroke="#94a3b8" strokeWidth="2" fill="none" />
                        </svg>
                      )}
                      {token.chart === 'volatile' && (
                        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                          <path d="M0 20 L10 10 L20 30 L30 15 L40 25 L50 10 L60 30 L70 20 L80 15" stroke="#00d395" strokeWidth="2" fill="none" />
                        </svg>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
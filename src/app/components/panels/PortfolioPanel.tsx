export function PortfolioPanel() {
  const holdings = [
    { symbol: 'ETH', name: 'Ethereum', amount: '1.5', value: '$2,642.31', change: '-0.05%', negative: true },
    { symbol: 'USDC', name: 'USD Coin', amount: '3,963.46', value: '$3,963.46', change: '0.00%', negative: false },
    { symbol: 'BTC', name: 'Bitcoin', amount: '0.05', value: '$2,150.00', change: '+1.23%', negative: false },
  ];

  const totalValue = 8755.77;

  return (
    <div className="h-full">
      <div className="mb-6">
        <h4 className="font-['Aleo:Medium',sans-serif] text-[#94a3b8] mb-2">Total Portfolio Value</h4>
        <div className="font-['Liberation_Mono:Regular',sans-serif] text-white text-[32px] tracking-[-0.8px]">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
      </div>

      <div className="space-y-3">
        {holdings.map((holding) => (
          <div key={holding.symbol} className="bg-[rgba(26,27,35,0.6)] border border-[#545c69] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white">{holding.symbol}</div>
                <div className="font-['Inter:Regular',sans-serif] text-[#94a3b8] text-[12px]">{holding.name}</div>
              </div>
              <div className={`font-['Liberation_Mono:Regular',sans-serif] text-[14px] ${holding.negative ? 'text-[rgba(248,113,113,0.8)]' : 'text-[rgba(52,211,153,0.8)]'}`}>
                {holding.change}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-['Liberation_Mono:Regular',sans-serif] text-[#94a3b8] text-[12px]">
                {holding.amount} {holding.symbol}
              </div>
              <div className="font-['Liberation_Mono:Regular',sans-serif] text-white">
                {holding.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecentTransactionsPanel() {
  const transactions = [
    { type: 'Swap', from: 'ETH', to: 'USDC', amount: '0.5', value: '$881.44', time: '2 mins ago' },
    { type: 'Swap', from: 'USDC', to: 'ETH', amount: '1000', value: '0.38 ETH', time: '15 mins ago' },
    { type: 'Swap', from: 'ETH', to: 'BTC', amount: '0.1', value: '0.006 BTC', time: '1 hour ago' },
    { type: 'Swap', from: 'BTC', to: 'USDC', amount: '0.01', value: '$430.00', time: '3 hours ago' },
  ];

  return (
    <div className="h-full">
      <h4 className="font-['Aleo:SemiBold',sans-serif] text-white mb-4">Recent Transactions</h4>
      
      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <div key={idx} className="bg-[rgba(26,27,35,0.6)] border border-[#545c69] rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[14px]">{tx.type}</span>
                <span className="font-['Inter:Regular',sans-serif] text-[#94a3b8] text-[12px]">
                  {tx.from} → {tx.to}
                </span>
              </div>
              <span className="font-['Inter:Regular',sans-serif] text-[#94a3b8] text-[12px]">{tx.time}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-['Liberation_Mono:Regular',sans-serif] text-[#94a3b8] text-[12px]">
                {tx.amount} {tx.from}
              </span>
              <span className="font-['Liberation_Mono:Regular',sans-serif] text-white text-[14px]">{tx.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

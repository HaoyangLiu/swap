import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DashboardPanel } from './components/DashboardPanel';
import { SwapPanel } from './components/panels/SwapPanel';
import { PriceChartPanel } from './components/panels/PriceChartPanel';
import { PortfolioPanel } from './components/panels/PortfolioPanel';
import { RecentTransactionsPanel } from './components/panels/RecentTransactionsPanel';
import { MarketStatsPanel } from './components/panels/MarketStatsPanel';
import { TradePage } from './components/pages/TradePage';
import { ExplorePage } from './components/pages/ExplorePage';
import { PoolPage } from './components/pages/PoolPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { NewPositionPage } from './components/pages/NewPositionPage';
import { MVPSwapPage } from './components/pages/MVPSwapPage';
import Nav from './components/Nav';

interface PanelConfig {
  id: string;
  title: string;
  component: () => React.ReactNode;
}

type PageType = 'trade' | 'explore' | 'pool' | 'portfolio' | 'new-position' | 'mvp-swap';

export default function App() {
  const [panels, setPanels] = useState<PanelConfig[]>([
    { id: 'swap', title: 'Swap', component: () => <SwapPanel /> },
    { id: 'chart', title: 'Price Chart', component: () => <PriceChartPanel /> },
    { id: 'portfolio', title: 'Portfolio', component: () => <PortfolioPanel /> },
    { id: 'transactions', title: 'Recent Transactions', component: () => <RecentTransactionsPanel /> },
    { id: 'stats', title: 'Market Stats', component: () => <MarketStatsPanel /> },
  ]);
  const [currentPage, setCurrentPage] = useState<PageType>('trade');

  const movePanel = useCallback((dragId: string, hoverId: string) => {
    setPanels((prevPanels) => {
      const dragIndex = prevPanels.findIndex((p) => p.id === dragId);
      const hoverIndex = prevPanels.findIndex((p) => p.id === hoverId);

      if (dragIndex === -1 || hoverIndex === -1) return prevPanels;

      const newPanels = [...prevPanels];
      const [draggedPanel] = newPanels.splice(dragIndex, 1);
      newPanels.splice(hoverIndex, 0, draggedPanel);

      return newPanels;
    });
  }, []);

  const removePanel = useCallback((id: string) => {
    setPanels((prevPanels) => prevPanels.filter((p) => p.id !== id));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#111215] text-white">
        {/* Navigation */}
        <nav className="h-[60px]">
          <Nav currentPage={currentPage} onNavigate={setCurrentPage} />
        </nav>

        {/* Page Content */}
        {currentPage === 'trade' && <TradePage />}
        {currentPage === 'explore' && <ExplorePage />}
        {currentPage === 'pool' && <PoolPage onNavigateToNewPosition={() => setCurrentPage('new-position')} />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'new-position' && <NewPositionPage onBack={() => setCurrentPage('pool')} />}
        {currentPage === 'mvp-swap' && <MVPSwapPage />}
      </div>
    </DndProvider>
  );
}
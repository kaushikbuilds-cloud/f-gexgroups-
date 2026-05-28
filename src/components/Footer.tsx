import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isSolutions = location.pathname === '/solutions';
  const isTradeHub = location.pathname === '/tradehub';

  const getBorderColor = () => {
    if (isSolutions) return 'from-solutions-primary/20 via-solutions-glow/10 to-transparent';
    if (isTradeHub) return 'from-tradehub-primary/20 via-tradehub-glow/10 to-transparent';
    return 'from-emerald-500/20 via-teal-500/10 to-transparent';
  };

  return (
    <footer className="relative w-full z-10 bg-dark-base py-10 mt-auto">
      {/* Subtle glow divider line above footer */}
      <div className={`h-[1px] w-full bg-gradient-to-r ${getBorderColor()}`} />

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="text-gray-400 font-heading font-semibold text-sm">
          © 2023-2024 TradeHub – F-Gex Groups. All rights reserved.
        </div>

        {/* Right */}
        <div className="text-gray-500 text-xs md:text-sm tracking-wide text-center md:text-right">
          Building Technology & Financial Education Ecosystems.
        </div>
      </div>
    </footer>
  );
}

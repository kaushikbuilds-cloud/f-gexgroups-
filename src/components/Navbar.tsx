import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, toPath: string = '/') => {
    if (location.pathname === toPath) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 90; // header height
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const isSolutions = location.pathname === '/solutions';
  const isTradeHub = location.pathname === '/tradehub';

  // Determine Nav links based on route
  const getNavLinks = () => {
    if (isSolutions) {
      return [
        { name: 'Portal Home', href: '/', id: 'home' },
        { name: 'Services', href: '/solutions#services', id: 'services' },
        { name: 'Why Us', href: '/solutions#why-choose-us', id: 'why-choose-us' },
        { name: 'Contact', href: '/solutions#contact', id: 'contact' },
      ];
    }
    if (isTradeHub) {
      return [
        { name: 'Portal Home', href: '/', id: 'home' },
        { name: 'Programs', href: '/tradehub#programs', id: 'programs' },
        { name: 'Approach', href: '/tradehub#approach', id: 'approach' },
        { name: 'Contact', href: '/tradehub#contact', id: 'contact' },
      ];
    }
    return [
      { name: 'Home', href: '/#home', id: 'home' },
      { name: 'Divisions', href: '/#divisions', id: 'divisions' },
      { name: 'Contact', href: '/#contact', id: 'contact' },
    ];
  };

  const navLinks = getNavLinks();

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group">
          <img
            src="/logo-shield.png"
            alt="F-Gex Logo"
            className="h-12 w-auto object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_14px_rgba(16,185,129,0.55)] transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id, link.href.split('#')[0])}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 relative py-1"
            >
              {link.name}
            </a>
          ))}
          {/* Action CTA */}
          {!isSolutions && !isTradeHub && (
            <a 
              href="#divisions"
              onClick={(e) => handleNavClick(e, 'divisions')}
              className="text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 px-4 py-2 rounded-full flex items-center space-x-1 transition-all"
            >
              <span>Explore Divisions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition-colors focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-[60px] left-0 w-full bg-dark-base/95 backdrop-blur-xl border-b border-white/5 py-6 px-8 flex flex-col space-y-4 z-40">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                setIsOpen(false);
                handleNavClick(e, link.id, link.href.split('#')[0]);
              }}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

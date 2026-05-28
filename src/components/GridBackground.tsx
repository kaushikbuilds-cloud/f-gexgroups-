import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function GridBackground() {
  const location = useLocation();
  const [theme, setTheme] = useState<'home' | 'solutions' | 'tradehub'>('home');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/solutions') {
      setTheme('solutions');
    } else if (path === '/tradehub') {
      setTheme('tradehub');
    } else {
      setTheme('home');
    }
  }, [location]);

  useEffect(() => {
    const handleThemeHover = (e: Event) => {
      const customTheme = (e as CustomEvent).detail;
      // Only allow hover overrides on the home route
      if (location.pathname === '/') {
        setTheme(customTheme);
      }
    };

    window.addEventListener('theme-hover', handleThemeHover);
    return () => window.removeEventListener('theme-hover', handleThemeHover);
  }, [location]);

  return (
    <div className="grid-background">
      {/* Moving grid lines overlay */}
      <div className="grid-lines opacity-75"></div>
      
      {/* Glow Orb 1 */}
      <div 
        className={`glow-orb animate-orb-slow-1 ${
          theme === 'solutions' 
            ? 'bg-solutions-primary/25 w-[700px] h-[700px] -top-40 -left-40' 
            : theme === 'tradehub'
            ? 'bg-tradehub-primary/20 w-[600px] h-[600px] -top-20 -left-20'
            : 'bg-emerald-500/12 w-[650px] h-[650px] -top-30 -left-30'
        }`}
      />

      {/* Glow Orb 2 */}
      <div 
        className={`glow-orb animate-orb-slow-2 ${
          theme === 'solutions' 
            ? 'bg-solutions-glow/20 w-[600px] h-[600px] bottom-10 right-10' 
            : theme === 'tradehub'
            ? 'bg-tradehub-glow/25 w-[700px] h-[700px] -bottom-40 -right-20'
            : 'bg-teal-500/20 w-[700px] h-[700px] -bottom-30 -right-30'
        }`}
      />

      {/* Glow Orb 3 */}
      <div 
        className={`glow-orb animate-pulse ${
          theme === 'solutions'
            ? 'bg-solutions-accent/15 w-[500px] h-[500px] top-1/3 right-1/4'
            : theme === 'tradehub'
            ? 'bg-emerald-600/15 w-[450px] h-[450px] top-1/2 left-1/3'
            : 'bg-teal-600/8 w-[400px] h-[400px] top-1/4 left-1/2'
        }`}
      />
    </div>
  );
}

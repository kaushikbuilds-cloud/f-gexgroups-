import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Cpu, Terminal, ArrowRight, ShieldCheck, BarChart4, Network, Brain } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<'solutions' | 'tradehub' | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const handleHoverStart = (card: 'solutions' | 'tradehub') => {
    setHovered(card);
    window.dispatchEvent(new CustomEvent('theme-hover', { detail: card }));
  };

  const handleHoverEnd = () => {
    setHovered(null);
    window.dispatchEvent(new CustomEvent('theme-hover', { detail: 'home' }));
  };

  return (
    <div className="relative z-10 pt-32 pb-24">
      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4.5 py-1.5 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-heading text-xs font-semibold tracking-widest text-emerald-400 uppercase">
            TECHNOLOGY & FINANCIAL ECOSYSTEM
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl md:text-7xl text-white tracking-tight leading-tight max-w-5xl mx-auto"
        >
          One Ecosystem. <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
            Two Specialized Divisions.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-6 mb-10 leading-relaxed"
        >
          F-Gex Groups unites cutting-edge technology infrastructure development with institutional-grade financial education to drive your future success.
          Choose a division below to get started.
        </motion.p>
      </section>

      {/* Divisions / Selection Section */}
      <section id="divisions" className="max-w-6xl mx-auto px-6 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Card 1 - F-Gex Solutions */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => handleHoverStart('solutions')}
            onMouseLeave={handleHoverEnd}
            className={`glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group flex flex-col justify-between cursor-pointer border border-white/5 transition-all duration-500 ${
              hovered === 'solutions' 
                ? 'scale-[1.03] border-solutions-primary/40 shadow-glow-indigo' 
                : hovered === 'tradehub' 
                ? 'opacity-45 scale-[0.98] blur-[1px]' 
                : 'opacity-100'
            }`}
            onClick={() => navigate('/solutions')}
          >
            {/* Dynamic ambient highlight */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-solutions-primary/10 rounded-full filter blur-3xl group-hover:bg-solutions-primary/20 transition-colors duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-xl bg-solutions-primary/15 border border-solutions-primary/20 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-1">
                <Cpu className="w-7 h-7 text-solutions-primary" />
              </div>
              
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white tracking-tight mb-4 flex items-center">
                <span>F-Gex Solutions</span>
                <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-solutions-glow bg-solutions-glow/10 px-2 py-0.5 rounded">Tech Division</span>
              </h2>
              
              <p className="text-gray-400 leading-relaxed mb-8 text-sm lg:text-base">
                Architecting premium enterprise technology. Specializing in smart industrial automation, secure IoT infrastructure, networking, and custom AI development.
              </p>

              {/* Features List */}
              <div className="space-y-3.5 mb-10">
                {[
                  { name: 'Industrial IoT Systems', icon: Cpu },
                  { name: 'Enterprise Networking', icon: Network },
                  { name: 'Process Automation', icon: Terminal },
                  { name: 'AI Integration pipelines', icon: Brain },
                  { name: 'Secure Infrastructure', icon: ShieldCheck }
                ].map((feat) => (
                  <div key={feat.name} className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                    <feat.icon className="w-4 h-4 text-solutions-primary opacity-80" />
                    <span className="text-sm font-medium">{feat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <button
                className="w-full py-4 bg-solutions-primary/10 hover:bg-solutions-primary text-solutions-primary hover:text-white border border-solutions-primary/25 hover:border-solutions-primary font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_4px_20px_rgba(99,102,241,0.05)]"
              >
                <span>Enter Solutions Portal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Card 2 - F-Gex TradeHub */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => handleHoverStart('tradehub')}
            onMouseLeave={handleHoverEnd}
            className={`glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group flex flex-col justify-between cursor-pointer border border-white/5 transition-all duration-500 ${
              hovered === 'tradehub' 
                ? 'scale-[1.03] border-tradehub-primary/40 shadow-glow-emerald' 
                : hovered === 'solutions' 
                ? 'opacity-45 scale-[0.98] blur-[1px]' 
                : 'opacity-100'
            }`}
            onClick={() => navigate('/tradehub')}
          >
            {/* Dynamic ambient highlight */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-tradehub-primary/10 rounded-full filter blur-3xl group-hover:bg-tradehub-primary/20 transition-colors duration-500" />
            
            <div>
              <div className="w-14 h-14 rounded-xl bg-tradehub-primary/15 border border-tradehub-primary/20 flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-1">
                <BarChart4 className="w-7 h-7 text-tradehub-primary" />
              </div>
              
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-white tracking-tight mb-4 flex items-center">
                <span>F-Gex TradeHub</span>
                <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-tradehub-glow bg-tradehub-glow/10 px-2 py-0.5 rounded">Finance Division</span>
              </h2>
              
              <p className="text-gray-400 leading-relaxed mb-8 text-sm lg:text-base">
                Mastering the financial markets. Delivering institutional-grade Forex and Stock Market curriculum, algorithmic strategies, and advanced risk models.
              </p>

              {/* Features List */}
              <div className="space-y-3.5 mb-10">
                {[
                  { name: 'Forex Trading Systems', icon: BarChart4 },
                  { name: 'Indian Equities Markets', icon: ShieldCheck },
                  { name: 'Institutional Risk Management', icon: ShieldCheck },
                  { name: 'Quantitative Algo Strategies', icon: Terminal },
                  { name: 'Proprietary Market Research', icon: Brain }
                ].map((feat) => (
                  <div key={feat.name} className="flex items-center space-x-3 text-gray-400 group-hover:text-gray-200 transition-colors">
                    <feat.icon className="w-4 h-4 text-tradehub-primary opacity-80" />
                    <span className="text-sm font-medium">{feat.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <button
                className="w-full py-4 bg-tradehub-primary/10 hover:bg-tradehub-primary text-tradehub-primary hover:text-white border border-tradehub-primary/25 hover:border-tradehub-primary font-semibold rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.05)]"
              >
                <span>Enter TradeHub Portal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

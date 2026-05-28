import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldAlert, Cpu, BookOpen, Brain, ChevronRight, Quote, BarChart2, DollarSign } from 'lucide-react';

export default function TradeHub() {
  const [price, setPrice] = useState(73420.50);
  const [priceChange, setPriceChange] = useState(1.42);
  const [isPriceUp, setIsPriceUp] = useState(true);
  const [activeTimeframe, setActiveTimeframe] = useState<'1m' | '5m' | '1h' | '1d'>('5m');
  const [bids, setBids] = useState<Array<{ price: number; volume: number }>>([]);
  const [asks, setAsks] = useState<Array<{ price: number; volume: number }>>([]);

  // Mock charts paths based on timeframe
  const chartsData = {
    '1m': [45, 52, 48, 58, 62, 55, 68, 72, 70, 85],
    '5m': [60, 58, 65, 62, 72, 68, 75, 78, 74, 88],
    '1h': [75, 70, 68, 74, 70, 82, 78, 85, 80, 92],
    '1d': [40, 50, 48, 62, 58, 74, 70, 84, 78, 96]
  };

  // Generate mock bids/asks
  const generateOrderBook = (basePrice: number) => {
    const tempBids = [];
    const tempAsks = [];
    for (let i = 1; i <= 4; i++) {
      tempBids.push({
        price: Number((basePrice - i * (Math.random() * 2 + 0.5)).toFixed(2)),
        volume: Number((Math.random() * 2 + 0.1).toFixed(3))
      });
      tempAsks.push({
        price: Number((basePrice + i * (Math.random() * 2 + 0.5)).toFixed(2)),
        volume: Number((Math.random() * 2 + 0.1).toFixed(3))
      });
    }
    setBids(tempBids);
    setAsks(tempAsks);
  };

  // Run live trading tick simulation
  useEffect(() => {
    generateOrderBook(price);

    const priceInterval = setInterval(() => {
      const delta = (Math.random() - 0.47) * 8; // slight upward bias
      const nextPrice = Number((price + delta).toFixed(2));
      const nextUp = delta >= 0;
      
      setPrice(nextPrice);
      setIsPriceUp(nextUp);
      
      // Update price percent change
      const basePct = 1.42;
      const finalPct = Number((basePct + (nextPrice - 73420.5) / 1000).toFixed(2));
      setPriceChange(finalPct);

      // Trigger orderbook tick
      generateOrderBook(nextPrice);
    }, 1800);

    return () => clearInterval(priceInterval);
  }, [price]);

  const programs = [
    {
      title: 'Market Research & Education',
      desc: 'In-depth analysis of market trends to build analytical skills and informed decision making.',
      icon: BookOpen
    },
    {
      title: 'Forex Market Training',
      desc: 'Understand currency pairs, trading sessions, liquidity concepts, and disciplined risk management.',
      icon: Globe
    },
    {
      title: 'Indian Stock Market',
      desc: 'Learn intraday, swing, and long-term investing frameworks tailored for structured growth.',
      icon: TrendingUp
    },
    {
      title: 'Algorithmic Trading',
      desc: 'Explore strategy automation, Python-based trading systems, APIs, and backtesting concepts.',
      icon: Cpu
    },
    {
      title: 'Risk Management',
      desc: 'Develop capital preservation strategies and disciplined trading methodologies.',
      icon: ShieldAlert
    },
    {
      title: 'Trading Psychology',
      desc: 'Master emotional discipline, consistency, and structured execution principles.',
      icon: Brain
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Learn',
      desc: 'Acquire market knowledge, technical concepts, strategies, and risk management foundations.'
    },
    {
      num: '02',
      title: 'Practice',
      desc: 'Paper trading, backtesting historical data, and strategy refinement without capital exposure.'
    },
    {
      num: '03',
      title: 'Analyze',
      desc: 'Journal performance, review setups, and improve decision-making consistency.'
    },
    {
      num: '04',
      title: 'Execute',
      desc: 'Apply disciplined execution in live market conditions with structured risk control.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Convert numbers to currency layout
  const formatCurrency = (val: number) => {
    return val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="relative z-10 pt-32 pb-16">
      
      {/* Background Stock Video Header Container */}
      <div className="absolute top-0 left-0 w-full h-[580px] md:h-[680px] overflow-hidden pointer-events-none z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-20 filter saturate-50"
        >
          <source src="/assets/Rising Stock Market Chart Arrow Rallying Growth Recovery Concept 4K Background VJ Video Effect(1080P_60FPS).mp4" type="video/mp4" />
        </video>
        {/* Dynamic gradient mask overlays for seamless edge blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/75 to-[#030712]" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-tradehub-primary/10 border border-tradehub-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-tradehub-glow animate-pulse"></span>
              <span className="font-heading text-xs font-semibold tracking-wider text-tradehub-glow uppercase">
                FINANCIAL EDUCATION DIVISION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6"
            >
              Master the Markets. <br />
              <span className="bg-gradient-to-r from-tradehub-primary via-emerald-400 to-tradehub-glow bg-clip-text text-transparent">
                Structured Market Education
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            >
              F-Gex TradeHub delivers premium, research-driven curriculum pathways. We focus on risk models, trading discipline, quant methodologies, and consistent market analysis to build professional financial competency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button
                onClick={() => handleScrollTo('programs')}
                className="w-full sm:w-auto px-8 py-4 bg-tradehub-primary hover:bg-tradehub-primary/95 text-white font-semibold rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5 text-center"
              >
                Explore Programs
              </button>
              <button
                onClick={() => handleScrollTo('approach')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold rounded-full transition-all hover:-translate-y-0.5 text-center"
              >
                Our Methodology
              </button>
            </motion.div>
          </div>

          {/* Hero Right Column: Live Trading Chart & Orderbook Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden shadow-2xl"
          >
            {/* Ambient glows inside card */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-tradehub-glow/10 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-tradehub-primary/10 rounded-full filter blur-3xl" />

            {/* Widget Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <BarChart2 className="w-5 h-5 text-tradehub-glow" />
                <span className="text-xs font-bold text-white font-heading tracking-tight">LIVE_TERMINAL // FGEX_INR</span>
              </div>
              
              {/* Timeframe selector */}
              <div className="flex space-x-1 bg-black/40 border border-white/5 rounded-lg p-0.5">
                {(['1m', '5m', '1h', '1d'] as const).map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setActiveTimeframe(tf)}
                    className={`px-2 py-1 rounded text-[9px] font-semibold transition-all uppercase ${
                      activeTimeframe === tf 
                        ? 'bg-tradehub-primary text-white shadow-md' 
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Real-time Ticker Metrics */}
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-extrabold text-white font-mono tracking-tight">
                  ₹{formatCurrency(price)}
                </span>
                <span className={`text-xs font-mono font-bold ${isPriceUp ? 'text-emerald-400' : 'text-red-400'}`}>
                  {isPriceUp ? '▲' : '▼'} {isPriceUp ? '+' : ''}{priceChange}%
                </span>
              </div>
              <div className="flex items-center space-x-1 text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                <DollarSign className="w-3 h-3 text-tradehub-glow" />
                <span>VOLUME // 84.62 Cr</span>
              </div>
            </div>

            {/* SVG Live Render Chart */}
            <div className="h-36 w-full bg-black/40 border border-white/5 rounded-xl mb-5 flex items-end relative overflow-hidden">
              <svg className="w-full h-full pt-6 px-1" viewBox="0 0 100 60" preserveAspectRatio="none">
                {/* Grid guidelines */}
                <line x1="0" y1="15" x2="100" y2="15" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="30" x2="100" y2="30" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="45" x2="100" y2="45" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                {/* Draw dynamic trend path */}
                <motion.polyline
                  fill="none"
                  stroke={isPriceUp ? '#10b981' : '#f87171'}
                  strokeWidth="2"
                  points={chartsData[activeTimeframe].map((val, idx) => `${idx * 11},${60 - val}`).join(' ')}
                  key={activeTimeframe + (isPriceUp ? 'up' : 'down')}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Interactive pulsing point on latest value */}
                {(() => {
                  const dataArray = chartsData[activeTimeframe];
                  const lastVal = dataArray[dataArray.length - 1];
                  return (
                    <circle 
                      cx="99" 
                      cy={60 - lastVal} 
                      r="2" 
                      fill={isPriceUp ? '#10b981' : '#f87171'} 
                      className="animate-ping" 
                    />
                  );
                })()}
              </svg>
            </div>

            {/* Order Book Grid (Bids / Asks side-by-side) */}
            <div className="grid grid-cols-2 gap-4 text-left font-mono text-[9px]">
              
              {/* Bids (BUY) */}
              <div>
                <span className="text-gray-500 uppercase font-bold tracking-wider mb-2 block border-b border-white/5 pb-1">BIDS // BUY</span>
                <div className="space-y-1">
                  {bids.map((bid, i) => (
                    <div key={i} className="flex justify-between text-emerald-400/90 py-0.5 hover:bg-emerald-500/5 px-1 rounded transition-colors">
                      <span>₹{formatCurrency(bid.price)}</span>
                      <span className="text-gray-400">{bid.volume}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Asks (SELL) */}
              <div>
                <span className="text-gray-500 uppercase font-bold tracking-wider mb-2 block border-b border-white/5 pb-1">ASKS // SELL</span>
                <div className="space-y-1">
                  {asks.map((ask, i) => (
                    <div key={i} className="flex justify-between text-red-400/90 py-0.5 hover:bg-red-500/5 px-1 rounded transition-colors">
                      <span>₹{formatCurrency(ask.price)}</span>
                      <span className="text-gray-400">{ask.volume}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-semibold tracking-wider text-tradehub-glow uppercase">CURRICULUM</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3 tracking-tight">Structured Learning Tracks</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(52,211,153,0.08)] hover:border-tradehub-glow/30"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-tradehub-glow/5 rounded-full filter blur-2xl group-hover:bg-tradehub-glow/10 transition-colors" />
              
              <div className="w-12 h-12 rounded-lg bg-tradehub-primary/10 border border-tradehub-primary/20 flex items-center justify-center mb-6">
                <prog.icon className="w-6 h-6 text-tradehub-glow" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-tight">{prog.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{prog.desc}</p>
              
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center text-xs font-semibold tracking-wider text-tradehub-glow uppercase group-hover:translate-x-1 transition-transform"
              >
                <span>Inquire track</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Step-by-Step Approach */}
      <section id="approach" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-semibold tracking-wider text-tradehub-glow uppercase">METHODOLOGY</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3 tracking-tight">Our Step-by-Step Approach</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card rounded-xl p-8 relative group hover:border-tradehub-primary/30 transition-all duration-300"
            >
              <div className="text-5xl font-heading font-extrabold text-tradehub-primary/15 group-hover:text-tradehub-primary/30 transition-colors mb-6">
                {step.num}
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & Quote Card */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left checklist */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-heading text-xs font-semibold tracking-wider text-tradehub-glow uppercase">WHY CHOOSE US</span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3 mb-8 tracking-tight">Structured Market Education</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Professional market education',
                'Research-driven insights',
                'Strong focus on discipline',
                'Forex & Indian market concepts',
                'Multi-language accessibility',
                'Structured learning systems'
              ].map((pt) => (
                <div key={pt} className="flex items-center space-x-3 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-tradehub-glow animate-pulse"></span>
                  <span className="text-sm font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group border border-tradehub-primary/20 shadow-[0_0_40px_rgba(16,185,129,0.05)]"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-tradehub-primary/5 rounded-full filter blur-2xl" />
            <Quote className="w-10 h-10 text-tradehub-glow/20 mb-6" />
            <blockquote className="text-gray-300 text-lg md:text-xl font-heading font-medium leading-relaxed italic mb-6">
              "We focus on building financial literacy through structured education. We do not provide hype; we provide the tools to understand markets."
            </blockquote>
            <cite className="not-italic text-xs font-semibold tracking-widest text-tradehub-glow uppercase">
              F-GEX TRADEHUB DIVISION
            </cite>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Simple dynamic inline mock for Globe icon
function Globe(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Network, Zap, Settings, CheckCircle2, ChevronRight, Server, Shield, Activity } from 'lucide-react';

export default function Solutions() {
  const [logs, setLogs] = useState<string[]>([
    '[INIT] F-Gex technology cluster active',
    '[OK] Network secure nodes linked to cloud mesh',
    '[SYNC] Datacenter synchronization initialized'
  ]);
  const [systemLoad, setSystemLoad] = useState(42);
  const [activePackets, setActivePackets] = useState(18);

  // Mock console log generator
  useEffect(() => {
    const mockPhrases = [
      '[OK] IoT Node-X8 packet handshake successful',
      '[SYNC] Mainframe database latency stable (12ms)',
      '[AI] Automated network node auto-scaling initiated',
      '[SEC] Threat scanning executed. 0 vulnerabilities found',
      '[OK] Edge Gateway synced successfully',
      '[AI] LLM model inference batch routed (28.4 TFLOPS)',
      '[SYNC] System health verification complete (100% OK)'
    ];

    const logInterval = setInterval(() => {
      const randomPhrase = mockPhrases[Math.floor(Math.random() * mockPhrases.length)];
      const timestamp = new Date().toLocaleTimeString();
      setLogs((prev) => [...prev.slice(-5), `[${timestamp}] ${randomPhrase}`]);
      
      // Randomize stats slightly
      setSystemLoad(Math.floor(Math.random() * 25) + 35);
      setActivePackets(Math.floor(Math.random() * 12) + 12);
    }, 2500);

    return () => clearInterval(logInterval);
  }, []);

  const services = [
    {
      title: 'IoT Solutions',
      desc: 'Intelligent connected systems that improve operational efficiency through smart monitoring and automation.',
      icon: Cpu
    },
    {
      title: 'Networking Infrastructure',
      desc: 'Secure, scalable, high-performance networking solutions designed for modern business environments.',
      icon: Network
    },
    {
      title: 'Automation Systems',
      desc: 'Workflow and industrial automation systems that optimize productivity and reduce operational complexity.',
      icon: Settings
    },
    {
      title: 'Software Defined Networking',
      desc: 'Flexible network architectures with centralized management and scalable infrastructure deployment.',
      icon: Server
    },
    {
      title: 'Renewable Energy Integration',
      desc: 'Sustainable technology systems integrating renewable energy and efficient infrastructure solutions.',
      icon: Zap
    },
    {
      title: 'AI & Smart Systems',
      desc: 'Modern AI-powered solutions for automation, analytics, and intelligent digital transformation.',
      icon: Shield
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

  return (
    <div className="relative z-10 pt-32 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Column */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-solutions-primary/10 border border-solutions-primary/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-solutions-glow animate-pulse"></span>
              <span className="font-heading text-xs font-semibold tracking-wider text-solutions-glow uppercase">
                SMART TECHNOLOGY INFRASTRUCTURE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl md:text-6xl text-white tracking-tight leading-tight mb-6"
            >
              Building Scalable Digital <br />
              <span className="bg-gradient-to-r from-solutions-primary via-solutions-accent to-solutions-glow bg-clip-text text-transparent">
                Systems for the Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            >
              F-Gex Solutions architects industrial-grade connected ecosystems. We deliver advanced industrial automation, high-performance networking, Software Defined Networking (SDN), and integrated AI operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="mailto:fgexsolution@gmail.com"
                className="w-full sm:w-auto px-8 py-4 bg-solutions-primary hover:bg-solutions-primary/95 text-white font-semibold rounded-full shadow-[0_4px_25px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_30px_rgba(99,102,241,0.4)] transition-all hover:-translate-y-0.5 text-center"
              >
                Get Tech Consultation
              </a>
              <button
                onClick={() => handleScrollTo('services')}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-semibold rounded-full transition-all hover:-translate-y-0.5 text-center"
              >
                Explore Services
              </button>
            </motion.div>
          </div>

          {/* Hero Right Column: Cybernetic Console & SVG Topology Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full glass-card rounded-2xl p-6 border border-white/5 relative overflow-hidden shadow-2xl"
          >
            {/* Ambient glows inside card */}
            <div className="absolute -top-20 -right-20 w-44 h-44 bg-solutions-glow/10 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-solutions-primary/10 rounded-full filter blur-3xl" />

            {/* Widget Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/5">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 font-mono pl-2">SYSTEM_OPERATIONS // NODE_01</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-solutions-glow/10 border border-solutions-glow/20 px-2.5 py-0.5 rounded text-[10px] text-solutions-glow font-mono font-bold uppercase tracking-wider animate-pulse">
                <Activity className="w-3 h-3" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* SVG Network Topology Map */}
            <div className="h-44 w-full bg-black/40 border border-white/5 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full p-4" viewBox="0 0 400 160">
                {/* Connections */}
                <line x1="80" y1="80" x2="200" y2="40" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="80" y1="80" x2="200" y2="120" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="200" y1="40" x2="320" y2="80" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="200" y1="120" x2="320" y2="80" stroke="#22d3ee" strokeWidth="1.5" strokeOpacity="0.6" />
                <line x1="200" y1="40" x2="200" y2="120" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.5" />

                {/* Animated flowing data packets */}
                <circle r="3" fill="#22d3ee">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 80 80 L 200 40 L 320 80" />
                </circle>
                <circle r="3" fill="#8b5cf6">
                  <animateMotion dur="4.2s" repeatCount="indefinite" path="M 80 80 L 200 120 L 320 80" />
                </circle>

                {/* Nodes */}
                {/* Node A (Gateway) */}
                <circle cx="80" cy="80" r="12" fill="#030712" stroke="#4f46e5" strokeWidth="3" />
                <circle cx="80" cy="80" r="4" fill="#6366f1" className="animate-pulse" />
                <text x="80" y="105" fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">GATEWAY</text>

                {/* Node B (Core DB) */}
                <circle cx="200" cy="40" r="10" fill="#030712" stroke="#8b5cf6" strokeWidth="2.5" />
                <circle cx="200" cy="40" r="3.5" fill="#8b5cf6" className="animate-pulse" />
                <text x="200" y="22" fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">DB_MAIN</text>

                {/* Node C (API Service) */}
                <circle cx="200" cy="120" r="10" fill="#030712" stroke="#8b5cf6" strokeWidth="2.5" />
                <circle cx="200" cy="120" r="3.5" fill="#8b5cf6" className="animate-pulse" />
                <text x="200" y="142" fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">API_SRV</text>

                {/* Node D (Load Balancer) */}
                <circle cx="320" cy="80" r="12" fill="#030712" stroke="#22d3ee" strokeWidth="3" />
                <circle cx="320" cy="80" r="4" fill="#22d3ee" className="animate-pulse" />
                <text x="320" y="105" fill="#9ca3af" fontSize="9" textAnchor="middle" fontFamily="monospace">BALANCER</text>
              </svg>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col justify-center">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">SYSTEM_LOAD</span>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-heading font-extrabold text-white font-mono">{systemLoad}%</span>
                  <span className="text-[10px] text-emerald-400 font-mono mb-0.5">STABLE</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-solutions-primary h-full rounded-full transition-all duration-500" style={{ width: `${systemLoad}%` }}></div>
                </div>
              </div>

              <div className="bg-black/30 border border-white/5 rounded-xl p-3.5 flex flex-col justify-center">
                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-1">DATA_PACKETS</span>
                <div className="flex items-end justify-between">
                  <span className="text-xl font-heading font-extrabold text-white font-mono">{activePackets}/s</span>
                  <span className="text-[10px] text-solutions-glow font-mono mb-0.5">ACTIVE</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 mt-2 overflow-hidden">
                  <div className="bg-solutions-glow h-full rounded-full transition-all duration-500" style={{ width: `${(activePackets / 30) * 100}%` }}></div>
                </div>
              </div>
            </div>

            {/* Monospace Scrolling Console Logs */}
            <div className="bg-black/60 rounded-xl border border-white/5 p-4 font-mono text-[10px] text-left text-gray-400 min-h-36 flex flex-col space-y-1.5">
              <AnimatePresence initial={false}>
                {logs.map((log, index) => (
                  <motion.div
                    key={log + index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`leading-relaxed ${
                      log.includes('[OK]') 
                        ? 'text-emerald-400' 
                        : log.includes('[WARN]') 
                        ? 'text-yellow-400' 
                        : log.includes('[AI]')
                        ? 'text-solutions-glow'
                        : 'text-solutions-primary'
                    }`}
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="flex items-center pt-1 text-solutions-glow">
                <span>$ f-gex-server --listen</span>
                <span className="w-1.5 h-3 bg-solutions-glow ml-1.5 animate-cursor-blink"></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
        <div className="text-center mb-16">
          <span className="font-heading text-xs font-semibold tracking-wider text-solutions-glow uppercase">OUR CAPABILITIES</span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3 tracking-tight">Enterprise Tech Services</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="glass-card rounded-xl p-8 relative overflow-hidden group hover:shadow-[0_0_30px_rgba(34,211,238,0.08)] hover:border-solutions-glow/30"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-solutions-glow/5 rounded-full filter blur-2xl group-hover:bg-solutions-glow/10 transition-colors" />
              
              <div className="w-12 h-12 rounded-lg bg-solutions-primary/10 border border-solutions-primary/20 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-solutions-glow" />
              </div>
              
              <h3 className="font-heading font-bold text-xl text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center text-xs font-semibold tracking-wider text-solutions-glow uppercase group-hover:translate-x-1 transition-transform"
              >
                <span>Request details</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="max-w-7xl mx-auto px-6 py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <span className="font-heading text-xs font-semibold tracking-wider text-solutions-glow uppercase">WHY CHOOSE US</span>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3 tracking-tight">Modern Systems, Scaled.</h2>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Scalable Infrastructure', desc: 'Enterprise systems constructed to seamlessly handle horizontal growth demands.' },
                { title: 'Modern Architecture', desc: 'Modern software integrations utilizing clean code, speed optimizations, and security layers.' },
                { title: 'Business-Focused Solutions', desc: 'Direct mapping of technology requirements to core business performance outcomes.' },
                { title: 'Cost-Efficient Systems', desc: 'Intelligent automation systems configured to maximize deployment efficiency and reduce overheads.' },
                { title: 'Future-Ready Technologies', desc: 'Dynamic designs incorporating scalable cloud models and intelligent AI workflows.' }
              ].map((pt) => (
                <div key={pt.title} className="flex items-start space-x-4 bg-white/[0.01] backdrop-blur-sm border border-white/5 p-5 rounded-xl hover:border-solutions-primary/20 transition-all duration-300">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-solutions-glow" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white tracking-tight">{pt.title}</h4>
                    <p className="text-gray-400 text-sm mt-1 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

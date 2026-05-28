import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function ContactSection() {
  const location = useLocation();
  const isSolutions = location.pathname === '/solutions';
  const isTradeHub = location.pathname === '/tradehub';

  // Determine active highlight colors based on division theme
  const getGlowStyles = () => {
    if (isSolutions) {
      return {
        text: 'text-solutions-primary',
        glow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] hover:border-solutions-primary/50',
        bg: 'bg-solutions-primary/5',
        line: 'bg-gradient-to-r from-transparent via-solutions-primary/30 to-transparent',
      };
    }
    if (isTradeHub) {
      return {
        text: 'text-tradehub-primary',
        glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:border-tradehub-primary/50',
        bg: 'bg-tradehub-primary/5',
        line: 'bg-gradient-to-r from-transparent via-tradehub-primary/30 to-transparent',
      };
    }
    return {
      text: 'text-emerald-400',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] hover:border-emerald-500/50',
      bg: 'bg-emerald-500/5',
      line: 'bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent',
    };
  };

  const styles = getGlowStyles();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Minimal Divider line */}
      <div className={`h-[1px] w-full max-w-5xl mx-auto mb-20 ${styles.line}`} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-xs tracking-[0.2em] text-gray-500 uppercase">
            CONNECT WITH US
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mt-3 mb-6 tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Reach out to our core team for inquiries regarding partnership, enterprise solutions, or trading curriculum paths.
          </p>

          {/* Premium Email Pill */}
          <a
            href="mailto:fgexsolution@gmail.com"
            className={`inline-flex items-center space-x-4 bg-white/[0.02] border border-white/5 rounded-full px-6 py-4 md:px-8 md:py-5 transition-all duration-300 ${styles.glow} group`}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${styles.bg} flex items-center justify-center`}>
              <Mail className={`w-5 h-5 ${styles.text}`} />
            </div>
            <div className="text-left">
              <p className="text-[10px] text-gray-500 tracking-wider uppercase font-semibold">SEND EMAIL</p>
              <p className="text-base md:text-lg font-medium text-white group-hover:text-gray-100 transition-colors">
                fgexsolution@gmail.com
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 group-hover:text-white transition-all ml-2" />
          </a>

          <p className="text-xs text-gray-600 mt-12 tracking-wide font-medium">
            by F-Gex Groups
          </p>
        </motion.div>
      </div>
    </section>
  );
}

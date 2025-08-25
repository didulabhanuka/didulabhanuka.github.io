import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const AnimatedIcon = ({ Icon, delay = 0 }) => (
  <motion.div
    initial={{ y: 0, opacity: 0.9, scale: 1 }}
    animate={{ y: [0, -12, 0], scale: [1, 1.08, 1], opacity: [0.9, 1, 0.9] }}
    transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity, delay }}
    className="relative group"
  >
    <div className="absolute -inset-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300" />
    <div className="relative p-3 sm:p-4 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-white" />
    </div>
  </motion.div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: false });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />

          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-4xl mx-auto">
              {/* Icon loader row */}
              <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12">
                <AnimatedIcon Icon={Code2} delay={0} />
                <AnimatedIcon Icon={User} delay={0.2} />
                <AnimatedIcon Icon={Github} delay={0.4} />
              </div>
            </div>
          </div>

          {/* Local keyframes for the subtle float used in BackgroundEffect */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0) }
              50% { transform: translateY(-10px) }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;

"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // h-screen makes it take up the FULL screen height
    <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-cream">
      
      {/* Background Gradient Blob */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-orange-300/30 rounded-full blur-[120px]"
      />

      <div className="text-center z-10 px-4 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl md:text-[10rem] font-bold text-charcoal mb-6 tracking-tighter leading-none"
        >
          Amico
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-3xl text-charcoal/60 mb-12"
        >
          Your private, evolving digital companion.
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="flex gap-4 justify-center"
        >
            <button className="bg-charcoal text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform">
                Start Journey
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-medium text-charcoal border border-charcoal/20 hover:bg-charcoal/5 transition-colors">
                Watch Demo
            </button>
        </motion.div>
      </div>

      {/* Scroll Indicator at the bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-12 text-charcoal/40 text-sm font-medium uppercase tracking-widest"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
}
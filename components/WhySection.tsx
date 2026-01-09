"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Empathy",
    description: "Understand context and emotion, not just commands.",
    number: "01"
  },
  {
    title: "Personalization",
    description: "Evolves with your unique habits and preferences.",
    number: "02"
  },
  {
    title: "Availability",
    description: "Always ready, locally processed, zero latency.",
    number: "03"
  },
  {
    title: "Confidentiality",
    description: "Your data never leaves your device. Encryption standard.",
    number: "04"
  }
];

export default function WhySection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 z-20">
      
      {/* Section Title */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold text-charcoal mb-16 text-center tracking-tight"
      >
        Why Amico?
      </motion.h2>

      {/* The List Container */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            // FIX: Changed rounded-[3rem] to rounded-3xl for better fit
            // FIX: Added bg-white/90 so text is readable on colored backgrounds
            className="group relative bg-white/90 backdrop-blur-sm border border-charcoal/10 rounded-3xl p-8 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* Number */}
              <span className="text-xl font-bold text-charcoal/40 font-mono">
                {feature.number}
              </span>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-charcoal mb-2">
                  {feature.title}
                </h3>
                <p className="text-lg text-charcoal/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Arrow Icon (Visible on Desktop) */}
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-charcoal">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
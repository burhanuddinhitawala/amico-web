"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "Activation", label: "Activation", desc: "Securely links to your biometric signature." },
  { id: "Personalization", label: "Personalization", desc: "Builds a dynamic user map based on your traits." },
  { id: "Communication", label: "Communication", desc: "Fluid, natural conversation with context awareness." },
  { id: "Insights", label: "Insights", desc: "Weekly summaries of your digital wellbeing." },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("Personalization");

  // Get current tab description
  const currentDesc = tabs.find(t => t.id === activeTab)?.desc;

  return (
    <section className="bg-cream min-h-screen py-24 px-6 md:px-20 overflow-hidden relative flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center w-full">
        
        {/* Left Side: Animated Number */}
        <div className="hidden md:block w-32">
          <span className="text-8xl font-bold text-charcoal opacity-10">04</span>
        </div>

        {/* Center: The Phone Mockup */}
        <div className="flex-1 relative flex justify-center">
          <div className="relative w-[360px] h-[720px] bg-gray-900 rounded-[55px] p-3 shadow-2xl border-[6px] border-gray-800">
            {/* Phone Screen */}
            <div className="w-full h-full bg-[#FFF5E9] rounded-[45px] overflow-hidden relative flex flex-col">
              
              {/* Dynamic Screen Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 p-8 flex flex-col relative z-10"
                >
                  {/* Top Header inside Phone */}
                  <div className="mb-8 mt-4">
                    <h3 className="text-3xl font-bold text-charcoal">{activeTab}</h3>
                    <p className="text-xs text-charcoal/50 mt-2 leading-relaxed">
                        {currentDesc}
                    </p>
                  </div>

                  {/* --- SCREEN 1: ACTIVATION (Scanning Animation) --- */}
                  {activeTab === "Activation" && (
                    <div className="flex-1 flex items-center justify-center relative">
                        {/* Ripples */}
                        {[1, 2, 3].map((i) => (
                             <motion.div
                             key={i}
                             animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="absolute w-32 h-32 border border-charcoal/20 rounded-full"
                           />
                        ))}
                        {/* Center Icon */}
                        <div className="w-24 h-24 bg-charcoal text-white rounded-full flex items-center justify-center z-10 shadow-xl">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                                <path d="M12 6v12"/>
                                <path d="M6 12h12"/>
                            </svg>
                        </div>
                    </div>
                  )}

                  {/* --- SCREEN 2: PERSONALIZATION (Floating Orbs) --- */}
                  {activeTab === "Personalization" && (
                    <div className="relative w-full h-[350px] mt-4">
                        <FloatingOrb color="bg-white" label="Introvert" size="w-32 h-32" xRange={[-10, 10]} top="10%" left="10%" />
                        <FloatingOrb color="bg-orange-400" label="Nomad" size="w-40 h-40" xRange={[5, -5]} top="50%" left="0%" />
                        <FloatingOrb color="bg-yellow-400" label="Seeker" size="w-36 h-36" xRange={[-5, 5]} top="35%" right="0%" />
                    </div>
                  )}

                  {/* --- SCREEN 3: COMMUNICATION (Chat Bubbles) --- */}
                  {activeTab === "Communication" && (
                    <div className="flex flex-col gap-4 mt-8">
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                            className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm self-start max-w-[80%]"
                        >
                            <p className="text-sm text-charcoal">Hey Amico, I'm feeling a bit overwhelmed today.</p>
                        </motion.div>
                        
                        <motion.div 
                            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8 }}
                            className="bg-charcoal p-4 rounded-2xl rounded-tr-none shadow-md self-end max-w-[80%]"
                        >
                            <p className="text-sm text-white">I understand. Shall we decompose the tasks or just take a walk first?</p>
                        </motion.div>
                         <motion.div 
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5 }}
                            className="self-start text-xs text-charcoal/40 font-medium ml-2"
                        >
                            Amico is typing...
                        </motion.div>
                    </div>
                  )}

                  {/* --- SCREEN 4: INSIGHTS (Graph Animation) --- */}
                  {activeTab === "Insights" && (
                    <div className="flex flex-col gap-6 mt-8">
                        {/* Stat Card */}
                        <div className="bg-white p-6 rounded-3xl shadow-sm">
                            <span className="text-xs text-charcoal/40 uppercase tracking-wider">Weekly Focus</span>
                            <div className="text-4xl font-bold text-charcoal mt-1">84%</div>
                        </div>
                        
                        {/* Bar Chart */}
                        <div className="flex items-end justify-between h-40 px-2">
                             {[40, 70, 50, 90, 60].map((h, i) => (
                                 <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: i * 0.1 }}
                                    className="w-10 bg-charcoal rounded-t-lg opacity-80"
                                 />
                             ))}
                        </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side: Navigation Menu */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <h2 className="text-5xl md:text-6xl font-medium text-charcoal mb-8 tracking-tight">How does it work?</h2>
          
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left text-xl md:text-2xl font-medium transition-all duration-300 py-4 px-6 rounded-2xl border border-transparent ${
                  activeTab === tab.id
                    ? "bg-white text-charcoal shadow-sm translate-x-4 border-charcoal/5"
                    : "text-charcoal/40 hover:text-charcoal/70"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper for bubbles
function FloatingOrb({ color, label, size, xRange, top, left, right }: any) {
  return (
    <motion.div
      animate={{ x: xRange, y: [-10, 10, -10], scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${size} rounded-full ${color} blur-2xl flex items-center justify-center opacity-80`}
      style={{ top, left, right }}
    >
        <span className="relative z-20 text-charcoal font-bold text-sm blur-none drop-shadow-md">{label}</span>
    </motion.div>
  );
}
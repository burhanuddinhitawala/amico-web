import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhySection from "@/components/WhySection";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="bg-cream w-full overflow-hidden">
        {/* Navigation Bar */}
        <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
             <div className="font-bold text-xl text-charcoal">Amico</div>
             <button className="bg-charcoal text-white px-6 py-2 rounded-full font-medium hover:scale-105 transition-transform">Get App</button>
        </header>

        {/* 1. Cover Page */}
        <Hero />

        {/* 2. The Phone Section */}
        <HowItWorks />
        
        {/* 3. The Feature List */}
        <WhySection />
        
        {/* Footer */}
        <div className="h-[30vh] flex flex-col items-center justify-center text-charcoal/40 bg-white/50">
            <p className="mb-4">© 2026 Amico Inc.</p>
            <p className="text-sm">Privacy • Security • Contact</p>
        </div>
      </main>
    </SmoothScroll>
  );
}
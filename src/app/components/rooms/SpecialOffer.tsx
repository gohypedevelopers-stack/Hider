"use client";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mt-8 rounded-[2rem] overflow-hidden shadow-2xl"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-gold)] via-[var(--brand-gold)] to-[#A58B55]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-40 brightness-0 invert" />

      <div className="relative p-10">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
            <Sparkles size={16} className="text-white" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/90 font-inter">
            Curated Privilege
          </span>
        </div>

        <h3 className="text-2xl font-medium text-white font-serif mb-4 leading-tight drop-shadow-sm">
          Third Night On Us
        </h3>
        <p className="text-sm text-white font-inter font-light leading-relaxed mb-8">
          Experience extended indulgence. Reserve two nights and receive a complimentary third night, plus bespoke arrival transfers.
        </p>

        <div className="pt-6 border-t border-white/30 flex items-center justify-between">
          <span className="text-[10px] text-white/70 font-inter font-bold uppercase tracking-[0.25em]">Bespoke Privilege</span>
          <span className="text-[10px] text-[var(--brand-gold)] bg-white font-bold font-inter uppercase tracking-[0.25em] px-6 py-3 rounded-full shadow-lg hover:bg-[var(--brand-cream)] transition-all duration-300 cursor-pointer">
            Inquire Now
          </span>
        </div>
      </div>
    </motion.div>
  );
}

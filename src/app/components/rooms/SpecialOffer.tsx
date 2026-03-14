"use client";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative rounded-3xl overflow-hidden shadow-sm aspect-[4/3] flex flex-col justify-end"
    >
      {/* Subtle Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#222]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />

      <div className="relative p-10 z-10">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles size={14} className="text-[var(--brand-gold)]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
            Curated Privilege
          </span>
        </div>

        <h3 className="text-3xl font-serif text-white mb-6 leading-tight italic">
          Third Night <br/>On Us
        </h3>
        <p className="text-sm text-white/60 font-serif font-light leading-relaxed mb-8 italic">
          Reserve two nights and receive a complimentary third night, plus bespoke arrival transfers.
        </p>

        <button className="text-[9px] text-[var(--app-text)] bg-[var(--brand-gold)] font-bold uppercase tracking-[0.2em] px-8 py-4 rounded-xl hover:bg-white transition-all duration-500">
          Inquire Now
        </button>
      </div>
    </motion.div>
  );
}

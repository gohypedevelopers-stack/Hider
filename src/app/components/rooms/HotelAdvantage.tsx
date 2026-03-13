"use client";
import { Link } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HotelAdvantage() {
  const advantages = [
    { title: "Manesar Tranquility", desc: "Located away from city bustle yet perfectly accessible." },
    { title: "Secure Retreat", desc: "Monitored 24/7 with advanced security & private parking." },
    { title: "Bespoke Dining", desc: "Access to curated local and international cuisines." },
    { title: "Premier Service", desc: "Tailored hospitality that anticipates your every need." }
  ];

  return (
    <section className="py-40 bg-white overflow-hidden relative">
      {/* Decorative Text */}
      <div className="absolute top-20 right-0 text-[18vw] font-playfair font-bold text-black/[0.02] leading-none whitespace-nowrap pointer-events-none select-none italic">
        The Hider Legacy
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] bg-black group overflow-hidden"
            >
              <img 
                src="/1.jpeg" 
                alt="Luxury Hotel" 
                className="object-cover w-full h-full opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 border-[30px] border-white/10 group-hover:border-white/0 transition-all duration-700"></div>
            </motion.div>

            <div className="space-y-16">
              <div className="space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#C5A059]">The Advantage</span>
                <h2 className="text-4xl md:text-5xl font-playfair text-black uppercase tracking-widest leading-tight">Beyond The Stay</h2>
                <div className="w-16 h-px bg-[#C5A059]/50"></div>
              </div>

              <div className="space-y-10">
                {advantages.map((adv, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-black mb-1 group-hover:text-[#C5A059] transition-colors">{adv.title}</h3>
                    <p className="text-xs text-gray-400 font-poppins font-light leading-relaxed uppercase tracking-widest">{adv.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                 <button className="px-12 py-5 border border-black text-black text-[10px] uppercase font-bold tracking-[0.4em] hover:bg-black hover:text-white transition-all duration-500">
                    Discover More
                 </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

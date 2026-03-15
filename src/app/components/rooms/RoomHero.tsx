"use client";
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

interface RoomHeroProps {
  title: string;
  images: string[];
  price?: string;
}

export default function RoomHero({ title, images, price = "4,500", tagline = "A sanctuary of style and comfort designed for the modern traveler." }: RoomHeroProps & { tagline?: string }) {
  const displayImages = images.slice(0, 3);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 600], [0, 200]);
  
  return (
    <section className="relative w-full pt-[200px] md:pt-[240px] pb-16 flex flex-col items-center overflow-hidden">
      <div className="w-[90%] md:w-[92%] max-w-[1300px] mx-auto">
        <div className="w-full relative h-[400px] md:h-[450px] lg:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl bg-black mb-10 md:mb-16">
          {/* Main Image with Ken Burns Effect */}
          <motion.div
            className="absolute inset-0"
            style={{ y: yParallax }}
          >
            <motion.div
              className="h-full w-full"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 15, ease: "linear" }}
            >
              <Image
                src={displayImages[0] || "/1.jpeg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-[4s] ease-out group-hover:scale-105"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content Below Image */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-2 md:px-4">
          <div className="max-w-4xl flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-[var(--brand-gold)]/10 border border-[var(--brand-gold)]/20 text-[var(--brand-gold)] px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6 shadow-sm"
            >
              <Sparkles size={12} className="text-[var(--brand-gold)]" />
              Curated Luxury
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--app-text)] m-0 leading-[1.1] font-sans tracking-tight"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-[var(--app-text-muted)] text-lg md:text-xl font-light mt-6 max-w-2xl leading-relaxed italic font-serif"
            >
              {tagline}
            </motion.p>
          </div>

          {/* Pricing Block - Bottom Right on Desktop */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="flex flex-col items-start md:items-end text-left md:text-right shrink-0"
           >
             <span className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[var(--brand-orange)] leading-none drop-shadow-sm">
               ₹{price}
             </span>
             <span className="text-xs md:text-sm font-medium text-[var(--app-text-muted)] uppercase tracking-[0.2em] mt-3">
               Per Night
             </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

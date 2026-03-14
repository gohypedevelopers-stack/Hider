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
    <section 
      className="relative pt-6 pb-12 overflow-x-clip px-[var(--app-container-px)]"
    >
      <div className="max-w-[var(--container-width)] mx-auto relative h-[700px] md:h-[750px] rounded-[3rem] overflow-hidden group shadow-[0_32px_80px_rgba(0,0,0,0.15)] bg-black">
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content Overlay - Bottom Left Style */}
        <div className="absolute inset-0 p-12 md:p-24 flex flex-col justify-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-2xl"
            >
              <Sparkles size={12} className="text-[var(--brand-gold)]" />
              Curated Luxury
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-6xl md:text-8xl font-serif text-white m-0 leading-[0.9] drop-shadow-2xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-white/70 text-xl md:text-2xl font-light mt-10 max-w-xl leading-relaxed italic font-serif"
            >
              {tagline}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

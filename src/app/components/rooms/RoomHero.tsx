"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface RoomHeroProps {
  title: string;
  images: string[];
  price?: string;
}

export default function RoomHero({ title, images, price = "4,500", tagline = "A sanctuary of style and comfort designed for the modern traveler." }: RoomHeroProps & { tagline?: string }) {
  const displayImages = images.slice(0, 3);
  
  return (
    <section 
      className="relative pt-6 pb-12 overflow-x-clip"
      style={{ paddingLeft: 'var(--app-container-px)', paddingRight: 'var(--app-container-px)' }}
    >
      <div className="max-w-[var(--container-width)] mx-auto relative h-[600px] md:h-[650px] rounded-[2.5rem] overflow-hidden group shadow-2xl bg-black">
        {/* Main Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={displayImages[0] || "/1.jpeg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
            priority
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content Overlay - Bottom Left Style */}
        <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-[#E95D1D] text-white px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-[0.2em] mb-4 shadow-lg shadow-black/20"
            >
              Premium Experience
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif text-white m-0 leading-tight drop-shadow-2xl">
              {title}
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/80 text-lg md:text-xl font-light mt-4 max-w-xl leading-relaxed"
            >
              {tagline}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

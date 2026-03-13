"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface RoomHeroProps {
  title: string;
  image: string;
  price?: string;
}

export default function RoomHero({ title, image, price = "2,500" }: RoomHeroProps) {
  return (
    <section className="relative px-4 pt-4 pb-12 bg-white">
      <div className="max-w-[1400px] mx-auto relative h-[600px] rounded-[2.5rem] overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 p-12 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            
            {/* Left Side: Badge & Title */}
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block bg-[#E85D1A] text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider mb-6"
              >
                Premium Choice
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif text-white m-0 leading-[1.1]"
              >
                {title}
              </motion.h1>
            </div>

            {/* Right Side: Price Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-white min-w-[240px]"
            >
              <span className="block text-[10px] font-bold uppercase tracking-widest text-white/70 mb-2">
                Starting From
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-serif italic font-bold">INR {price}</span>
                <span className="text-sm border-l border-white/20 pl-2 text-white/60">/ Night</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

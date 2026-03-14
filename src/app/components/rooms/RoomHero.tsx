"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface RoomHeroProps {
  title: string;
  image: string;
  price?: string;
}

export default function RoomHero({ title, image, price = "2,500" }: RoomHeroProps) {
  return (
    <section 
      className="relative pt-10 pb-20 overflow-x-clip"
      style={{ paddingLeft: 'var(--app-container-px)', paddingRight: 'var(--app-container-px)' }}
    >
      <div className="max-w-[var(--container-width)] mx-auto relative h-[700px] md:h-[750px] rounded-[3rem] overflow-hidden group shadow-2xl">

        {/* Image with subtle zoom */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Gradient overlay — stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />

        {/* Content */}
        <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">

            {/* Left: Badge + Title */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 bg-[var(--brand-gold)] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-xl shadow-black/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                Featured Accomodation
              </motion.div>

              <h1 className="text-5xl md:text-[clamp(3.5rem,8vw,6.5rem)] font-serif text-white m-0 leading-[1.05] drop-shadow-2xl flex flex-wrap gap-x-3">
                {title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden py-2">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ 
                        duration: 1.2, 
                        delay: 0.4 + (i * 0.1), 
                        ease: [0.22, 1, 0.36, 1] 
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 120 }}
                transition={{ duration: 1.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="h-[1px] bg-gradient-to-r from-[var(--brand-gold)] to-transparent mt-10"
              />
            </div>

            {/* Right: Glassmorphism Price */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] text-white min-w-[300px] shadow-2xl"
            >
              <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] mb-5 font-inter">
                Exclusive Rate
              </span>
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-serif font-bold tracking-tight">₹{price}</span>
                  <span className="text-sm text-white/60 font-inter font-medium tracking-wide">/ Night</span>
                </div>
                <span className="text-[10px] text-white/40 font-inter font-bold tracking-[0.1em] uppercase">
                  + applicable taxes
                </span>
              </div>
              <div className="h-px bg-white/10 w-full" />
              <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] mt-5 font-medium leading-relaxed">
                Premium Boutique Stays · Best Value Guaranteed
              </p>
            </motion.div>

          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-poppins">Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            >
              <ChevronDown size={16} className="text-white/40" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

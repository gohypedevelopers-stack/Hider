"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ZoomIn, Image as ImageIcon } from 'lucide-react';

interface RoomGalleryProps {
  images: string[];
}

const captions = ['Room Interior', 'Bathroom', 'Hotel Corridor', 'Lobby', 'Balcony View'];

export default function RoomGallery({ images }: RoomGalleryProps) {
  const displayImages = images.slice(0, 4);

  return (
    <section className="relative w-full mb-24 md:mb-40">
      <div className="flex flex-col items-center justify-center text-center mt-32 md:mt-40 mb-16 w-full max-w-6xl mx-auto">
        <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] mb-6 block">
          Visual Tour
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--app-text)] mb-5">Gallery</h3>
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--brand-gold)] to-transparent mt-8 opacity-50"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[90rem] mx-auto px-4 md:px-0">
        {displayImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col group"
          >
            <div className="relative aspect-[3/4] md:aspect-[4/5] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-[2rem] shadow-lg border border-[var(--app-border)]">
              <Image
                src={img}
                alt={captions[i] || 'Room gallery image'}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-8 left-0 w-full text-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <span className="inline-block text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-white">
                  {captions[i]}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

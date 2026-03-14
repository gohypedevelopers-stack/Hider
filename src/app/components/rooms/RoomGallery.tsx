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
  const displayImages = images.slice(0, 5);

  return (
    <section className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-4xl font-serif text-[var(--app-text)] m-0 flex items-center gap-4">
          <ImageIcon className="text-[#E95D1D]" size={28} strokeWidth={1.5} />
          Gallery
        </h2>
      </motion.div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[600px]">
        {/* Large image — spans 2 rows */}
        {displayImages[0] && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="row-span-2 relative overflow-hidden rounded-[2.5rem] group cursor-pointer shadow-2xl"
          >
            <Image
              src={displayImages[0]}
              alt="Room view"
              fill
              className="object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
              <span className="text-white text-[10px] font-inter font-bold uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full">
                {captions[0]}
              </span>
            </div>
          </motion.div>
        )}

        {/* Smaller images — right column */}
        {displayImages.slice(1, 3).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.05, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              delay: (i + 1) * 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative overflow-hidden rounded-[2rem] group cursor-pointer shadow-xl"
          >
            <Image
              src={img}
              alt={`Room detail ${i + 2}`}
              fill
              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-3 group-hover:translate-y-0">
              <span className="text-white text-[9px] font-inter font-bold uppercase tracking-[0.25em] bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
                {captions[i + 1]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

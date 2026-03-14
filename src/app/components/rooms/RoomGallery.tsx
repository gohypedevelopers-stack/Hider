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
    <section className="relative mt-16">
      <div className="flex items-center gap-3 mb-10">
        <ImageIcon size={18} className="text-[var(--brand-orange)]" />
        <h3 className="text-2xl font-bold text-[var(--app-text)]">Gallery</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col gap-3 group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm border border-gray-100">
              <Image
                src={img}
                alt={captions[i] || 'Room gallery image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800 px-1">
              {captions[i]}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

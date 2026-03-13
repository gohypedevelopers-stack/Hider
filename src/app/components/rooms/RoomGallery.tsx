"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

interface RoomGalleryProps {
  images: string[];
}

export default function RoomGallery({ images }: RoomGalleryProps) {
  // Take exactly 3 images for the mockup look
  const displayImages = images.slice(0, 3);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold font-poppins text-[#1A1A1A] mb-10">Gallery</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-[2rem] overflow-hidden"
          >
            <Image
              src={img}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

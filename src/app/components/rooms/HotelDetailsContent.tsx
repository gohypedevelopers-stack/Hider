"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HotelDetailsContentProps {
  children: ReactNode;
}

export default function HotelDetailsContent({ children }: HotelDetailsContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-24"
    >
      {children}
    </motion.div>
  );
}

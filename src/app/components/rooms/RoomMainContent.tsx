"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RoomMainContentProps {
  children: ReactNode;
}

export default function RoomMainContent({ children }: RoomMainContentProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="lux-container pb-40 lg:pb-64 pt-16 md:pt-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-24 lg:gap-32 items-start">
        {children}
      </div>
    </motion.div>
  );
}

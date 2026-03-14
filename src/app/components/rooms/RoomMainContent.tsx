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
      className="hider-main-container mx-auto pb-64"
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(0, 1fr) 450px', 
        gap: '120px',
        paddingTop: '160px',
        alignItems: 'start',
        width: '100%'
      }}
    >
      {children}
    </motion.div>
  );
}

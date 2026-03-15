"use client";
import { motion } from 'framer-motion';

interface RoomExperienceProps {
  title: string;
  description: string;
  features?: string[];
  price?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RoomExperience({ title, description, features, price }: RoomExperienceProps) {
  return (
    <section className="relative px-6">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto flex flex-col items-center justify-center pt-8 md:pt-16 mb-20 md:mb-32 relative"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] block text-center">
            Signature Stay
          </span>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--app-text)] mb-8 text-center">
          The Experience
        </motion.h2>

        {/* Pricing removed as per request and moved to Hero */}
        
        {/* Luxury subtle divider */}
        <motion.div variants={itemVariants} className="h-24 w-px bg-gradient-to-b from-transparent via-[var(--brand-gold)] to-transparent mb-12 opacity-50" />

        {/* The Text */}
        <motion.div variants={itemVariants} className="relative w-full text-center px-6 md:px-16">
          <div className="absolute -top-16 -left-2 md:-left-8 text-[140px] text-[var(--brand-gold)] opacity-[0.15] font-serif leading-none select-none">"</div>
          <p className="text-xl md:text-3xl text-[var(--app-text-muted)] leading-[1.8] font-light font-serif italic relative z-10 transition-colors duration-300 group-hover:text-[var(--app-text)]">
            {description}
          </p>
          <div className="absolute -bottom-24 -right-2 md:-right-8 text-[140px] text-[var(--brand-gold)] opacity-[0.15] font-serif leading-none select-none">"</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

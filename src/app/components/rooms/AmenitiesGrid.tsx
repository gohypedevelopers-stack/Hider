"use client";
import {
  Wifi, Wind, Bed, ShowerHead, Tv, Coffee,
  Bath, CheckCircle, Droplets, BedDouble, Sparkles, Bell,
  WashingMachine, Car, Baby, ArrowRightLeft, ShieldCheck, PhoneCall, Zap, Utensils
} from 'lucide-react';
import { motion } from 'framer-motion';

interface AmenitiesGridProps {
  amenities: { name: string }[];
}

const getIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('bed')) return BedDouble;
  if (n.includes('wifi') || n.includes('wi-fi')) return Wifi;
  if (n.includes('ac') || n.includes('air condition')) return Wind;
  if (n.includes('shower')) return ShowerHead;
  if (n.includes('tv') || n.includes('entertainment')) return Tv;
  if (n.includes('coffee') || n.includes('kettle')) return Coffee;
  if (n.includes('bathroom') || n.includes('bath')) return Bath;
  if (n.includes('water')) return Droplets;
  if (n.includes('housekeeping') || n.includes('clean')) return Sparkles;
  if (n.includes('room service')) return Bell;
  if (n.includes('laundry')) return WashingMachine;
  if (n.includes('parking')) return Car;
  if (n.includes('child') || n.includes('baby')) return Baby;
  if (n.includes('pick') || n.includes('drop')) return ArrowRightLeft;
  if (n.includes('security') || n.includes('cctv')) return ShieldCheck;
  if (n.includes('wake')) return PhoneCall;
  if (n.includes('power') || n.includes('backup')) return Zap;
  if (n.includes('breakfast')) return Utensils;
  return CheckCircle;
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { 
      duration: 0.8, 
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] 
    },
  }),
};

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-6 mb-12"
      >
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--brand-gold)] font-inter">Premium Service</span>
          <h2 className="text-4xl font-medium font-serif text-[var(--app-text)] m-0 leading-tight">Room Amenities</h2>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--brand-gold)]/20 to-transparent ml-6" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {amenities.map((item, index) => {
          const Icon = getIcon(item.name);
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
              className="group relative flex flex-col items-center justify-center gap-4 bg-[var(--app-bg-accent)] border border-transparent p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:border-[var(--brand-gold)]/20 cursor-default overflow-hidden transition-all duration-500"
            >
              {/* Background glow interaction */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-gold)]/0 to-[var(--brand-gold)]/5 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-white dark:bg-black/20 group-hover:bg-[var(--brand-gold)] flex items-center justify-center transition-all duration-500 shadow-sm group-hover:shadow-[0_10px_30px_rgba(200,169,106,0.3)]">
                <Icon size={24} strokeWidth={1} className="text-[var(--brand-gold)] group-hover:text-white transition-colors duration-500" />
              </div>

              <span className="relative z-10 text-xs font-semibold text-[var(--app-text)] font-inter tracking-[0.05em] text-center leading-snug">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

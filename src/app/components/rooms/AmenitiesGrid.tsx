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
      ease: [0.22, 1, 0.36, 1] as any
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
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20"
      >
        <h2 className="text-4xl font-serif text-[var(--app-text)] m-0 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--brand-gold)]/10 flex items-center justify-center">
            <CheckCircle className="text-[var(--brand-gold)]" size={24} strokeWidth={1.5} />
          </div>
          Curated Amenities
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.slice(0, 6).map((item, index) => {
          const Icon = getIcon(item.name);
          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-5 bg-white border border-[var(--app-border)] p-6 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--app-bg-accent)] flex items-center justify-center group-hover:bg-[var(--brand-gold)] transition-all duration-500 shadow-inner">
                <Icon size={24} className="text-[var(--brand-gold)] group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
              </div>
              <span className="text-base font-serif text-[var(--app-text)] font-medium italic">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

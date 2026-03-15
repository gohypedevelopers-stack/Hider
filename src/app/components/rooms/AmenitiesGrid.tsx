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
    <section className="relative w-full">
      <div className="flex flex-col items-center justify-center text-center mt-32 md:mt-40 mb-16 w-full max-w-6xl mx-auto">
        <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] mb-6 block">
          Premium Inclusions
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--app-text)]">Room Amenities</h3>
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-[var(--brand-gold)] to-transparent mt-8 opacity-50"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto px-4 md:px-0">
        {amenities.map((item, index) => {
          const Icon = getIcon(item.name);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-[var(--card-bg)] px-6 py-8 rounded-[2rem] border border-[var(--app-border)] flex flex-col items-center text-center gap-5 hover:shadow-2xl hover:-translate-y-2 hover:border-[var(--brand-gold)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--app-bg-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 rounded-full bg-[var(--app-bg-accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--brand-gold)] transition-colors duration-500 relative z-10 border border-[var(--app-border)] group-hover:border-transparent">
                <Icon size={26} className="text-[var(--brand-orange)] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <span className="text-[13px] md:text-[15px] font-semibold tracking-wide text-[var(--app-text)] relative z-10">{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

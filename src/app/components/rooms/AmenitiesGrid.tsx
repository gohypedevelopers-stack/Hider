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
        className="mb-12"
      >
        <h2 className="text-4xl font-serif text-[var(--app-text)] m-0 flex items-center gap-4">
          <CheckCircle className="text-[#E95D1D]" size={28} strokeWidth={1.5} />
          Room Amenities
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              className="flex items-center gap-4 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#E95D1D]/10 transition-colors">
                <Icon size={20} className="text-[#E95D1D]" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

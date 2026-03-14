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
    <section className="relative mt-16">
      <div className="flex items-center gap-3 mb-10 max-w-4xl">
        <Sparkles size={18} className="text-[var(--brand-orange)]" />
        <h3 className="text-2xl font-bold text-[#1a1a1a]">Room Amenities</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {amenities.map((item, index) => {
          const Icon = getIcon(item.name);
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <Icon size={24} className="text-[var(--brand-orange)]" strokeWidth={1.5} />
              </div>
              <span className="text-lg font-medium text-[var(--app-text)]">{item.name}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

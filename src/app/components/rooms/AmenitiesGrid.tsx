"use client";
import { 
  Wifi, Wind, Bed, ShowerHead, Zap, 
  CheckCircle 
} from 'lucide-react';
import { motion } from 'framer-motion';

interface AmenitiesGridProps {
  amenities: { name: string }[];
}

const getIcon = (name: string) => {
    if (name.includes('Bed')) return Bed;
    if (name.includes('WiFi') || name.includes('Wi-Fi')) return Wifi;
    if (name.includes('AC')) return Wind;
    if (name.includes('Shower')) return ShowerHead;
    return CheckCircle;
}

export default function AmenitiesGrid({ amenities }: AmenitiesGridProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold font-poppins text-[#1A1A1A] mb-10">World-Class Amenities</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((item, index) => {
          const Icon = getIcon(item.name);
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-4 bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow cursor-default group"
            >
              <div className="text-[#E85D1A] transition-transform group-hover:scale-110">
                <Icon size={28} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-bold text-[#1A1A1A] font-poppins tracking-wide">
                {item.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

"use client";
import { Bed, Bath, Wifi, Sparkles, BedDouble, Eye, Wine, Home, Mountain, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface HighlightsSectionProps {
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const iconMap: Record<string, any> = {
  'Bed': Bed,
  'Bath': Bath,
  'Wifi': Wifi,
  'Sparkles': Sparkles,
  'BedDouble': BedDouble,
  'Eye': Eye,
  'Wine': Wine,
  'Home': Home,
  'Mountain': Mountain,
  'Users': Users,
  'CheckCircle': CheckCircle,
};

export default function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="py-48 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-24 items-end mb-32">
          <div className="lg:w-1/2 space-y-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#C5A059]">Refined Quality</span>
            <h2 className="text-5xl md:text-6xl font-playfair text-black uppercase tracking-[0.2em] leading-tight italic">Room Highlights</h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-400 font-poppins font-light leading-[2] max-w-md border-l border-[#C5A059]/20 pl-10 italic">
              "Experience the pinnacle of hospitality at Hotel Hider, where every element is curated to transcend the ordinary."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {highlights.map((h, i) => {
            const Icon = iconMap[h.icon] || CheckCircle;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group p-10 bg-[#FAF9F6] border border-black/5 rounded-sm hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="mb-8 p-4 bg-white inline-flex rounded-full group-hover:bg-black group-hover:text-white transition-all duration-700 shadow-sm border border-black/5">
                  <Icon size={24} strokeWidth={1} />
                </div>
                <h3 className="text-xl font-playfair text-black mb-4 uppercase tracking-wider">{h.title}</h3>
                <p className="text-sm text-gray-400 font-poppins font-light leading-relaxed">{h.description}</p>
                <div className="mt-8 transition-transform group-hover:translate-x-2 duration-500">
                  <div className="w-8 h-[2px] bg-[#C5A059]"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

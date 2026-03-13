"use client";
import { motion } from 'framer-motion';

interface RoomStoryProps {
  quote: string;
  description: string;
  specs: {
    label: string;
    value: string;
    icon?: any;
  }[];
}

export default function RoomStory({ quote, description, specs }: RoomStoryProps) {
  return (
    <section className="py-40 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          
          {/* Editorial Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#C5A059]">The Experience</span>
              <h2 className="text-5xl md:text-6xl font-playfair text-black leading-tight italic">
                {quote}
              </h2>
            </div>
            
            <div className="w-24 h-[1px] bg-[#C5A059]/40"></div>
            
            <p className="text-xl md:text-2xl text-gray-500 font-poppins font-light leading-[2] italic max-w-xl">
              {description}
            </p>
            
            <div className="pt-10">
              <Link href="#gallery" className="text-xs font-bold uppercase tracking-[0.4em] text-black border-b border-black/20 pb-4 hover:border-[#C5A059] transition-all inline-block group">
                <span className="group-hover:text-[#C5A059] transition-colors">Explore The Space</span>
              </Link>
            </div>
          </motion.div>

          {/* Spec Mini Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {specs.map((spec, i) => (
              <div 
                key={i} 
                className="bg-white p-10 border border-black/[0.03] rounded-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] transition-all duration-700 group flex flex-col justify-center text-center h-64 md:h-72"
              >
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gray-300 mb-6 group-hover:text-[#C5A059] transition-colors">{spec.label}</span>
                <span className="text-2xl md:text-3xl font-playfair text-black group-hover:italic transition-all duration-500">{spec.value}</span>
                <div className="mt-8 w-10 h-[1px] bg-black/[0.05] mx-auto group-hover:w-20 group-hover:bg-[#C5A059]/30 transition-all duration-700"></div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Adding Link import since it's used in RoomStory
import Link from 'next/link';

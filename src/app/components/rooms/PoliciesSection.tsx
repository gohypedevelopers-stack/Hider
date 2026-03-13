"use client";
import { Clock, Ban, IdCard, Dog, PlusSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface PoliciesSectionProps {
  policies: {
    label: string;
    value: string;
    icon?: string;
  }[];
}

const iconMap: Record<string, any> = {
  'Clock': Clock,
  'Ban': Ban,
  'IdCard': IdCard,
  'Dog': Dog,
  'PlusSquare': PlusSquare,
};

export default function PoliciesSection({ policies }: PoliciesSectionProps) {
  return (
    <section className="py-48 bg-[#FAF9F6] border-y border-black/[0.03]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-32 items-start">
          
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#C5A059]">Covenant</span>
              <h2 className="text-5xl md:text-6xl font-playfair text-black uppercase tracking-[0.1em] leading-tight">Guest Policies</h2>
            </div>
            <p className="text-gray-400 font-poppins font-light leading-[2] italic text-lg">
              "Ensuring a seamless and serene experience for every guest through transparency and care."
            </p>
            <div className="pt-10">
              <div className="bg-black text-white p-12 rounded-sm shadow-2xl">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#C5A059] mb-6 block">Direct Concierge</span>
                <p className="text-2xl font-playfair mb-10 italic">Need personalized assistance during your stay?</p>
                <button className="text-[11px] uppercase font-bold tracking-[0.5em] border-b border-[#C5A059]/40 pb-3 hover:text-[#C5A059] hover:border-[#C5A059] transition-all">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {policies.map((policy, idx) => {
              const Icon = iconMap[policy.icon || 'Clock'] || Clock;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 pb-8 border-b border-black/5 group"
                >
                  <div className="p-3 bg-white text-[#C5A059] group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-black/5">
                    <Icon size={20} strokeWidth={1} />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2 transition-colors group-hover:text-black">{policy.label}</h3>
                    <p className="text-lg font-playfair text-black">{policy.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

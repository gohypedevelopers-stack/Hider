"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Shield, Star } from 'lucide-react';

interface RoomBookingCardProps {
  price: string;
  roomType: string;
  guests: string;
}

export default function RoomBookingCard({ price, roomType, guests }: RoomBookingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      <div className="relative bg-[var(--app-bg)] rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-[var(--app-border)] overflow-hidden">

        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--brand-gold)] via-[var(--brand-gold)]/60 to-[var(--brand-gold)]" />

        <div className="p-10 flex flex-col gap-0">

          {/* Label + Rating */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] font-inter">Reserve Luxury</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="var(--brand-gold)" className="text-[var(--brand-gold)]" />
              ))}
            </div>
          </div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col mb-6"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-serif font-bold text-[var(--app-text)]">₹{price}</span>
              <span className="text-sm text-[var(--app-text-muted)] font-inter font-medium tracking-wide">/ Night</span>
            </div>
            <span className="text-[10px] text-[var(--app-text-muted)] font-inter font-bold uppercase tracking-[0.1em] opacity-60 mt-1">
              + applicable taxes
            </span>
          </motion.div>

          <div className="h-px bg-[var(--app-border)] mb-8" />

          {/* Room info rows */}
          <div className="space-y-4 mb-8">
            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--app-bg-accent)] hover:bg-[var(--brand-gold)]/10 px-6 py-5 rounded-2xl flex items-center justify-between cursor-pointer border border-transparent hover:border-[var(--brand-gold)]/20 transition-all duration-500 group"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-inter">{roomType}</span>
                <span className="text-sm font-medium text-[var(--app-text)] font-inter">Check-in Date</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/20 shadow-sm flex items-center justify-center group-hover:bg-[var(--brand-gold)] transition-colors duration-500">
                <Calendar size={18} className="text-[var(--brand-gold)] group-hover:text-white transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 6 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--app-bg-accent)] hover:bg-[var(--brand-gold)]/10 px-6 py-5 rounded-2xl flex items-center justify-between cursor-pointer border border-transparent hover:border-[var(--brand-gold)]/20 transition-all duration-500 group"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-inter">Occupancy</span>
                <span className="text-sm font-medium text-[var(--app-text)] font-inter">{guests}</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/20 shadow-sm flex items-center justify-center group-hover:bg-[var(--brand-gold)] transition-colors duration-500">
                <Users size={18} className="text-[var(--brand-gold)] group-hover:text-white transition-colors duration-500" />
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[var(--brand-gold)] text-white py-6 rounded-2xl font-bold text-sm font-inter uppercase tracking-[0.3em] hover:shadow-[0_20px_50px_rgba(200,169,106,0.4)] transition-all duration-500 group flex items-center justify-center gap-4"
          >
            Confirm Inquiry
            <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
          </motion.button>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <Shield size={14} className="text-[var(--brand-gold)]" opacity={0.6} />
            <p className="text-[10px] text-[var(--app-text-muted)] font-inter font-medium tracking-wide uppercase opacity-70">
              Luxury Service · Best Rate Guarantee
            </p>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

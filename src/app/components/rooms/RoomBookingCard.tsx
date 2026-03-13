"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';

interface RoomBookingCardProps {
  price: string;
  roomType: string;
  guests: string;
}

export default function RoomBookingCard({ price, roomType, guests }: RoomBookingCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E85D1A] mb-4 m-0">
          Reservation
        </h3>
        
        <div className="flex items-baseline gap-2 mb-10">
          <span className="text-3xl font-serif font-bold text-[#1A1A1A]">INR {price}</span>
          <span className="text-sm text-gray-400">/ Night</span>
        </div>

        {/* Mock Inputs */}
        <div className="space-y-4 mb-10">
          <div className="bg-[#F8F8F8] p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#F2F2F2] transition-colors">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">{roomType || "Room Type"}</span>
              <span className="text-sm font-semibold text-[#1A1A1A]">Select Date</span>
            </div>
            <Calendar size={18} className="text-[#E85D1A]" />
          </div>

          <div className="bg-[#F8F8F8] p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#F2F2F2] transition-colors">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Guests</span>
              <span className="text-sm font-semibold text-[#1A1A1A]">{guests || "2 Adults, 0 Children"}</span>
            </div>
            <Users size={18} className="text-[#E85D1A]" />
          </div>
        </div>

        <button className="w-full bg-[#E85D1A] text-white py-6 rounded-[1.5rem] font-bold text-sm hover:bg-[#D14D10] transition-all group flex items-center justify-center gap-3">
          Book This Room
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-[10px] text-gray-400 text-center mt-6 font-medium italic">
          No credit card required for reservation
        </p>
      </div>
    </motion.div>
  );
}

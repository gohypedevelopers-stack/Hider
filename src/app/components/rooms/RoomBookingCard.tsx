"use client";
import React from 'react';
import { Calendar, Users } from 'lucide-react';

interface RoomBookingCardProps {
  price: string;
  roomType: string;
  guests: string;
}

export default function RoomBookingCard({ price, roomType, guests }: RoomBookingCardProps) {
  return (
    <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-gray-100 flex flex-col gap-8 w-full">
      
      {/* Price Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold text-[#E95D1D] uppercase tracking-[0.2em]">
          Pricing Starts From
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-[#111111]">INR {price}</span>
          <span className="text-sm text-gray-400 font-medium">/ night</span>
        </div>
      </div>

      {/* Booking Form Inputs */}
      <div className="flex flex-col gap-4">
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex justify-between items-center group hover:border-[#E95D1D]/30 transition-colors cursor-pointer">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Check-in - Check-out</span>
            <span className="text-xs font-semibold text-gray-700">Aug 24 - Aug 28, 2024</span>
          </div>
          <Calendar size={18} className="text-[#E95D1D]" />
        </div>

        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex justify-between items-center group hover:border-[#E95D1D]/30 transition-colors cursor-pointer">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Guests</span>
            <span className="text-xs font-semibold text-gray-700">2 Adults, 1 Child</span>
          </div>
          <Users size={18} className="text-[#E95D1D]" />
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="flex flex-col gap-4 pt-4 border-t border-gray-50">
        <div className="flex justify-between text-xs">
          <span className="text-gray-400 font-medium">INR {price} x 4 nights</span>
          <span className="text-gray-700 font-bold">INR 18,000</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-400 font-medium">Service Fee</span>
          <span className="text-gray-700 font-bold">INR 450</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-base font-bold text-gray-800">Total</span>
          <span className="text-base font-bold text-gray-800">INR 18,450</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex flex-col gap-4">
        <button className="w-full bg-[#E95D1D] hover:bg-[#D44D14] text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-[#E95D1D]/20 active:scale-[0.98]">
          Reserve Your Stay
        </button>
        <p className="text-[10px] text-center text-gray-400 font-medium px-4">
          Free cancellation until 48h before check-in
        </p>
      </div>
    </div>
  );
}

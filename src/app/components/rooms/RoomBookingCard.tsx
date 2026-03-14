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
    <div className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-8 sticky top-40 h-fit">
      {/* Pricing Header */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand-orange)]">PRICING STARTS FROM</span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-gray-900">INR {price}</span>
          <span className="text-gray-400 text-sm font-medium">/ night</span>
        </div>
      </div>

      {/* Input Fields */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#f3f4f6] p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#e5e7eb] transition-colors">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">CHECK-IN - CHECK-OUT</span>
            <span className="text-sm font-semibold text-gray-800">Aug 24 - Aug 28, 2024</span>
          </div>
          <Calendar size={18} className="text-[var(--brand-orange)]" />
        </div>

        <div className="bg-[#f3f4f6] p-6 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-[#e5e7eb] transition-colors">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">GUESTS</span>
            <span className="text-sm font-semibold text-gray-800">{guests}</span>
          </div>
          <Users size={18} className="text-[var(--brand-orange)]" />
        </div>
      </div>

      {/* Breakdown */}
      <div className="flex flex-col gap-4 py-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm font-medium">INR {price} x 4 nights</span>
          <span className="text-gray-900 font-bold">INR 18,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 text-sm font-medium">Service Fee</span>
          <span className="text-gray-900 font-bold">INR 450</span>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl font-extrabold text-gray-900">Total</span>
        <span className="text-xl font-extrabold text-gray-900">INR 18,450</span>
      </div>

      {/* CTA */}
      <div className="flex flex-col gap-4">
        <button className="w-full bg-[var(--brand-orange)] text-white font-bold py-5 rounded-2xl shadow-[0_10px_30px_rgba(237,107,36,0.2)] hover:bg-[#d65d1d] transition-all transform hover:-translate-y-0.5">
          Reserve Your Stay
        </button>
        <p className="text-[10px] text-center text-gray-400 font-medium tracking-tight">
          Free cancellation until 48h before check-in
        </p>
      </div>
    </div>
  );
}

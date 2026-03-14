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
    <div className="bg-white/95 backdrop-blur-2xl rounded-[3rem] p-10 shadow-[0_32px_100px_rgba(0,0,0,0.12)] border border-white flex flex-col gap-10 w-full relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-gold)]/5 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
      
      <div className="flex flex-col gap-3">
        <span className="text-[10px] font-bold text-[var(--brand-gold)] uppercase tracking-[0.4em]">
          Bespoke Selection
        </span>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-serif text-[var(--app-text)] font-semibold tracking-tight">₹{price}</span>
          <span className="text-sm text-[var(--app-text-muted)] font-medium italic">/ night</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="p-6 rounded-3xl bg-white border border-[var(--app-border)] shadow-sm flex justify-between items-center group hover:border-[var(--brand-gold)] transition-all cursor-pointer">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-[var(--app-text-muted)] uppercase tracking-widest opacity-80">Check-in — Check-out</span>
            <span className="text-base font-serif text-[var(--app-text)] font-bold italic">Aug 24 — Aug 28, 2024</span>
          </div>
          <Calendar size={22} className="text-[var(--brand-gold)]" strokeWidth={2} />
        </div>

        <div className="p-6 rounded-3xl bg-white border border-[var(--app-border)] shadow-sm flex justify-between items-center group hover:border-[var(--brand-gold)] transition-all cursor-pointer">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-[var(--app-text-muted)] uppercase tracking-widest opacity-80">Guests</span>
            <span className="text-base font-serif text-[var(--app-text)] font-bold italic">2 Adults, 1 Child</span>
          </div>
          <Users size={22} className="text-[var(--brand-gold)]" strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-8 border-t border-[var(--app-border)]">
        <div className="flex justify-between text-base">
          <span className="text-[var(--app-text-muted)] font-medium italic font-serif px-1">INR {price} x 4 nights</span>
          <span className="text-[var(--app-text)] font-bold">INR 18,000</span>
        </div>
        <div className="flex justify-between text-base">
          <span className="text-[var(--app-text-muted)] font-medium italic font-serif px-1">Service Fee</span>
          <span className="text-[var(--app-text)] font-bold">INR 450</span>
        </div>
        <div className="flex justify-between items-center mt-3 bg-white border border-[var(--app-border)] p-6 rounded-3xl shadow-sm">
          <span className="text-xl font-bold text-[var(--app-text)] font-serif italic">Total</span>
          <span className="text-2xl font-bold text-[var(--brand-gold)] font-serif">INR 18,450</span>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <button className="w-full bg-[var(--brand-gold)] hover:bg-[#B69659] text-white font-bold py-6 rounded-3xl transition-all shadow-[0_20px_40px_rgba(200,169,106,0.25)] hover:shadow-none hover:translate-y-1 active:scale-[0.98] text-sm uppercase tracking-widest">
          Reserve Your Stay
        </button>
        <p className="text-xs text-center text-[var(--app-text-muted)] font-bold px-4 tracking-wider opacity-90">
          Complimentary cancellation until 48h prior
        </p>
      </div>
    </div>
  );
}

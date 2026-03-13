"use client";
import { Tag } from 'lucide-react';

export default function SpecialOffer() {
  return (
    <div className="bg-[#FFF5F0] border border-[#FFE4D6] p-8 rounded-[2rem] mt-8">
      <div className="flex items-center gap-3 mb-4 text-[#E85D1A]">
        <Tag size={20} fill="currentColor" />
        <h3 className="text-xl font-bold font-poppins m-0">Special Offer</h3>
      </div>
      <p className="text-sm font-medium text-[#666] leading-relaxed m-0 font-poppins">
        Stay 3 nights and get a complimentary breakfast buffet and 10% discount on spa services.
      </p>
    </div>
  );
}

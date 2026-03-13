"use client";
import { motion } from 'framer-motion';

interface RoomExperienceProps {
  title: string;
  description: string;
}

export default function RoomExperience({ title, description }: RoomExperienceProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-[2px] w-12 bg-[#E85D1A]" />
        <h2 className="text-3xl font-bold font-poppins text-[#1A1A1A] m-0">Room Description</h2>
      </div>
      
      <p className="text-lg leading-relaxed text-[#555] font-poppins max-w-3xl">
        {description}
      </p>
    </section>
  );
}

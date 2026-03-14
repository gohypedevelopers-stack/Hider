"use client";
import { motion } from 'framer-motion';

interface RoomExperienceProps {
  title: string;
  description: string;
  features?: string[];
  price?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function RoomExperience({ title, description, features, price }: RoomExperienceProps) {
  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
        <h2 className="text-3xl font-bold text-[#1a1a1a]">The Experience</h2>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-[var(--brand-orange)]">INR {price}</span>
          <span className="text-xs text-gray-400">/Night</span>
        </div>
      </div>
      
      <div className="max-w-4xl">
        <p className="text-lg text-gray-600 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Signature Features removed as they aren't in the main "Experience" block of the screenshot */}
    </section>
  );
}

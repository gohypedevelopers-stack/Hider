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
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-20 flex flex-col md:flex-row md:justify-between md:items-center gap-10"
      >
        <h2 className="text-5xl md:text-6xl font-serif text-[var(--app-text)] m-0 leading-[1.1] max-w-2xl">The Experience</h2>
        {price && (
          <div className="bg-[var(--app-bg-accent)] px-10 py-6 rounded-[2.5rem] border border-[var(--app-border)] shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[var(--brand-gold)] block mb-2 font-bold">Starting From</span>
            <div className="flex items-baseline gap-3">
              <span className="text-[var(--app-text)] font-serif text-3xl font-bold italic">₹{price}</span>
              <span className="text-xs text-[var(--app-text-muted)] font-medium italic">/ night</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-xl leading-[2.2] text-[var(--app-text-muted)] font-serif max-w-4xl mb-32 font-light italic"
      >
        "{description}"
      </motion.p>

      {/* Features Grid */}
      {features && features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[var(--brand-gold)] font-inter">Signature Features</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[var(--brand-gold)]/20 to-transparent" />
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-6 bg-white/[0.02] backdrop-blur-sm hover:bg-[var(--brand-gold)] px-8 py-6 rounded-[2rem] cursor-default transition-all duration-700 border border-[var(--app-border)] hover:border-[var(--brand-gold)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(200,169,106,0.2)]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--brand-gold)] group-hover:bg-white transition-all duration-700 scale-100 group-hover:scale-125 shadow-[0_0_15px_rgba(200,169,106,0.5)]" />
                <span className="text-base font-serif text-[var(--app-text)] group-hover:text-white font-medium transition-colors duration-700 italic">
                  {feature}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </section>
  );
}

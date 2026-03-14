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
        className="mb-12 flex flex-wrap justify-between items-baseline gap-4"
      >
        <h2 className="text-4xl font-serif text-[var(--app-text)] m-0">The Experience</h2>
        {price && (
          <div className="text-[#E95D1D] font-bold text-lg">
            <span className="text-xs uppercase tracking-widest text-[#E95D1D]/70 mr-2">INR</span>
            {price}
            <span className="text-xs text-[var(--app-text-muted)] font-normal ml-1"> / Night</span>
          </div>
        )}
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="text-lg leading-[2] text-[var(--app-text-muted)] font-inter max-w-3xl mb-16 font-light"
      >
        {description}
      </motion.p>

      {/* Features Grid */}
      {features && features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--app-text)] font-inter opacity-60">Signature Features</span>
            <div className="h-px flex-1 bg-[var(--app-border)]" />
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-4 bg-[var(--app-bg-accent)] hover:bg-[var(--brand-gold)] px-6 py-5 rounded-2xl cursor-default transition-all duration-500 border border-transparent hover:border-[var(--brand-gold)] shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--brand-gold)] group-hover:bg-white transition-colors duration-500" />
                <span className="text-sm font-inter text-[var(--app-text)] group-hover:text-white font-medium transition-colors duration-500">
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

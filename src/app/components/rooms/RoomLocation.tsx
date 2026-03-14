"use client";
import { motion } from 'framer-motion';
import { MapPin, Plane, Train, Car } from 'lucide-react';

interface LocationProps {
  description?: string;
  distanceFromAirport?: string;
  distanceFromCity?: string;
}

export default function RoomLocation({ 
  description = "Nestled in the heart of Mansa, Mansa Mansions provides a serene escape while maintaining effortless connectivity to the city's most vibrant cultural and business hubs.",
  distanceFromAirport = "25 mins (15 km)",
  distanceFromCity = "10 mins (4 km)"
}: LocationProps) {
  return (
    <section className="relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <span className="text-[var(--brand-gold)] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block font-inter">
          The Vicinity
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[var(--text-main)] mb-8">
          Prime Location
        </h2>
        <p className="text-[var(--text-muted)] text-lg max-w-2xl leading-relaxed font-light">
          {description}
        </p>
      </motion.div>

      {/* Map & Proximity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
        
        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/9] lg:aspect-auto lg:h-[500px] rounded-[2.5rem] overflow-hidden bg-[var(--card-bg-alt)] border border-[var(--border-card)] shadow-inner group"
        >
          {/* Decorative Map Pattern */}
          <div className="absolute inset-0 opacity-20 grayscale brightness-75 group-hover:scale-105 transition-transform duration-[10s] ease-linear"
            style={{ 
              backgroundImage: 'url("https://www.google.com/maps/vt/pb=!1m4!1m3!1i14!2i9050!3i5975!2m3!1e0!2sm!3i420120488!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425")',
              backgroundSize: 'cover'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--app-bg)]/80 to-transparent" />
          
          {/* Location Marker */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="bg-[var(--brand-gold)] p-5 rounded-full shadow-2xl shadow-[var(--brand-gold)]/40 relative"
            >
              <MapPin className="text-white" size={32} />
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-ping" />
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
            <div className="bg-[var(--card-bg)]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs">
              <span className="text-[10px] font-bold text-[var(--brand-gold)] uppercase tracking-wider block mb-1">Mansa Mansions</span>
              <p className="text-[11px] text-[var(--text-muted)] font-medium">12/A, Elite Enclave, Mansa Road, GJ - 382010</p>
            </div>
          </div>
        </motion.div>

        {/* Proximity Details */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-[2rem] bg-[var(--app-bg-accent)] border border-[var(--border-card)] group hover:border-[var(--brand-gold)]/30 transition-colors"
          >
            <Plane className="text-[var(--brand-gold)] mb-6" size={24} />
            <h3 className="text-sm font-serif text-[var(--text-main)] mb-2 uppercase tracking-wider">Air Connectivity</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium mb-4">Swift access to the international terminal</p>
            <div className="text-xl font-medium text-[var(--brand-gold)]">{distanceFromAirport}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-[2rem] bg-transparent border border-[var(--border-card)] group hover:border-[var(--brand-gold)]/30 transition-colors"
          >
            <Train className="text-[var(--brand-gold)] mb-6" size={24} />
            <h3 className="text-sm font-serif text-[var(--text-main)] mb-2 uppercase tracking-wider">Metropolitan Hub</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium mb-4">Minutes away from the central business district</p>
            <div className="text-xl font-medium text-[var(--brand-gold)]">{distanceFromCity}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-[2rem] bg-transparent border border-[var(--border-card)] group hover:border-[var(--brand-gold)]/30 transition-colors"
          >
            <Car className="text-[var(--brand-gold)] mb-6" size={24} />
            <h3 className="text-sm font-serif text-[var(--text-main)] mb-2 uppercase tracking-wider">On-Ground Access</h3>
            <p className="text-xs text-[var(--text-muted)] font-medium mb-4">Dedicated valet & chauffeur services available</p>
            <div className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-[0.2em] mt-2">Personal Host Included</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

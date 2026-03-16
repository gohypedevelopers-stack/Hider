"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { RoomData } from '../../data/rooms';

interface RelatedRoomsProps {
  rooms: RoomData[];
}

export default function RelatedRooms({ rooms }: RelatedRoomsProps) {
  return (
    <section className="pt-40 pb-40 md:pt-56 md:pb-56 mt-40 md:mt-64 bg-[var(--app-bg-accent)] overflow-hidden">
      <div className="lux-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-32 md:mb-45"
        >
          <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] block pt-10 mb-8">
            Curated Selection
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-[var(--app-text)] uppercase tracking-wider mb-10 md:mb-16">
            Alternative Retreats
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 w-full max-w-7xl mx-auto px-4 md:px-0">
          {rooms.map((room, i) => (
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group flex flex-col w-full flex-1 bg-[var(--card-bg)] rounded-[24px] border border-[var(--app-border)] overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-[var(--brand-gold)] transition-all duration-700"
            >
              <Link href={`/rooms/${room.slug}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
                  <Image
                    src={room.galleryImages[0]}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] group-hover:scale-110"
                  />
                  {/* Subtle Gradient for hover transition */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

                  {/* Glass Badge */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span className="inline-block bg-black/40 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
                      Signature Stay
                    </span>
                  </div>

                  {/* Explore button — slides up on hover */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1]">
                    <span className="inline-flex items-center justify-center bg-[var(--brand-gold)] text-white w-12 h-12 md:w-16 md:h-16 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-700">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="p-8 md:p-10 flex items-center justify-between bg-[var(--app-bg)] relative z-10 border-t border-[var(--app-border)]">
                  <h3 className="text-4xl md:text-5xl font-serif text-[var(--app-text)] font-medium leading-none m-0">
                    {room.title}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-[var(--brand-orange)] leading-none drop-shadow-sm">₹{room.price}</span>
                    <span className="text-[14px] md:text-[16px] font-medium text-[var(--app-text-muted)] uppercase tracking-widest ml-1">/ night</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-56 bg-[var(--app-bg-accent)]">
      <div 
        className="max-w-[var(--container-width)] mx-auto"
        style={{ paddingLeft: 'var(--app-container-px)', paddingRight: 'var(--app-container-px)' }}
      >

        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
           className="text-center mb-24"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.6em] text-[var(--brand-gold)] font-inter block mb-4">
            Curated Stays
          </span>
          <h2 className="text-5xl md:text-6xl font-medium font-serif text-[var(--app-text)] m-0 mb-6">
            Alternative Retreats
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-[var(--brand-gold)] to-transparent mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {rooms.map((room, i) => (
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.2, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              <Link href={`/rooms/${room.slug}`} className="block">
                {/* Image */}
                <div className="relative h-[450px] overflow-hidden rounded-[2.5rem] mb-8 shadow-2xl">
                  <Image
                    src={room.galleryImages[0]}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-[1.5s] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-110"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-[0.4em] font-inter mb-2">Refined Haven</p>
                        <h3 className="text-white text-3xl font-serif font-medium leading-tight">{room.title}</h3>
                      </div>
                      <div className="text-right">
                        <p className="text-[var(--brand-gold)] text-[10px] uppercase font-bold tracking-[0.2em] font-inter mb-1">From</p>
                        <p className="text-white text-2xl font-serif font-bold">₹{room.price}</p>
                        <p className="text-white/30 text-[10px] font-inter">/ night</p>
                      </div>
                    </div>
                  </div>

                  {/* Explore pill — slides up on hover */}
                  <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-600 ease-[0.22, 1, 0.36, 1]">
                    <span className="inline-flex items-center gap-2.5 bg-[var(--brand-gold)] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-3 rounded-full shadow-2xl backdrop-blur-md">
                      Discover <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-[var(--app-text-muted)] font-inter font-light leading-relaxed text-center px-10 max-w-sm mx-auto">
                  {room.tagline}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

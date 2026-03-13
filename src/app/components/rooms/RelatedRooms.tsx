"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RoomData } from '../../data/rooms';

interface RelatedRoomsProps {
  rooms: RoomData[];
}

export default function RelatedRooms({ rooms }: RelatedRoomsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300 block mb-2">
            Selection
          </span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#1A1A1A] m-0">
            Alternative Retreats
          </h2>
          <div className="absolute left-0 right-0 -bottom-4 h-px bg-gray-100 max-w-[600px] mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 max-w-6xl mx-auto">
          {rooms.map((room, i) => (
            <motion.div 
              key={room.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[450px] overflow-hidden rounded-sm mb-10 shadow-2xl shadow-black/5">
                <Image
                  src={room.galleryImages[0]}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-10 left-10">
                   <div className="text-white text-3xl font-bold font-poppins mb-2">{room.title}</div>
                   <div className="text-[#E85D1A] text-[10px] uppercase font-bold tracking-[0.4em]">INR {room.price} / Night</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center px-6">
                <p className="text-sm font-poppins text-gray-400 font-light leading-relaxed mb-8">{room.tagline}</p>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="inline-block bg-[#E85D1A] text-white px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#D14D0D] transition-all rounded-xl shadow-lg shadow-[#E85D1A]/10"
                >
                  Explore Room
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

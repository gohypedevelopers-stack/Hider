"use client";
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import Link from 'next/link';
import styles from './Rooms.module.css';

export default function Rooms() {
    // Explicit image mapping — only verified bedroom images used here
    const rooms = [
        {
            id: 1,
            slug: "standard-room",
            name: "Standard Room",
            price: "₹2,500 / Night",
            features: "Queen Bed • Cozy Stay • Smart Comfort",
            image: siteConfig.images.rooms.standard
        },
        {
            id: 2,
            slug: "deluxe-room",
            name: "Deluxe Room",
            price: "₹3,500 / Night",
            features: "King Bed • Elegant Interior • Extra Space",
            image: siteConfig.images.rooms.deluxe
        },
        {
            id: 3,
            slug: "super-deluxe-room",
            name: "Super Deluxe Room",
            price: "₹4,500 / Night",
            features: "King Bed • Luxury Comfort • Grand Space",
            image: siteConfig.images.rooms.family
        }
    ];

    const handleEnquire = () => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="rooms" className={styles.section}>
            <div className="lux-container relative">
                <div className="w-full flex flex-col items-center justify-center">
                    <motion.div
                        className="flex flex-col items-center text-center w-full max-w-4xl mb-20 md:mb-32"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.4em] text-[var(--brand-gold)] mb-6 block text-center">
                        Our Collection
                    </span>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[var(--app-text)] mb-8 text-center text-center">
                        Our Accommodation
                    </h2>
                    
                    {/* Decorative Divider */}
                    <div className="h-16 w-px bg-gradient-to-b from-transparent via-[var(--brand-gold)] to-transparent mb-10 opacity-70"></div>
                    
                    <p className="text-lg md:text-xl text-[var(--app-text-muted)] font-light leading-relaxed md:leading-[1.8] max-w-2xl text-center italic font-serif">
                        Relax in our elegantly designed rooms that combine modern comfort with a peaceful atmosphere. Each room is thoughtfully equipped with essential amenities to ensure a comfortable and convenient stay.
                    </p>
                    </motion.div>
                </div>

                <div className={styles.grid}>
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                delay: index * 0.2, 
                                duration: 1.2, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className={styles.imageContainer}>
                                <div className={styles.badge}>Signature Stay</div>
                                <img src={room.image} alt={room.name} className={styles.image} />
                            </div>

                            <div className={styles.content}>
                                <div>
                                    <div className={styles.header}>
                                        <span className={styles.roomType}>Luxury Suite</span>
                                        <h3 className={styles.roomTitle}>{room.name}</h3>
                                    </div>
                                    <p style={{ color: 'var(--app-text-muted)', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6' }}>
                                        {room.features}
                                    </p>
                                </div>
                                
                                <div className={styles.footer}>
                                    <div className={styles.priceInfo}>
                                        <span className={styles.priceLabel}>Starting From</span>
                                        <div>
                                            <span className={styles.price}>{room.price.split(' / ')[0]}</span>
                                            <span className={styles.priceUnit}>/ {room.price.split(' / ')[1]}</span>
                                        </div>
                                    </div>
                                    <Link href={`/rooms/${room.slug}`} className={styles.btn}>
                                        Explore
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

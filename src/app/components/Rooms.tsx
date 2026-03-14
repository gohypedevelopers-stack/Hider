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
            features: "King Bed • Elegant Interior • Spacious Interior",
            image: siteConfig.images.rooms.deluxe
        },
        {
            id: 3,
            slug: "super-deluxe-room",
            name: "Super Deluxe Room",
            price: "₹4,500 / Night",
            features: "King Bed • Luxury Comfort • Extra Space",
            image: siteConfig.images.rooms.family
        }
    ];

    const handleEnquire = () => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="rooms" className={styles.section}>
            <div className="lux-container">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Our Collection</span>
                    <h2>Our Accommodation</h2>
                    <p>
                        Relax in our elegantly designed rooms that combine modern comfort with a peaceful atmosphere. Each room is thoughtfully equipped with essential amenities to ensure a comfortable and convenient stay.
                    </p>
                </motion.div>

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
                            <div className={styles.imageOuter}>
                                <div className={styles.imageContainer}>
                                    <img src={room.image} alt={room.name} className={styles.image} />
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.contentTop}>
                                    <h3 className={styles.roomTitle}>{room.name}</h3>
                                    <p className={styles.desc}>{room.features}</p>
                                </div>
                                
                                <div className={styles.contentBottom}>
                                    <div className={styles.price}>
                                        {room.price.split(' / ')[0]} <span>/ {room.price.split(' / ')[1]}</span>
                                    </div>
                                    <Link href={`/rooms/${room.slug}`} className={styles.btn}>
                                        Explore Room
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

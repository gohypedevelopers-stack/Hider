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
            features: "Queen Bed • Garden View • 250 sq.ft",
            image: siteConfig.images.rooms.standard
        },
        {
            id: 2,
            slug: "deluxe-room",
            name: "Deluxe Room",
            price: "₹3,500 / Night",
            features: "King Bed • City View • 350 sq.ft",
            image: siteConfig.images.rooms.deluxe
        },
        {
            id: 3,
            slug: "super-deluxe-room",
            name: "Super Deluxe Room",
            price: "₹4,500 / Night",
            features: "Suite • Grand View • 500 sq.ft",
            image: siteConfig.images.rooms.family
        }
    ];

    const handleEnquire = () => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="rooms" className={styles.section}>
            <div className="container mx-auto px-4">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Our Collection</span>
                    <h2 className={styles.title}>Guest Accommodation</h2>
                    <p>
                        Discover a collection of refined living spaces, where every detail is curated to provide a sanctuary of calm and unparalleled comfort.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                delay: index * 0.15, 
                                duration: 1, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className={styles.imageContainer}>
                                <img src={room.image} alt={room.name} className={styles.image} />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.roomTitle}>{room.name}</h3>
                                <p className={styles.desc}>{room.features}</p>
                                <div className={styles.price}>{room.price}</div>
                                <Link href={`/rooms/${room.slug}`} className={styles.btn}>
                                    VIEW ROOM
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

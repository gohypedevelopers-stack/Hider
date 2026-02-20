"use client";
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import styles from './Rooms.module.css';

export default function Rooms() {
    const rooms = [
        {
            id: 1,
            name: "Standard Room",
            price: "INR 2,500 / Night",
            features: "Queen Bed • Free WiFi • Rain Shower",
            image: siteConfig.images.rooms[0]
        },
        {
            id: 2,
            name: "Deluxe Room",
            price: "INR 4,500 / Night",
            features: "King Bed • Balcony • Mini Bar",
            image: siteConfig.images.rooms[1]
        },
        {
            id: 3,
            name: "Family Suite",
            price: "INR 8,000 / Night",
            features: "2 Bedrooms • Lounge • Kitchenette",
            image: siteConfig.images.rooms[2]
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>Our Accommodation</h2>
                    <p>Relax in our elegantly designed rooms, blending modern amenities with serene comfort.</p>
                </motion.div>

                <div className={styles.grid}>
                    {rooms.map((room, index) => (
                        <motion.div
                            key={room.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.imageContainer}>
                                <img src={room.image} alt={room.name} className={styles.image} />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.roomTitle}>{room.name}</h3>
                                <p className={styles.desc}>{room.features}</p>
                                <div className={styles.price}>{room.price}</div>
                                <button onClick={handleEnquire} className={styles.btn}>
                                    VIEW DETAILS
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

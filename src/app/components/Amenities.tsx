"use client";
import { motion } from 'framer-motion';
import { Wifi, Car, Coffee, Utensils, Headphones, Tv } from 'lucide-react';
import styles from './Amenities.module.css';

const amenities = [
    { id: 1, label: "Free Wi-Fi", icon: Wifi },
    { id: 2, label: "Secure Parking", icon: Car },
    { id: 3, label: "Room Service", icon: Coffee },
    { id: 4, label: "Premium Dining", icon: Utensils },
    { id: 5, label: "Entertainment TV", icon: Tv },
    { id: 6, label: "24/7 Support", icon: Headphones },
];

export default function Amenities() {
    return (
        <section id="amenities" className={styles.section}>
            <div className="container mx-auto px-4">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Amenities</h2>
                    <p>Carefully selected amenities to make your stay comfortable.</p>
                </motion.div>

                <div className={styles.grid}>
                    {amenities.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.iconWrapper}>
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className={styles.label}>{item.label}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

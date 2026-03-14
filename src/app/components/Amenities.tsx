"use client";
import { motion } from 'framer-motion';
import { Wifi, Car, Zap, Clock3, BellRing, Wind, Coffee, WashingMachine, Droplets, PhoneCall, Sparkles, Baby, ShieldCheck, ArrowRightLeft, ArrowUpCircle, Shirt, Utensils } from 'lucide-react';
import styles from './Amenities.module.css';

const amenities = [
    { id: 1, label: 'Free WiFi', icon: Wifi },
    { id: 2, label: 'Secure Parking', icon: Car },
    { id: 3, label: 'AC Rooms', icon: Wind },
    { id: 4, label: 'Room Service', icon: BellRing },
    { id: 5, label: '24/7 Front Desk', icon: Clock3 },
    { id: 6, label: 'CCTV Security', icon: ShieldCheck },
    { id: 7, label: 'Breakfast Included', icon: Coffee },
    { id: 8, label: 'Laundry Service', icon: WashingMachine },
    { id: 9, label: 'Power Backup', icon: Zap },
    { id: 10, label: 'Elevator', icon: ArrowUpCircle },
    { id: 11, label: 'Hot & Cold Water', icon: Droplets },
    { id: 12, label: 'Iron with Ironing Board', icon: Shirt },
    { id: 13, label: 'Hot Water Kettle', icon: Utensils },
    { id: 14, label: 'Wake-Up Call Service', icon: PhoneCall },
    { id: 15, label: 'Daily Housekeeping', icon: Sparkles },
    { id: 16, label: 'Child Friendly Environment', icon: Baby },
    { id: 17, label: 'Pick & Drop Service (Chargeable)', icon: ArrowRightLeft },
];

export default function Amenities() {
    return (
        <section id="amenities" className={styles.section}>
            <div className="container mx-auto px-4">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Exquisite Living</span>
                    <h2>Amenities & Services</h2>
                    <p>
                        From seamless connectivity to personalized guest services, explore the thoughtful touches that elevate your stay at Hotel Hider.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {amenities.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: i * 0.03, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <div className={styles.iconWrapper}>
                                <item.icon size={32} strokeWidth={1} />
                            </div>
                            <h3 className={styles.label}>{item.label}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

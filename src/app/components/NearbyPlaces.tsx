"use client";
import { motion } from 'framer-motion';
import { GraduationCap, Hospital, MapPin } from 'lucide-react';
import styles from './NearbyPlaces.module.css';

const places = [
    {
        title: "Key Destinations",
        icon: MapPin,
        items: [
            { name: "Gandhinagar (Capital City)", dist: "25 KM" },
            { name: "Ahmedabad Business District", dist: "45 KM" },
            { name: "GIFT City", dist: "35 KM" },
            { name: "Akshardham Temple", dist: "28 KM" }
        ]
    },
    {
        title: "Institutions & Hubs",
        icon: GraduationCap,
        items: [
            { name: "DA-IICT Gandhinagar", dist: "26 KM" },
            { name: "IIT Gandhinagar", dist: "30 KM" },
            { name: "NID Ahmedabad", dist: "48 KM" },
            { name: "Gujarat National Law University", dist: "24 KM" }
        ]
    },
    {
        title: "Medical Facilities",
        icon: Hospital,
        items: [
            { name: "Civil Hospital Gandhinagar", dist: "22 KM" },
            { name: "Apollo Hospitals Ahmedabad", dist: "40 KM" },
            { name: "Zydus Hospital", dist: "42 KM" }
        ]
    }
];

export default function NearbyPlaces() {
    return (
        <section id="nearby" className={styles.section}>
            <div className="container mx-auto px-4">
                <motion.div 
                    className={styles.intro}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Discovery</span>
                    <h2>Nearby Mansa</h2>
                    <p>Experience the finest attractions and essential hubs of Gujarat from our central location.</p>
                </motion.div>

                <div className={styles.grid}>
                    {places.map((category, idx) => (
                        <motion.div 
                            key={idx}
                            className={styles.category}
                            initial={{ opacity: 0, scale: 0.98, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                delay: idx * 0.15, 
                                duration: 1, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                        >
                            <div className={styles.categoryHeader}>
                                <category.icon size={28} strokeWidth={1.5} className={styles.icon} />
                                <h3>{category.title}</h3>
                            </div>
                            <div className={styles.list}>
                                {category.items.map((item, i) => (
                                    <div key={i} className={styles.item}>
                                        <span className={styles.itemName}>{item.name}</span>
                                        <span className={styles.itemDist}>{item.dist}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";
import { motion } from 'framer-motion';
import { GraduationCap, Hospital, MapPin } from 'lucide-react';
import styles from './NearbyPlaces.module.css';

const places = [
    {
        title: "Colleges & Universities",
        icon: GraduationCap,
        items: [
            { name: "Starex University", dist: "Near NH-48" },
            { name: "Gurugram University", dist: "Sector 51" },
            { name: "Amity University Gurgaon", dist: "Pachgaon" },
            { name: "Govt Polytechnic Manesar", dist: "IMT Manesar" },
            { name: "Laxmi College of Education", dist: "Manesar" }
        ]
    },
    {
        title: "Nearby Hospitals",
        icon: Hospital,
        items: [
            { name: "Miracles Apollo Cradle", dist: "IMT Manesar" },
            { name: "Artemis Lite Multispeciality", dist: "Manesar" },
            { name: "Prakash Multispeciality", dist: "Manesar" },
            { name: "Fortis Hospital Manesar", dist: "Sector 1" }
        ]
    },
    {
        title: "Nearby Attractions",
        icon: MapPin,
        items: [
            { name: "Sultanpur Bird Sanctuary", dist: "15 KM" },
            { name: "Ambience Mall", dist: "20 KM" },
            { name: "Leisure Valley Park", dist: "18 KM" },
            { name: "Cyber Hub", dist: "22 KM" },
            { name: "Damdama Lake", dist: "25 KM" }
        ]
    }
];

export default function NearbyPlaces() {
    return (
        <section id="nearby" className={styles.section}>
            <div className="lux-container">
                <motion.div 
                    className={styles.intro}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.eyebrow}>Discovery</span>
                    <h2>Exploring Manesar</h2>
                    <p>Experience the finest attractions and essential hubs of Gurgaon from our central location.</p>
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

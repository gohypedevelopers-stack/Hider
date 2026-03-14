"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.inner}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -60, scale: 1.05 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src="/1.jpeg"
                        alt="Hotel Hider – Manesar, Gurgaon"
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.label}>Art of Hospitality</span>
                    <h2>Experience Luxury in the Heart of Mansa</h2>
                    <div className={styles.divider} />
                    <p>
                        Hotel Hider offers a peaceful and comfortable stay in Gujarat's developing hub. 
                        Designed to meet the needs of both business and leisure travelers, our hotel is a sanctuary of 
                        modern elegance and attentive service.
                    </p>
                    <p>
                        Located near key industrial areas and attractions, Hotel Hider offers easy access to the heartbeat 
                        of the city while providing a relaxing environment with world-class convenience.
                    </p>

                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <span className={styles.stats}>03</span>
                            <span className={styles.statLabel}>Expansive Floors</span>
                        </div>
                        <div className={styles.highlight}>
                            <span className={styles.stats}>17+</span>
                            <span className={styles.statLabel}>Luxury Rooms</span>
                        </div>
                        <div className={styles.highlight}>
                            <span className={styles.stats}>24/7</span>
                            <span className={styles.statLabel}>Bespoke Service</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

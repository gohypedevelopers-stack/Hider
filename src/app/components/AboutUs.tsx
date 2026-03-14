"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <section id="about" className={styles.section}>
            <div className={`lux-container ${styles.inner}`}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -60, scale: 1.05 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className={styles.imageInner}>
                        <Image
                            src="/1.jpeg"
                            alt="Hotel Hider – Manesar, Gurgaon"
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h2>About Us</h2>
                    <div className={styles.divider} />
                    <p>
                        Experience a relaxing and comfortable stay at Hotel Hider, conveniently located near NH-48 and IMT Manesar. 
                        Our property offers spacious rooms, modern amenities, and warm hospitality for business travelers, families, 
                        and leisure guests seeking a refined stay in Gurgaon and Manesar.
                    </p>
                    <p>
                        Located near NH-48 and IMT Manesar, Hotel Hider offers easy access to industrial areas, 
                        universities, hospitals, and local attractions. Whether you are visiting for work, a family 
                        trip, or a short stay, our goal is to provide a relaxing environment with quality service and convenience.
                    </p>

                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <motion.div 
                                className={styles.stats}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <span className="text-[var(--brand-orange)]">Prime</span>
                            </motion.div>
                            <span className={styles.statLabel}>Location</span>
                        </div>
                        <div className={styles.highlight}>
                            <motion.div 
                                className={styles.stats}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <span className="text-[var(--brand-orange)]">Scenic</span>
                            </motion.div>
                            <span className={styles.statLabel}>Views</span>
                        </div>
                        <div className={styles.highlight}>
                            <motion.div 
                                className={styles.stats}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <span className="text-[var(--brand-orange)]">Stylish</span>
                            </motion.div>
                            <span className={styles.statLabel}>Décor</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

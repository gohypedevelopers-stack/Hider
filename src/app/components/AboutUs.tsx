"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <section id="about" className={styles.section}>
            <div className="lux-container">
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
                        Hotel Hider offers a peaceful and comfortable stay in the heart of Manesar, Gurgaon. 
                        Designed to meet the needs of both business and leisure travelers, our hotel is a sanctuary of 
                        modern elegance and attentive service.
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
                                <span className="text-[var(--brand-orange)]">24/7</span>
                            </motion.div>
                            <span className={styles.statLabel}>Wake-Up Call Service</span>
                        </div>
                        <div className={styles.highlight}>
                            <motion.div 
                                className={styles.stats}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <span className="text-[var(--brand-orange)]">Secure</span>
                            </motion.div>
                            <span className={styles.statLabel}>CCTV Security</span>
                        </div>
                        <div className={styles.highlight}>
                            <motion.div 
                                className={styles.stats}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <span className="text-[var(--brand-orange)]">Daily</span>
                            </motion.div>
                            <span className={styles.statLabel}>Daily Housekeeping</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

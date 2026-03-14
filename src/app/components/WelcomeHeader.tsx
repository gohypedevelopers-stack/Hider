"use client";
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import styles from './WelcomeHeader.module.css';

export default function WelcomeHeader() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        const { number, message } = siteConfig.whatsapp;
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.label}>Est. 2026</span>
                    <h2 className={styles.title}>A New Standard of Elegance</h2>
                    <div className={styles.goldDivider} />
                    <p className={styles.subtitle}>{siteConfig.tagline}</p>
                    <p className={styles.description}>
                        Experience a relaxing and comfortable stay at Hotel Hider, conveniently located in the vibrant city of Mansa. 
                        Our property offers spacious rooms, modern amenities, and warm hospitality for business travelers, families, 
                        and leisure guests seeking the finest staying experience in Gujarat.
                    </p>

                    <div className={styles.buttons}>
                        <button onClick={() => scrollTo('rooms')} className={styles.primaryBtn}>
                            Explore Our Rooms
                        </button>

                        <button onClick={openWhatsApp} className={styles.secondaryBtn}>
                            RESERVATIONS
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

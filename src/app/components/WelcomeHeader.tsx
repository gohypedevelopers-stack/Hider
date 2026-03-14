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
            <div className="lux-container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                >

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

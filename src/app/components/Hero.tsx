"use client";
import { motion } from 'framer-motion';
import { siteConfig } from '../config';
import styles from './Hero.module.css';

export default function Hero() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const openWhatsApp = () => {
        const { number, message } = siteConfig.whatsapp;
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="home" className={styles.hero} style={{ backgroundImage: `url(${siteConfig.images.hero})` }}>
            <div className={styles.overlay}></div>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
            >
                <h1 className={styles.title}>Welcome to Hider</h1>
                <p className={styles.subtitle}>Comfort & Luxury in Manesar, Gurgaon</p>

                <div className={styles.buttons}>
                    <button onClick={() => scrollTo('booking')} className={styles.primaryBtn}>
                        BOOK YOUR STAY
                    </button>

                    <button onClick={openWhatsApp} className={styles.secondaryBtn}>
                        WHATSAPP US
                    </button>
                </div>
            </motion.div>
        </section>
    );
}

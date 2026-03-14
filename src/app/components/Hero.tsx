"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config';
import styles from './Hero.module.css';

export default function Hero() {
    const images = siteConfig.images.gallery.slice(0, 5); // Use first 5 images for slider
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className={styles.hero}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className={styles.heroBg}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    style={{ backgroundImage: `url(${images[index]})` }}
                />
            </AnimatePresence>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <motion.span 
                        className="eyebrow"
                        initial={{ opacity: 0, letterSpacing: '1.2em' }}
                        animate={{ opacity: 1, letterSpacing: '0.5em' }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Manesar, Gurgaon, India
                    </motion.span>
                    
                    <h1 className={styles.title}>
                        {"Welcome to Hotel Hider".split(" ").map((word, i) => (
                            <span key={i} className={styles.wordWrapper}>
                                <motion.span
                                    custom={i}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ 
                                        duration: 1, 
                                        delay: 0.5 + (i * 0.1), 
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                    className={styles.word}
                                >
                                    {word}&nbsp;
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.p 
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Comfort & Luxury in Manesar, Gurgaon
                    </motion.p>
                    
                    <motion.div 
                        className={styles.heroButtons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <button onClick={() => scrollTo('booking')} className={styles.primaryBtn}>
                            Book Your Stay
                        </button>
                        <a 
                            href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`}
                            target="_blank"
                            className={styles.secondaryBtn}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                        >
                            WhatsApp Us
                        </a>
                    </motion.div>
                </div>
            </div>


            <div className={styles.scrollIndicator} onClick={() => scrollTo('about')}>
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
            </div>
        </section>
    );
}


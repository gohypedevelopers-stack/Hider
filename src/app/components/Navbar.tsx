"use client";
import { useState, useEffect } from 'react';
import { Menu, X, User, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { BRAND_LOGO } from '../config';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const scrollTo = (id: string) => {
        setIsOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : styles.transparent}`}>
            <div className={styles.container}>

                {/* ===== LOGO ===== */}
                <a href="#home" className={styles.logoLink} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                    <img
                        src={BRAND_LOGO}
                        alt="Hider"
                        className={styles.logoImg}
                    />
                </a>

                {/* Desktop Menu */}
                <div className={styles.menuDesktop}>
                    <button onClick={() => scrollTo('home')} className={styles.link}>Home</button>
                    <button onClick={() => scrollTo('rooms')} className={styles.link}>Rooms</button>
                    <button onClick={() => scrollTo('amenities')} className={styles.link}>Amenities</button>
                    <button onClick={() => scrollTo('gallery')} className={styles.link}>Gallery</button>
                    <button onClick={() => scrollTo('nearby')} className={styles.link}>Nearby</button>
                    <button onClick={() => scrollTo('contact')} className={styles.link}>Contact</button>
                </div>

                <div className={styles.navRight}>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    
                    {/* Desktop Action */}
                    <div className={styles.actions}>
                        <button onClick={() => scrollTo('booking')} className={styles.bookBtn}>Book Now</button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className={styles.mobileMenu}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className={styles.mobileMenuContent}>
                                <button onClick={() => scrollTo('home')} className={styles.mobileLink}>Home</button>
                                <button onClick={() => scrollTo('rooms')} className={styles.mobileLink}>Rooms</button>
                                <button onClick={() => scrollTo('amenities')} className={styles.mobileLink}>Amenities</button>
                                <button onClick={() => scrollTo('gallery')} className={styles.mobileLink}>Gallery</button>
                                <button onClick={() => scrollTo('nearby')} className={styles.mobileLink}>Nearby</button>
                                <button onClick={() => scrollTo('contact')} className={styles.mobileLink}>Contact</button>
                                <button onClick={() => scrollTo('booking')} className={styles.bookBtn} style={{ marginTop: '40px' }}>Book Now</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

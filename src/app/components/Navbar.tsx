"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, Sun, Moon } from 'lucide-react';
import styles from './Navbar.module.css';
import { BRAND_LOGO } from '../config';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
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
        <nav className={styles.nav}>
            <div className={styles.container}>

                {/* ===== LOGO — Only /logo.png — plain <img>, no SVG, no component ===== */}
                <a href="#home" className={styles.logoLink} onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
                    <img
                        src={BRAND_LOGO}
                        alt="Hider"
                        className={styles.logoImg}
                    />
                </a>

                {/* Desktop Menu */}
                <div className={styles.menuDesktop}>
                    <button onClick={() => scrollTo('home')} className={styles.link}>Rooms</button>
                    <button onClick={() => scrollTo('amenities')} className={styles.link}>Amenities</button>
                    <button onClick={() => scrollTo('gallery')} className={styles.link}>Offers</button>
                    <button onClick={() => scrollTo('contact')} className={styles.link}>Contact</button>
                    
                    <div className={styles.actions}>
                        <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>

                        <button onClick={() => scrollTo('booking')} className={styles.bookBtn}>Book Now</button>
                        
                        {/* User Icon Wrapper */}
                        <div className={styles.userWrapper}>
                            <User size={20} strokeWidth={2.5} />
                        </div>
                    </div>
                </div>

                {/* Mobile Toggle Group */}
                <div className={styles.mobileActions}>
                    <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                    </button>
                    <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        <button onClick={() => scrollTo('home')} className={styles.mobileLink}>Home</button>
                        <button onClick={() => scrollTo('rooms')} className={styles.mobileLink}>Rooms</button>
                        <button onClick={() => scrollTo('amenities')} className={styles.mobileLink}>Amenities</button>
                        <button onClick={() => scrollTo('gallery')} className={styles.mobileLink}>Offers</button>
                        <button onClick={() => scrollTo('contact')} className={styles.mobileLink}>Contact</button>
                        <button onClick={() => scrollTo('booking')} className={styles.bookBtn}>Book Now</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

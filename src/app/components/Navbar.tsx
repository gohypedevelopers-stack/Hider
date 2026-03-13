"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import styles from './Navbar.module.css';
import { BRAND_LOGO } from '../config';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

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
                    <button onClick={() => scrollTo('booking')} className={styles.bookBtn}>Book Now</button>
                    
                    {/* User Icon Wrapper */}
                    <div className={styles.userWrapper}>
                        <User size={20} strokeWidth={2.5} />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
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

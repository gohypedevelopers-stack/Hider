"use client";
import Link from 'next/link';
import { siteConfig, BRAND_LOGO } from '../config';
import styles from './Footer.module.css';

export default function Footer() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                {/* Brand */}
                <div>
                    <Link href="/">
                        <img src={BRAND_LOGO} alt="Hider Hotel" className={styles.footerLogo} />
                    </Link>
                    <p className={styles.tagline}>{siteConfig.tagline}</p>
                </div>

                {/* Links */}
                <div>
                    <h4 className={styles.h4}>Explore</h4>
                    <div className={styles.linkList}>
                        <button onClick={() => scrollTo('home')} className={styles.footerLink}>Home</button>
                        <button onClick={() => scrollTo('rooms')} className={styles.footerLink}>Rooms</button>
                        <button onClick={() => scrollTo('amenities')} className={styles.footerLink}>Amenities</button>
                        <button onClick={() => scrollTo('gallery')} className={styles.footerLink}>Gallery</button>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h4 className={styles.h4}>Contact</h4>
                    <div className={styles.linkList}>
                        <p className="text-gray-400">{siteConfig.contact.address}</p>
                        <a href={`tel:${siteConfig.contact.phone}`} className={styles.footerLink}>{siteConfig.contact.displayPhone}</a>
                        <a href={`mailto:${siteConfig.contact.email}`} className={styles.footerLink}>Email Us</a>
                        <button onClick={() => scrollTo('booking')} className={styles.footerLink}>Book Now</button>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Hider Hotel. All rights reserved. | Manesa, Gurgaon</p>
            </div>
        </footer>
    );
}

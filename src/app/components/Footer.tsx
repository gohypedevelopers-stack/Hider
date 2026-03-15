"use client";
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { siteConfig, BRAND_LOGO } from '../config';
import styles from './Footer.module.css';

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const scrollTo = (id: string) => {
        if (pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${id}`);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} lux-container`}>
                {/* Brand */}
                <div>
                    <Link href="/">
                        <img src={BRAND_LOGO} alt="Hotel Hider" className={styles.footerLogo} />
                    </Link>
                    <p className={styles.tagline}>
                        Hotel Hider offers comfortable and modern stays in Manesar, Gurgaon with convenient access to NH-48 and IMT Manesar.
                    </p>
                    <div className={styles.socials}>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
                            <Instagram size={16} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Facebook">
                            <Facebook size={16} />
                        </a>
                        <a href={`https://wa.me/${siteConfig.whatsapp.number}`} target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="WhatsApp">
                            <MessageCircle size={16} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className={styles.h4}>Quick Links</h4>
                    <div className={styles.linkList}>
                        <button onClick={() => scrollTo('home')} className={styles.footerLink}>Home</button>
                        <button onClick={() => scrollTo('rooms')} className={styles.footerLink}>Rooms & Suites</button>
                        <button onClick={() => scrollTo('amenities')} className={styles.footerLink}>Amenities</button>
                        <button onClick={() => scrollTo('gallery')} className={styles.footerLink}>Gallery</button>
                        <button onClick={() => scrollTo('contact')} className={styles.footerLink}>Contact Us</button>
                    </div>
                </div>

                <div>
                    <h4 className={styles.h4}>Contact</h4>
                    <div className={styles.linkList}>
                        <p className={styles.contactText}>{siteConfig.contact.address}</p>
                        <a href={`tel:${siteConfig.contact.phone}`} className={styles.footerLink}>{siteConfig.contact.displayPhone}</a>
                        <a href={`mailto:${siteConfig.contact.email}`} className={styles.footerLink}>{siteConfig.contact.email}</a>
                        <button onClick={() => scrollTo('booking')} className={styles.footerLink}>Make a Reservation</button>
                    </div>
                </div>
            </div>

            <div className={`${styles.footerBottom} lux-container`}>
                <div className="flex flex-col gap-2">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.hotelName}. Art of Hospitality.</p>
                    {siteConfig.contact.gstNumber && (
                        <p style={{ opacity: 0.5, fontSize: '10px' }}>GST: {siteConfig.contact.gstNumber}</p>
                    )}
                </div>
                <div className="flex flex-col items-end gap-2 text-right">
                    <p>Check-in / Check-out: 12:00 Noon</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className={styles.footerLink} style={{ fontSize: '12px' }}>Privacy Policy</Link>
                        <Link href="/terms" className={styles.footerLink} style={{ fontSize: '12px' }}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

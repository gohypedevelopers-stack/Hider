"use client";
import { siteConfig } from '../config';
import styles from './Contact.module.css';

export default function Contact() {
    const { phone, displayPhone, email, address, mapQuery } = siteConfig.contact;

    return (
        <section id="contact" className={styles.section}>
            <div className="container mx-auto px-4">

                <div className={styles.wrapper}>
                    {/* Info Side */}
                    <div>
                        <div className="mb-14">
                            <h2>Visit Hider Hotel</h2>
                            <p>Located in the heart of Manesar, Gurgaon. Easily accessible from Delhi-Jaipur Expressway.</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4>Address</h4>
                            <p>{address}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4>Phone</h4>
                            <p><a href={`tel:${phone}`}>{displayPhone}</a></p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4>Email</h4>
                            <p><a href={`mailto:${email}`}>{email}</a></p>
                        </div>

                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                            target="_blank"
                            className={styles.btn}
                        >
                            Open in Google Maps
                        </a>
                    </div>

                    {/* Map Side with specific Manesar Gurgaon Query */}
                    <div className={styles.mapContainer}>
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                            className={styles.map}
                            loading="lazy"
                            title="Hotel Location"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

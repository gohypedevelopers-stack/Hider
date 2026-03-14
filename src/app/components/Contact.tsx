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
                    <div className={styles.intro}>
                        <span className={styles.eyebrow}>Location</span>
                        <h2>Connectivity</h2>
                        
                        <div className={styles.infoItem}>
                            <h4>Physical Address</h4>
                            <p>{address}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <h4>Reservations</h4>
                            <p><a href={`tel:${phone}`}>{displayPhone}</a></p>
                            <p><a href={`mailto:${email}`}>{email}</a></p>
                        </div>

                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
                            target="_blank"
                            className={styles.btn}
                        >
                            Get Directions
                        </a>
                    </div>

                    {/* Map Side */}
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

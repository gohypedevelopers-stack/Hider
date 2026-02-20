"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config';
import styles from './BookingForm.module.css';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        roomType: 'Standard Room',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks for your enquiry! We'll contact you shortly.");
    };

    const sendWhatsApp = () => {
        const { number } = siteConfig.whatsapp;
        const msg = `Booking Enquiry From Website:
Name: ${formData.name}
Phone: ${formData.phone}
Room: ${formData.roomType}
Guests: ${formData.guests}
Dates: ${formData.checkIn} to ${formData.checkOut}
Message: ${formData.message}`;

        const url = `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="booking" className={styles.section}>
            <div className="container mx-auto px-4">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Book Your Stay</h2>
                    <p>Enquire now for availability and specialized services.</p>
                </motion.div>

                <motion.div
                    className={styles.formContainer}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                            <div className={styles.fullWidth}>
                                <label className={styles.label}>Full Name *</label>
                                <input required type="text" name="name" className={styles.input} onChange={handleChange} placeholder="Enter your full name" />
                            </div>

                            <div>
                                <label className={styles.label}>Phone Number *</label>
                                <input required type="tel" name="phone" className={styles.input} onChange={handleChange} placeholder="+91 99999 99999" />
                            </div>

                            <div>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" name="email" className={styles.input} onChange={handleChange} placeholder="name@example.com" />
                            </div>

                            <div>
                                <label className={styles.label}>Check-in Date *</label>
                                <input required type="date" name="checkIn" className={styles.input} onChange={handleChange} />
                            </div>

                            <div>
                                <label className={styles.label}>Check-out Date *</label>
                                <input required type="date" name="checkOut" className={styles.input} onChange={handleChange} />
                            </div>

                            <div>
                                <label className={styles.label}>Guests *</label>
                                <select name="guests" className={styles.select} onChange={handleChange} value={formData.guests}>
                                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className={styles.label}>Room Type *</label>
                                <select name="roomType" className={styles.select} onChange={handleChange} value={formData.roomType}>
                                    <option>Standard Room</option>
                                    <option>Deluxe Room</option>
                                    <option>Family Suite</option>
                                </select>
                            </div>

                            <div className={styles.fullWidth}>
                                <label className={styles.label}>Message</label>
                                <textarea name="message" className={styles.textarea} onChange={handleChange} placeholder="Any specific requirements?"></textarea>
                            </div>
                        </div>

                        <button type="submit" className={styles.submitBtn}>
                            SUBMIT ENQUIRY
                        </button>

                        <button type="button" onClick={sendWhatsApp} className={styles.whatsappBtn}>
                            <MessageCircle size={18} /> Chat on WhatsApp
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

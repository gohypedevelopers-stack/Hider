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
            <div className="lux-container">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className={styles.eyebrow}>Reservations</span>
                    <h2>Book Your Stay</h2>
                    <p>Experience the finest hospitality in Manesar. Our dedicated team is ready to assist you.</p>
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
                                <label className={styles.label}>Full Name</label>
                                <input required type="text" name="name" className={styles.input} onChange={handleChange} placeholder="GUEST NAME" />
                            </div>

                            <div>
                                <label className={styles.label}>Phone Number</label>
                                <input required type="tel" name="phone" className={styles.input} onChange={handleChange} placeholder="+91" />
                            </div>

                            <div>
                                <label className={styles.label}>Email Address</label>
                                <input type="email" name="email" className={styles.input} onChange={handleChange} placeholder="EMAIL@EXAMPLE.COM" />
                            </div>

                            <div>
                                <label className={styles.label}>Check In</label>
                                <input required type="date" name="checkIn" className={styles.input} onChange={handleChange} />
                            </div>

                            <div>
                                <label className={styles.label}>Check Out</label>
                                <input required type="date" name="checkOut" className={styles.input} onChange={handleChange} />
                            </div>

                            <div>
                                <label className={styles.label}>Total Guests</label>
                                <select name="guests" className={styles.select} onChange={handleChange} value={formData.guests}>
                                    {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className={styles.label}>Accommodation Type</label>
                                <select name="roomType" className={styles.select} onChange={handleChange} value={formData.roomType}>
                                    <option>Standard Room</option>
                                    <option>Deluxe Room</option>
                                    <option>Family Suite</option>
                                </select>
                            </div>

                            <div className={styles.fullWidth}>
                                <label className={styles.label}>Special Requirements</label>
                                <textarea name="message" className={styles.textarea} onChange={handleChange} placeholder="TELL US MORE ABOUT YOUR STAY"></textarea>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button type="submit" className={styles.submitBtn}>
                                REQUEST AVAILABILITY
                            </button>

                            <button type="button" onClick={sendWhatsApp} className={styles.whatsappBtn}>
                                <MessageCircle size={18} strokeWidth={1.5} /> CHAT ON WHATSAPP
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

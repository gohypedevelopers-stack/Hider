"use client";
import { useState } from 'react';
import { Calendar, Users, ChevronDown } from 'lucide-react';
import styles from './BookingBar.module.css';

export default function BookingBar() {
    const [guests, setGuests] = useState('2');

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* Arrival */}
                <div className={styles.field}>
                    <div className={styles.iconWrapper}>
                        <Calendar size={18} strokeWidth={1.5} />
                    </div>
                    <div className={styles.fieldText}>
                        <span className={styles.label}>Check In</span>
                        <input type="date" className={styles.input} defaultValue="2026-03-20" />
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Departure */}
                <div className={styles.field}>
                    <div className={styles.iconWrapper}>
                        <Calendar size={18} strokeWidth={1.5} />
                    </div>
                    <div className={styles.fieldText}>
                        <span className={styles.label}>Check Out</span>
                        <input type="date" className={styles.input} defaultValue="2026-03-22" />
                    </div>
                </div>

                <div className={styles.divider} />

                {/* Guests */}
                <div className={styles.field}>
                    <div className={styles.iconWrapper}>
                        <Users size={18} strokeWidth={1.5} />
                    </div>
                    <div className={styles.fieldText}>
                        <span className={styles.label}>Guests</span>
                        <select 
                            className={styles.select}
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4+ Guests</option>
                        </select>
                    </div>
                    <ChevronDown size={14} className={styles.chevron} />
                </div>

                <div className={styles.divider} />

                {/* Room Type */}
                <div className={styles.field}>
                    <div className={styles.iconWrapper}>
                        <ChevronDown size={18} strokeWidth={1.5} />
                    </div>
                    <div className={styles.fieldText}>
                        <span className={styles.label}>Room Type</span>
                        <select className={styles.select}>
                            <option>Standard Room</option>
                            <option>Deluxe Room</option>
                            <option>Super Deluxe</option>
                        </select>
                    </div>
                    <ChevronDown size={14} className={styles.chevron} />
                </div>

                {/* Submit */}
                <button className={styles.submitBtn} onClick={() => scrollTo('booking')}>
                    Book Now
                </button>
            </div>
        </div>
    );
}

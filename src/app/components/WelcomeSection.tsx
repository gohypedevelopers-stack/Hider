"use client";
import { motion } from 'framer-motion';

export default function WelcomeSection() {
    return (
        <section style={{ background: 'var(--section-bg)', padding: '100px 24px' }}>
            <motion.div
                style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        display: 'inline-block',
                        fontSize: 10,
                        fontWeight: 800,
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        color: '#E85D1A',
                        marginBottom: 20,
                        fontFamily: 'var(--font-body)',
                    }}
                >
                    Hotel Hider
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(32px, 5vw, 52px)',
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--app-text)',
                        lineHeight: 1.15,
                        marginBottom: 16,
                    }}
                >
                    Welcome to Hotel Hider
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--app-text-muted)',
                        marginBottom: 32,
                        fontFamily: 'var(--font-body)',
                    }}
                >
                    A Boutique Hotel in Manesar, Gurgaon
                </motion.p>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    style={{
                        height: 1,
                        background: 'linear-gradient(to right, transparent, #E85D1A, transparent)',
                        marginBottom: 32,
                        transformOrigin: 'center',
                    }}
                />

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                        fontSize: 16,
                        lineHeight: 1.9,
                        color: 'var(--app-text-muted)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        maxWidth: 640,
                        margin: '0 auto 48px',
                    }}
                >
                    Hotel Hider offers a peaceful and comfortable stay in the heart of Manesar.
                    Designed for both business and leisure travelers, we provide modern rooms,
                    essential amenities, and warm attentive service — all in one place.
                </motion.p>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '48px',
                        flexWrap: 'wrap',
                    }}
                >
                    {[
                        { value: '3', label: 'Room Types' },
                        { value: '17+', label: 'Amenities' },
                        { value: '24/7', label: 'Front Desk' },
                    ].map((stat, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{
                                fontSize: 'clamp(28px, 4vw, 40px)',
                                fontFamily: 'var(--font-heading)',
                                color: '#E85D1A',
                                fontWeight: 700,
                                lineHeight: 1,
                                marginBottom: 6,
                            }}>
                                {stat.value}
                            </div>
                            <div style={{
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                color: 'var(--app-text-muted)',
                                fontFamily: 'var(--font-body)',
                            }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}

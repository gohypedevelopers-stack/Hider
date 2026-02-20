"use client";
import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../config';
import styles from './Gallery.module.css';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="gallery" className={styles.section}>
            <div className="container mx-auto px-4">
                <motion.div
                    className={styles.intro}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Gallery</h2>
                    <p>A glimpse into our luxurious spaces in Manesar.</p>
                </motion.div>

                <div className={styles.grid}>
                    {siteConfig.images.gallery.map((src, index) => (
                        <motion.div
                            key={index}
                            className={styles.imageWrapper}
                            onClick={() => setSelectedImage(src)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img src={src} alt="Hider Gallery" className={styles.image} loading="lazy" />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            className={styles.lightbox}
                            onClick={() => setSelectedImage(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <button className={styles.closeBtn}>
                                <X size={32} />
                            </button>

                            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                                <img src={selectedImage} alt="Selected" className={styles.lightboxImage} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

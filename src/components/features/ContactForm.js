'use client';

import Button from '../ui/Button';
import styles from '../../app/contact/page.module.css';

export default function ContactForm() {
    return (
        <div className={styles.formCard}>
            <h2 style={{ marginBottom: '1.5rem' }}>Send us a Message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message! We will get back to you shortly."); }}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">Full Name</label>
                    <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
                    <input type="email" id="email" className={styles.input} placeholder="john@example.com" required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea id="message" className={styles.textarea} placeholder="Tell us about your requirements..." required></textarea>
                </div>

                <Button type="submit">
                    Send Message
                </Button>
            </form>
        </div>
    );
}

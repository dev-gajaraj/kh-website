import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import CopyrightYear from '../ui/CopyrightYear';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>

                {/* Company Info */}
                <div className={styles.section}>
                    <h3 className={styles.logoText}>KH Construction</h3>
                    <p className={styles.description}>
                        Building the foundations of a stronger nation. Trusted partner for government infrastructure projects across Maharashtra.
                    </p>
                </div>

                {/* Quick Links */}
                <div className={styles.section}>
                    <h4 className={styles.heading}>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/projects">Our Projects</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className={styles.section}>
                    <h4 className={styles.heading}>Contact Us</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <MapPin size={18} className={styles.icon} />
                            <span>123 Construction House, Shivaji Nagar, Pune, Maharashtra 411005</span>
                        </li>
                        <li>
                            <Phone size={18} className={styles.icon} />
                            <a href="tel:+912012345678">+91 20 1234 5678</a>
                        </li>
                        <li>
                            <Mail size={18} className={styles.icon} />
                            <a href="mailto:info@khprojects.com">info@khprojects.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className="container">
                    <p>&copy; <CopyrightYear /> KH Construction. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

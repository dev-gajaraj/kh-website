'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import Button from '../ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/kh-logo.png"
                        alt="KH Construction Logo"
                        width={176}
                        height={93}
                        className={styles.logoIcon}
                        style={{ height: '32px', width: 'auto' }}
                    />
                    <span className={styles.logoText}>KH Construction</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>Home</Link>
                    <Link href="/about" className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}>About Us</Link>
                    <Link href="/projects" className={`${styles.link} ${isActive('/projects') ? styles.active : ''}`}>Projects</Link>
                    <Link href="/gallery" className={`${styles.link} ${isActive('/gallery') ? styles.active : ''}`}>Gallery</Link>
                    <Link href="/contact" className={`${styles.link} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className={`${styles.mobileLink} ${isActive('/') ? styles.mobileActive : ''}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className={`${styles.mobileLink} ${isActive('/about') ? styles.mobileActive : ''}`}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/projects"
                            onClick={() => setIsOpen(false)}
                            className={`${styles.mobileLink} ${isActive('/projects') ? styles.mobileActive : ''}`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/gallery"
                            onClick={() => setIsOpen(false)}
                            className={`${styles.mobileLink} ${isActive('/gallery') ? styles.mobileActive : ''}`}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className={`${styles.mobileLink} ${isActive('/contact') ? styles.mobileActive : ''}`}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

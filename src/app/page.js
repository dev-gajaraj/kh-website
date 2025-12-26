import Link from 'next/link';
import { ShieldCheck, HardHat, Building2, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import styles from './page.module.css';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className={styles.hero}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.videoBackground}
                    poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop"
                >
                    {/* 
                      To use a local video:
                      1. Place your video file (e.g., hero-video.mp4) in the 'public' folder.
                      2. Change the src below to "/hero-video.mp4"
                    */}
                    <source src="/media/hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className={styles.heroOverlay} />

                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>
                        Building Infrastructure<br />
                        <span style={{ color: 'var(--color-secondary)' }}>That Lasts Generations</span>
                    </h1>
                    <p className={styles.heroText}>
                        Premier B2G construction partner for the Government of Maharashtra. Delivering roads, dams, and public infrastructure with precision and integrity.
                    </p>
                    <div className={styles.heroActions}>
                        <Button href="/projects" variant="secondary">View Our Projects</Button>
                        <Button href="/contact" variant="outline" style={{ color: '#fff', borderColor: '#fff' }}>Contact Us</Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.statsSection}>
                <div className={`container ${styles.statsGrid}`}>
                    <div>
                        <span className={styles.statNumber}>25+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>150+</span>
                        <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>₹500Cr+</span>
                        <span className={styles.statLabel}>Project Value Delivered</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>On-Time Completion</span>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section container">
                <div className={styles.sectionTitle}>
                    <h2>Excellence in Construction</h2>
                    <p>
                        We specialize in large-scale government infrastructure projects, utilizing state-of-the-art technology and sustainable practices.
                    </p>
                </div>

                <div className={styles.servicesGrid}>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}><Building2 color="#fff" /></div>
                        <h3 className={styles.serviceTitle}>Civil Infrastructure</h3>
                        <p className={styles.serviceText}>
                            Construction of government buildings, administrative complexes, and public utility structures designed for longevity.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}><TrendingUp color="#fff" /></div>
                        <h3 className={styles.serviceTitle}>Roads & Highways</h3>
                        <p className={styles.serviceText}>
                            State and National highway projects executed with precision engineering to connect communities across the region.
                        </p>
                    </div>
                    <div className={styles.serviceCard}>
                        <div className={styles.serviceIcon}><ShieldCheck color="#fff" /></div>
                        <h3 className={styles.serviceTitle}>Irrigation & Dams</h3>
                        <p className={styles.serviceText}>
                            Critical water management infrastructure including canals and dams supporting Maharashtra's agricultural growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={`section ${styles.ctaSection}`}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>Ready to Build the Future?</h2>
                    <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                        Partner with a construction company that understands regulatory compliance and quality standards.
                    </p>
                    <Button href="/contact" variant="secondary">Get in Touch</Button>
                </div>
            </section>
        </>
    );
}

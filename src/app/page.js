import Link from 'next/link';
import Image from 'next/image';
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
                        <span className={styles.statNumber}>15+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Projects Completed</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>₹1000 Cr+</span>
                        <span className={styles.statLabel}>Project Value Delivered</span>
                    </div>
                    <div>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Ontime Completion</span>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section container">
                <div className={styles.sectionTitle}>
                    <h2>3 Pillars</h2>
                </div>

                <div className={styles.servicesGrid}>
                    {[
                        {
                            title: 'Civil Infrastructure',
                            description: 'Governmental Buildings, Hostels, Apartments',
                            icon: <Building2 color="#fff" />,
                            bgImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Roads & Bridges',
                            description: 'State and National highway projects executed with precision engineering to connect communities across the region.',
                            icon: <TrendingUp color="#fff" />,
                            bgImg: '/bridge-construction.jpg'
                        },
                        {
                            title: 'Colleges & Hospitals',
                            description: 'Construction of educational and medical institutions.',
                            icon: <ShieldCheck color="#fff" />,
                            bgImg: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop'
                        }
                    ].map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceCardBackground}>
                                <Image
                                    src={service.bgImg}
                                    alt="Background"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceText}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}

        </>
    );
}

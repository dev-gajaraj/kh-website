import styles from './page.module.css';

export const metadata = {
    title: 'About Us | KH Construction',
    description: 'Learn about our history, mission, and commitment to building Maharashtra\'s infrastructure.',
};

export default function About() {
    return (
        <>
            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>About KH Construction</h1>
                    <p className={styles.subtitle}>
                        From humble beginnings to a leading infrastructure developer in Maharashtra.
                    </p>
                </div>
            </div>

            <section className="section container">
                <div className={styles.storySection}>
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Our Story</h2>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                            Founded in 1998, KH Construction started with a single vision: to contribute to the nation's growth through quality infrastructure. Over the past two decades, we have established ourselves as a trusted partner for government bodies across Maharashtra.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
                            We specialize in B2G (Business to Government) projects, handling complex civil engineering challenges with precision. Our portfolio includes state highways, irrigation dams, and administrative buildings.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            As we expand to neighboring states, our core values of integrity, quality, and timely delivery remain our guiding potential.
                        </p>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        Site/Team Photo Placeholder
                    </div>
                </div>
            </section>

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Core Values</h2>
                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <h3 className={styles.valueTitle}>Integrity</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            We believe in transparent dealings and honest execution. Our reputation with government bodies is built on trust.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3 className={styles.valueTitle}>Quality</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            We don't cut corners. Every road, every dam, and every building is built to withstand the test of time.
                        </p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3 className={styles.valueTitle}>Safety</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            The safety of our workforce and the public is paramount. We adhere to strict safety protocols on all sites.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

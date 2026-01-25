import styles from './page.module.css';
import { Star, Users, ShieldCheck, TrendingUp } from 'lucide-react';

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
                            Established in 2012 as a proprietorship by Mr. Khandu Patil, K. H. Construction has been redefining construction excellence ever since. We excel in a diverse range of construction services, including civil work, structural repairs, heritage project reconstruction, restoration projects, furniture work, road construction, and bridges. With boundless creativity and technical expertise, we transform spaces into captivating creations that leave a lasting impact.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Our portfolio showcases excellence in every project. From groundbreaking innovations to meticulous heritage restoration, we infuse each endeavour with an extraordinary touch. At KH Construction, we build more than structures - we forge relationships based on trust, transparency, and open communication. Together, we'll create spaces that inspire, uplift and stand as a testament to our unwavering commitment to excellence.
                        </p>
                    </div>
                    <div className={styles.imagePlaceholder}>
                        Site/Team Photo Placeholder
                    </div>
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center', maxWidth: '800px', margin: '4rem auto 0' }}>
                    <blockquote style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        fontStyle: 'italic',
                        color: 'var(--color-primary)',
                        borderLeft: 'none',
                        position: 'relative',
                        padding: '1rem'
                    }}>
                        "Our commitment to excellence and sustainability is evident through our GRIHA 5-star rated projects."
                    </blockquote>
                </div>

            </section >

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Clients</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center', marginBottom: '4rem' }}>
                    {['Client A', 'Client B', 'Client C', 'Client D', 'Client E'].map((client, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            background: 'var(--color-surface)',
                            borderRadius: '8px',
                            border: '1px solid var(--color-border)',
                            minHeight: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '500'
                        }}>
                            {client} Logo
                        </div>
                    ))}
                </div>
            </section>

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Team</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'repeat(2, 200px)',
                    gap: '1rem'
                }}>
                    {/* Collage Layout Placeholders */}
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div key={index} style={{
                            background: '#e0e0e0',
                            borderRadius: '8px',
                            gridColumn: index === 0 ? 'span 2' : 'span 1',
                            gridRow: index === 0 ? 'span 2' : 'span 1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#666'
                        }}>
                            Team Photo {item}
                        </div>
                    ))}
                </div>
            </section>

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Vision</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
                    <p>
                        To bring together a perfect combination of skilled workforce, updated technologies & streamlined processes quality & reality in working on every single site to achieve our objectives within time limit. Let’s change the way you live!
                    </p>
                </div>
            </section>

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Our Mission</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.1rem' }}>
                        <li>To be leading Construction Company in the market.</li>
                        <li>To become the client most preferred choice by attaining excellence in quality & timely completed value added projects.</li>
                        <li>To provide highest level of service in the construction industry while offering superior craftsmanship to every project we handle.</li>
                        <li>To continually innovate the competence of our team & employee diverse, innovative & result oriented personals, motivate to deliver excellence.</li>
                    </ul>
                </div>
            </section>

            <section className="section container">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Values</h2>
                <div className={styles.valuesGrid}>
                    {[
                        {
                            title: 'Quality Service',
                            description: 'To Enhance the Quality of Service',
                            icon: <Star size={32} color="var(--color-primary)" />
                        },
                        {
                            title: 'Team Excellence',
                            description: 'To Serve with Professionalism, Team Work & Excellence',
                            icon: <Users size={32} color="var(--color-primary)" />
                        },
                        {
                            title: 'Compliance',
                            description: 'To Respect All Environmental Rules, Regulations & Legal Requirements',
                            icon: <ShieldCheck size={32} color="var(--color-primary)" />
                        },
                        {
                            title: 'Client Value',
                            description: 'To Enhance Clients Value',
                            icon: <TrendingUp size={32} color="var(--color-primary)" />
                        }
                    ].map((value, index) => (
                        <div key={index} className={styles.valueCard} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '2rem',
                            gap: '1rem'
                        }}>
                            <div style={{ marginBottom: '0.5rem' }}>
                                {value.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{value.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

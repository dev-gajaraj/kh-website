import styles from './page.module.css';
import Image from 'next/image';
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
                        From humble beginnings to a leading infrastructure developer in India.
                    </p>
                </div>
            </div>

            <section className="section container">
                <div className={styles.storySection}>
                    <div>
                        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our Story</h2>
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

                <div style={{ marginTop: '2rem', textAlign: 'center', maxWidth: '800px', margin: '2rem auto 0' }}>
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
                <h2 className="section-title">Our Expertise</h2>
                <div className={styles.expertiseGrid}>
                    {[
                        { title: 'HIGH RISE TOWERS', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
                        { title: 'MULTI SPECIALITY HOSPITALS', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop' },
                        { title: 'BRIDGES & ROAD CONSTRUCTION', img: '/bridge-construction.jpg' },
                        { title: 'INTERIOR WORK', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop' },
                        { title: 'REPAIRING WORK', img: '/repair-work.jpg' },
                        { title: 'HERITAGE RECONSTRUCTION', img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800&auto=format&fit=crop' }
                    ].map((item, index) => (
                        <div key={index} className={styles.expertiseCard}>
                            <div className={styles.expertiseImageWrapper}>
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className={styles.expertiseCardTitle}>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section container">
                <h2 className="section-title">Our Clients</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'left', marginBottom: '2rem' }}>
                    {['Client A', 'Client B', 'Client C', 'Client D', 'Client E'].map((client, index) => (
                        <div key={index} style={{
                            padding: '1.5rem',
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
                <h2 className="section-title">Our Team</h2>
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
                <h2 className="section-title">Our Vision</h2>
                <div style={{ maxWidth: '800px', fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '0' }}>
                    <p>
                        To bring together a perfect combination of skilled workforce, updated technologies & streamlined processes quality & reality in working on every single site to achieve our objectives within time limit. Let’s change the way you live!
                    </p>
                </div>
            </section>

            <section className="section container">
                <h2 className="section-title">Our Mission</h2>
                <div style={{ maxWidth: '800px' }}>
                    <ul style={{ paddingLeft: '1.5rem', color: 'var(--color-text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.1rem' }}>
                        <li>To be leading Construction Company in the market.</li>
                        <li>To become the client most preferred choice by attaining excellence in quality & timely completed value added projects.</li>
                        <li>To provide highest level of service in the construction industry while offering superior craftsmanship to every project we handle.</li>
                        <li>To continually innovate the competence of our team & employee diverse, innovative & result oriented personals, motivate to deliver excellence.</li>
                    </ul>
                </div>
            </section>

            <section className="section container">
                <h2 className="section-title">Our Values</h2>
                <div className={styles.valuesGrid}>
                    {[
                        {
                            title: 'Quality Service',
                            description: 'To Enhance the Quality of Service',
                            icon: <Star size={32} color="var(--color-primary)" />,
                            bgImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Team Excellence',
                            description: 'To Serve with Professionalism, Team Work & Excellence',
                            icon: <Users size={32} color="var(--color-primary)" />,
                            bgImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Compliance',
                            description: 'To Respect All Environmental Rules, Regulations & Legal Requirements',
                            icon: <ShieldCheck size={32} color="var(--color-primary)" />,
                            bgImg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
                        },
                        {
                            title: 'Client Value',
                            description: 'To Enhance Clients Value',
                            icon: <TrendingUp size={32} color="var(--color-primary)" />,
                            bgImg: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
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
                            <div className={styles.valueCardBackground}>
                                <Image
                                    src={value.bgImg}
                                    alt="Background"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
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

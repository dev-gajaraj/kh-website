import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MapPin, ArrowLeft, Calendar, User, IndianRupee } from 'lucide-react';
import { projects } from '../../../data/projects';
import styles from './page.module.css';

// 1. Generate Static Params for Static Export
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

// 2. Metadata Generator
export async function generateMetadata({ params }) {
    const project = projects.find((p) => p.id === params.id);
    if (!project) return { title: 'Project Not Found' };

    return {
        title: `${project.title} | KH Construction`,
        description: project.description,
    };
}

// 3. Page Component
export default function ProjectDetails({ params }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        return notFound();
    }

    // Safety check for images
    const mainImage = project.images && project.images.length > 0 ? project.images[0] : null;

    return (
        <>
            <div className={styles.hero}>
                {mainImage && (
                    <Image
                        src={mainImage}
                        alt={project.title}
                        fill
                        priority
                        className={styles.backgroundImage}
                    />
                )}
                <div className={styles.heroOverlay} />

                <div className={`container ${styles.heroContent}`}>
                    <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#fff', marginBottom: '2rem', opacity: 0.8 }}>
                        <ArrowLeft size={20} /> Back to Projects
                    </Link>
                    <div>
                        <span className={styles.badge}>{project.category}</span>
                        <h1 className={styles.title}>{project.title}</h1>
                        <div className={styles.location}>
                            <MapPin size={24} /> {project.location}
                        </div>
                    </div>
                </div>
            </div>

            <div className={`section container ${styles.grid}`}>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    <h2>Project Overview</h2>
                    <p>{project.description}</p>



                    {project.images && project.images.length > 0 && (
                        <>
                            <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem' }}>Project Gallery</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
                                {project.images.map((img, index) => (
                                    <div key={index} style={{ position: 'relative', height: '500px', borderRadius: '0.75rem', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                                        <Image
                                            src={img}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Sidebar stats */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Project Details</h3>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Location</span>
                        <div className={styles.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={18} /> {project.location}
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Client</span>
                        <div className={styles.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <User size={18} /> {project.client}
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Project Value</span>
                        <div className={styles.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <IndianRupee size={18} /> {project.value}
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Completion Year</span>
                        <div className={styles.value} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={18} /> {project.completionYear}
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.label}>Status</span>
                        <div className={styles.value} style={{ color: project.status === 'Completed' ? '#059669' : '#D97706' }}>
                            {project.status}
                        </div>
                    </div>
                </aside>

            </div>
        </>
    );
}

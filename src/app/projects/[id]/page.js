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
        notFound();
    }

    return (
        <>
            <div className={styles.hero}>
                <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    priority
                    className={styles.backgroundImage}
                />
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

                    <h2>The Challenge</h2>
                    <p>{project.challenge}</p>

                    <h2>Our Solution</h2>
                    <p>{project.solution}</p>
                </div>

                {/* Sidebar stats */}
                <aside className={styles.sidebar}>
                    <h3 className={styles.sidebarTitle}>Project Details</h3>

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

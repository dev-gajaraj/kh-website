'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { projects } from '../../data/projects';
import styles from '../../app/projects/page.module.css';

export default function ProjectList() {
    // Derive unique categories from projects
    const uniqueCategories = ['All', ...new Set(projects.map(project => project.category))];

    const [activeCategory, setActiveCategory] = useState('All');
    const [activeStatus, setActiveStatus] = useState('All');

    const filteredProjects = projects.filter(project => {
        const categoryMatch = activeCategory === 'All' || project.category === activeCategory;
        const statusMatch = activeStatus === 'All' || project.status === activeStatus;
        return categoryMatch && statusMatch;
    });

    const toggleStatus = (status) => {
        if (activeStatus === status) {
            setActiveStatus('All');
        } else {
            setActiveStatus(status);
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setActiveStatus('All');
        }
    };

    return (
        <>
            <div className={styles.filterBar} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                {uniqueCategories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}

                <div style={{ width: '1px', height: '24px', backgroundColor: '#E5E7EB', margin: '0 1rem' }}></div>

                {['Completed', 'Ongoing'].map((status) => (
                    <button
                        key={status}
                        className={`${styles.filterButton} ${activeStatus === status ? styles.activeFilter : ''}`}
                        onClick={() => toggleStatus(status)}
                    >
                        {status}
                    </button>
                ))}
            </div>

            <div className={styles.projectGrid}>
                {filteredProjects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className={styles.projectCard}>
                        <div className={styles.imageArea}>
                            <Image
                                src={project.images[0]}
                                alt={project.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div style={{ position: 'absolute', top: '10px', right: '10px', background: project.status === 'Completed' ? '#10B981' : '#F59E0B', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600' }}>
                                {project.status}
                            </div>
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.categoryTag}>{project.category}</span>
                            <h3 className={styles.projectTitle} style={{ minHeight: '60px' }}>{project.title}</h3>

                            <div className={styles.projectMeta} style={{ display: 'grid', gap: '0.5rem', fontSize: '0.9rem' }}>
                                <div className={styles.metaRow} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span className={styles.metaLabel} style={{ color: 'var(--color-text-muted)' }}>Location:</span>
                                    <span className={styles.metaValue} style={{ fontWeight: '500', textAlign: 'right' }}>{project.location}</span>
                                </div>
                                <div className={styles.metaRow} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span className={styles.metaLabel} style={{ color: 'var(--color-text-muted)' }}>Client:</span>
                                    <span className={styles.metaValue} style={{ fontWeight: '500', textAlign: 'right' }}>{project.client}</span>
                                </div>
                                <div className={styles.metaRow} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span className={styles.metaLabel} style={{ color: 'var(--color-text-muted)' }}>Period:</span>
                                    <span className={styles.metaValue} style={{ fontWeight: '500' }}>{project.period}</span>
                                </div>
                                <div className={styles.metaRow} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span className={styles.metaLabel} style={{ color: 'var(--color-text-muted)' }}>Year:</span>
                                    <span className={styles.metaValue} style={{ fontWeight: '500' }}>{project.completionYear}</span>
                                </div>
                                <div className={styles.metaRow} style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--color-border)', paddingTop: '0.5rem', marginTop: '0.5rem' }}>
                                    <span className={styles.metaLabel} style={{ fontWeight: '600' }}>Value:</span>
                                    <span className={styles.metaValue} style={{ fontWeight: '700', color: 'var(--color-primary)' }}>{project.value}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

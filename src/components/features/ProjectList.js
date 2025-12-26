'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { projects } from '../../data/projects';
import styles from '../../app/projects/page.module.css';

const categories = ['All', 'Roads', 'Infrastructure', 'Buildings', 'Irrigation'];

export default function ProjectList() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <>
            <div className={styles.filterBar}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.filterButton} ${activeCategory === category ? styles.activeFilter : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
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
                        </div>
                        <div className={styles.cardContent}>
                            <span className={styles.categoryTag}>{project.category}</span>
                            <h3 className={styles.projectTitle}>{project.title}</h3>

                            <div className={styles.projectMeta}>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>Client:</span>
                                    <span className={styles.metaValue}>{project.client}</span>
                                </div>
                                <div className={styles.metaRow}>
                                    <span className={styles.metaLabel}>Value:</span>
                                    <span className={styles.metaValue}>{project.value}</span>
                                </div>
                            </div>

                            <div className={styles.projectLocation} style={{ marginTop: 'auto' }}>
                                <MapPin size={16} />
                                {project.location}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

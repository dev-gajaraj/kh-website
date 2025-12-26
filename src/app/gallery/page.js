import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import styles from './page.module.css';

export const metadata = {
    title: 'Gallery | KH Construction',
    description: 'A visual showcase of our infrastructure, road, and building projects across Maharashtra.',
};

export default function GalleryPage() {
    // Aggregate all images into a single list with metadata
    const allImages = projects.flatMap(project =>
        project.images.map((imgUrl, index) => ({
            id: `${project.id}-${index}`,
            url: imgUrl,
            projectTitle: project.title,
            projectId: project.id,
            category: project.category
        }))
    );

    return (
        <main className="section container">
            <div className={styles.galleryHeader}>
                <h1 className={styles.galleryTitle}>Project Gallery</h1>
                <p className={styles.gallerySubtitle}>
                    Showcasing excellence in construction across infrastructure, transportation, and urban development projects.
                </p>
            </div>

            <div className={styles.galleryGrid}>
                {allImages.map((image) => (
                    <Link href={`/projects/${image.projectId}`} key={image.id} className={styles.imageCard}>
                        <Image
                            src={image.url}
                            alt={`${image.projectTitle} - Gallery Image`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className={styles.imageOverlay}>
                            <h3 className={styles.projectTitle}>{image.projectTitle}</h3>
                            <span className={styles.projectCategory}>{image.category}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}

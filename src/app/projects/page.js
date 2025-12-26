import ProjectList from '../../components/features/ProjectList';

export const metadata = {
    title: 'Our Projects | KH Construction',
    description: 'Explore our portfolio of government infrastructure projects.',
};

export default function Projects() {
    return (
        <div className="section container">
            <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Our Projects</h1>
            <p style={{ maxWidth: '600px', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
                A showcase of our commitment to nation-building through superior engineering and execution.
            </p>

            <ProjectList />
        </div>
    );
}

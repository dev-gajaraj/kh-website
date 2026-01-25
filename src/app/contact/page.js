import styles from './page.module.css';

export const metadata = {
    title: 'Contact Us | KH Construction',
    description: 'Get in touch with KH Construction for infrastructure development inquiries.',
};

export default function Contact() {
    return (
        <div className="section container">
            <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Our Offices</h1>
            <p style={{ maxWidth: '600px', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
                Interested in partnering with us? Reach out to our team regarding new tenders, joint ventures, or general inquiries.
            </p>

            <div className={styles.contactGrid}>

                {/* Contact Info */}
                <div className={styles.infoCard}>
                    <div className={styles.infoItem}>
                        <h3>Headquarters</h3>
                        <p>123 Construction House, Model Colony<br />Shivaji Nagar, Pune, Maharashtra 411005</p>
                    </div>

                    <div className={styles.infoItem}>
                        <h3>Regional Offices</h3>

                        <div style={{ marginBottom: '1.25rem' }}>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Bangalore</h4>
                            <p>#88, Tech Park Road, Whitefield<br />Bangalore, Karnataka 560066</p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>Chennai</h4>
                            <p>#42, Anna Salai, Guindy<br />Chennai, Tamil Nadu 600032</p>
                        </div>
                    </div>

                    <div style={{ marginTop: '2rem' }}>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>Phone:</strong>{' '}
                            <a href="tel:+912012345678" className={styles.contactLink}>+91 20 1234 5678</a>
                            <span style={{ margin: '0 0.5rem' }}>|</span>
                            <a href="https://wa.me/912012345678" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                Chat on WhatsApp
                            </a>
                        </p>
                        <p>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:tenders@khprojects.com" className={styles.contactLink}>tenders@khprojects.com</a>
                        </p>
                    </div>
                </div>

                {/* Map Card */}
                <div className={styles.mapCard}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549073.4!2d74!3d19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcfc41e9c9cd6f9%3A0x1b17175cd207b55d!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className={styles.mapFrame}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Locations Map"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
    const Component = href ? Link : 'button';

    return (
        <Component
            href={href}
            className={`${styles.button} ${styles[variant]} ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
}

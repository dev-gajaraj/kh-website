import { Manrope } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    display: 'swap',
});

export const metadata = {
    title: 'KH Construction | Excellence in Construction',
    description: 'Premier B2G Construction Company serving Maharashtra and beyond. Specializing in infrastructure, government projects, and civil engineering.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={manrope.variable}>
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}

import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#F5F0EB]">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

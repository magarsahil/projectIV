import { useState, useEffect, useRef } from 'react';
import { Search, User, Heart, ShoppingCart, Store, LogOut } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'About Us', href: '/about' },
];

export default function Navbar() {
    const [accountOpen, setAccountOpen] = useState(false);
    const accountRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (accountRef.current && !accountRef.current.contains(e.target)) {
                setAccountOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0 flex items-center gap-2">
                        <img src="/images/logo.svg" alt="MeroBazar" className="h-12 w-auto" />
                        <span className="text-2xl font-bold tracking-tight">
                            <span className="text-[#1B2A4A]">Mero</span>
                            <span className="text-[#FF6B35]">Bazar</span>
                        </span>
                    </a>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${
                                    link.active
                                        ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
                                        : 'text-gray-500 hover:text-gray-900'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Search & Icons */}
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2.5 w-64">
                            <Search size={18} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Search for products..."
                                className="bg-transparent border-none outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
                            />
                        </div>

                        {/* Icon Buttons */}
                        <div className="flex items-center gap-8">
                            <a href="/seller/register" className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-gray-900 transition-colors">
                                <Store size={20} />
                                <span className="text-[10px] font-medium">Become a Seller</span>
                            </a>
                            <div className="relative" ref={accountRef}>
                                <button onClick={() => setAccountOpen(!accountOpen)} className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-gray-900 transition-colors">
                                    <User size={20} />
                                    <span className="text-[10px] font-medium">Account</span>
                                </button>
                                {accountOpen && (
                                    <div className="absolute right-0 top-full mt-3 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                                        <a href="/login" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                                            <User size={16} /> Login
                                        </a>
                                        <a href="/register" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                                            <User size={16} /> Signup
                                        </a>
                                        <hr className="my-1 border-gray-100" />
                                        <a href="/orders" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                                            My Orders
                                        </a>
                                        <a href="/account" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                                            My Account
                                        </a>
                                        <a href="/help" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50">
                                            Help Center
                                        </a>
                                        <hr className="my-1 border-gray-100" />
                                        <a href="/logout" className="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50">
                                            <LogOut size={16} /> Logout
                                        </a>
                                    </div>
                                )}
                            </div>
                            <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-gray-900 transition-colors">
                                <Heart size={20} />
                                <span className="text-[10px] font-medium">Favourites</span>
                            </button>
                            <button className="flex flex-col items-center gap-0.5 text-gray-600 hover:text-gray-900 transition-colors relative">
                                <div className="relative">
                                    <ShoppingCart size={20} />
                                    <span className="absolute -top-1.5 -right-2 bg-amber-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        2
                                    </span>
                                </div>
                                <span className="text-[10px] font-medium">Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

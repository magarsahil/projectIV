import { ArrowRight, Star, Heart } from 'lucide-react';

const products = [
    {
        name: 'Running Shoes Pro',
        price: '129',
        cents: '99',
        description: 'Lightweight performance running shoes',
        rating: 4.5,
        reviews: 87,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    },
    {
        name: 'Smart Watch Series 5',
        price: '249',
        cents: '00',
        description: 'Health tracking & notifications',
        rating: 4.7,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    },
    {
        name: 'Wireless Charger Pad',
        price: '35',
        cents: '99',
        description: 'Fast charging compatible',
        rating: 4.3,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
    },
    {
        name: 'Laptop Backpack',
        price: '67',
        cents: '50',
        description: 'Water-resistant, 15.6 inch compartment',
        rating: 4.6,
        reviews: 124,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    },
    {
        name: 'Sunglasses UV400',
        price: '45',
        cents: '00',
        description: 'Polarized lenses, lightweight frame',
        rating: 4.4,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    },
    {
        name: 'Portable Speaker',
        price: '79',
        cents: '99',
        description: 'Bluetooth 5.0, 12hr battery life',
        rating: 4.8,
        reviews: 176,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    },
];

const doubledProducts = [...products, ...products];

function StarRating({ rating, reviews }) {
    return (
        <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        size={12}
                        className={
                            star <= Math.floor(rating)
                                ? 'fill-amber-400 text-amber-400'
                                : star - 0.5 <= rating
                                ? 'fill-amber-400/50 text-amber-400'
                                : 'text-gray-300'
                        }
                    />
                ))}
            </div>
            <span className="text-xs text-gray-400">({reviews})</span>
        </div>
    );
}

export default function RecentlyViewed() {
    return (
        <section className="bg-white py-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-amber-700 text-sm font-semibold tracking-widest uppercase mb-2">
                            Recently Viewed
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900">Continue Browsing</h2>
                    </div>
                    <a
                        href="/shop"
                        className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        View history
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>

            {/* Slider - Scrolls Right */}
            <div className="overflow-hidden">
                <div className="flex gap-5 w-max animate-scroll-right">
                    {doubledProducts.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300 w-[260px] flex-shrink-0"
                        >
                            {/* Image Area */}
                            <div className="relative bg-[#f5f5f5] flex items-center justify-center aspect-square overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors">
                                    <Heart size={18} />
                                </button>
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <div className="flex items-start justify-between gap-2 mb-1">
                                    <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                                        {product.name}
                                    </h3>
                                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap">
                                        ${product.price}<sup className="text-[10px] font-normal">{product.cents}</sup>
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 mb-2 line-clamp-1">
                                    {product.description}
                                </p>
                                <StarRating rating={product.rating} reviews={product.reviews} />
                                <button className="mt-3 border border-gray-200 text-gray-500 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-gray-50 hover:text-gray-700 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-right {
                    animation: scrollRight 25s linear infinite;
                }
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Mobile View All Link */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="mt-8 text-center sm:hidden">
                    <a
                        href="/shop"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                    >
                        View all products
                        <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

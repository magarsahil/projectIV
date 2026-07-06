import { ArrowRight, Star, Heart } from 'lucide-react';

const products = [
    {
        name: 'Ceramic Coffee Mug',
        price: '18',
        cents: '99',
        description: 'Handcrafted artisan mug',
        rating: 4.5,
        reviews: 94,
        image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop',
    },
    {
        name: 'Desk Organizer Set',
        price: '42',
        cents: '00',
        description: 'Bamboo wood, 3 pieces',
        rating: 4.6,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop',
    },
    {
        name: 'Plant Growth Light',
        price: '29',
        cents: '99',
        description: 'USB powered, full spectrum',
        rating: 4.3,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop',
    },
    {
        name: 'Bluetooth Keyboard',
        price: '55',
        cents: '00',
        description: 'Slim wireless, rechargeable',
        rating: 4.7,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
    },
    {
        name: 'Aromatherapy Diffuser',
        price: '38',
        cents: '50',
        description: 'Ultrasonic, 7 LED colors',
        rating: 4.4,
        reviews: 143,
        image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?w=400&h=400&fit=crop',
    },
    {
        name: 'Cork Notebook',
        price: '22',
        cents: '00',
        description: 'Recycled paper, 200 pages',
        rating: 4.8,
        reviews: 76,
        image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=400&fit=crop',
    },
    {
        name: 'Cable Management Box',
        price: '19',
        cents: '99',
        description: 'Hide messy cables',
        rating: 4.2,
        reviews: 201,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=400&fit=crop',
    },
    {
        name: 'LED Desk Lamp',
        price: '49',
        cents: '99',
        description: 'Touch dimmer, USB port',
        rating: 4.6,
        reviews: 158,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=400&fit=crop',
    },
    {
        name: 'Phone Stand Holder',
        price: '15',
        cents: '99',
        description: 'Adjustable aluminum',
        rating: 4.5,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
    },
    {
        name: 'Mouse Pad XL',
        price: '12',
        cents: '99',
        description: 'Non-slip rubber base',
        rating: 4.3,
        reviews: 227,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    },
];

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

export default function JustForYou() {
    return (
        <section className="bg-white py-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-amber-700 text-sm font-semibold tracking-widest uppercase mb-2">
                            Just For You
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900">Curated Picks</h2>
                    </div>
                    <a
                        href="/shop"
                        className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        View all
                        <ArrowRight size={18} />
                    </a>
                </div>

                {/* Product Grid - 5 columns */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
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
                            <div className="p-3">
                                <div className="flex items-start justify-between gap-1 mb-1">
                                    <h3 className="text-xs font-semibold text-gray-900 leading-tight line-clamp-1">
                                        {product.name}
                                    </h3>
                                    <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
                                        ${product.price}<sup className="text-[9px] font-normal">{product.cents}</sup>
                                    </span>
                                </div>
                                <p className="text-[11px] text-gray-400 mb-1.5 line-clamp-1">
                                    {product.description}
                                </p>
                                <StarRating rating={product.rating} reviews={product.reviews} />
                                <button className="mt-2 border border-gray-200 text-gray-500 text-[11px] font-medium px-2.5 py-1 rounded hover:bg-gray-50 hover:text-gray-700 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All Link */}
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

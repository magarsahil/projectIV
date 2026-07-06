import { ArrowRight, Shirt, Monitor, Sofa, Sparkles, ChefHat, Trophy, Gift } from 'lucide-react';

const categories = [
    {
        name: 'Fashion',
        icon: Shirt,
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop',
        color: 'from-pink-200 to-rose-100',
    },
    {
        name: 'Electronics',
        icon: Monitor,
        image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=400&fit=crop',
        color: 'from-blue-200 to-indigo-100',
    },
    {
        name: 'Home & Living',
        icon: Sofa,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
        color: 'from-amber-200 to-orange-100',
    },
    {
        name: 'Beauty',
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
        color: 'from-purple-200 to-pink-100',
    },
    {
        name: 'Kitchen',
        icon: ChefHat,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        color: 'from-green-200 to-emerald-100',
    },
    {
        name: 'Sports',
        icon: Trophy,
        image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=400&h=400&fit=crop',
        color: 'from-red-200 to-rose-100',
    },
    {
        name: 'Gifts & More',
        icon: Gift,
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
        color: 'from-yellow-200 to-amber-100',
    },
];

export default function Categories() {
    return (
        <section className="bg-[#F5F0EB] py-12 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-amber-700 text-sm font-semibold tracking-widest uppercase mb-2">
                            Browse Top Categories
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
                    </div>
                    <a
                        href="/categories"
                        className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        View all categories
                        <ArrowRight size={18} />
                    </a>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {categories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <a
                                key={index}
                                href={`/categories/${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Label */}
                                <div className="p-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Icon size={16} className="text-gray-600" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-900 truncate">{category.name}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile View All Link */}
                <div className="mt-6 text-center sm:hidden">
                    <a
                        href="/categories"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                    >
                        View all categories
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}

import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        tagline: 'Discover. Shop. Enjoy.',
        heading: 'Everything You Need, All in One Place.',
        subtext: 'From fashion to tech, home to beauty — explore products that fit your lifestyle and budget.',
        cta: 'Shop Now',
        ctaHref: '/shop',
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop',
        accent: 'amber-700',
    },
    {
        tagline: 'Limited Time Offer',
        heading: 'Summer Collection — Up to 40% Off',
        subtext: 'Discover our hottest deals this season. Fashion, accessories, and more at unbeatable prices.',
        cta: 'Shop the Sale',
        ctaHref: '/deals',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
        accent: 'rose-600',
    },
    {
        tagline: 'Just Dropped',
        heading: 'New Arrivals Are Here',
        subtext: 'Be the first to explore fresh styles and trending picks. New inventory weekly.',
        cta: 'Explore Now',
        ctaHref: '/new-arrivals',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop',
        accent: 'emerald-600',
    },
    {
        tagline: 'Curated For You',
        heading: 'Elevate Your Lifestyle',
        subtext: 'Premium picks for every moment — home, beauty, fashion, and beyond.',
        cta: 'Discover More',
        ctaHref: '/categories',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
        accent: 'violet-600',
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    const goTo = useCallback((index) => {
        setCurrent(index);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [isPaused, next]);

    return (
        <section
            className="bg-[#F5F0EB] py-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden bg-[#EDE6DD]">
                    {/* Slides Container */}
                    <div className="relative min-h-[420px] lg:min-h-[460px]">
                        {slides.map((s, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 transition-opacity duration-700 ease-in-out ${
                                    index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                }`}
                            >
                                {/* Left Content */}
                                <div className="flex flex-col justify-center px-8 py-10 lg:px-14">
                                    <p className={`text-sm font-semibold tracking-widest uppercase mb-3 transition-all duration-500 ${
                                        index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`} style={{ color: s.accent === 'amber-700' ? '#b45309' : s.accent === 'rose-600' ? '#e11d48' : s.accent === 'emerald-600' ? '#059669' : '#7c3aed' }}>
                                        {s.tagline}
                                    </p>
                                    <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 font-serif transition-all duration-500 delay-75 ${
                                        index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}>
                                        {s.heading}
                                    </h1>
                                    <p className={`text-gray-600 text-base mb-7 max-w-md leading-relaxed transition-all duration-500 delay-150 ${
                                        index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}>
                                        {s.subtext}
                                    </p>

                                    {/* CTAs */}
                                    <div className={`flex items-center gap-4 transition-all duration-500 delay-200 ${
                                        index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}>
                                        <a
                                            href={s.ctaHref}
                                            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                        >
                                            {s.cta}
                                            <ArrowRight size={16} />
                                        </a>
                                        <a
                                            href="/categories"
                                            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all"
                                        >
                                            Explore Categories
                                        </a>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="relative hidden lg:block">
                                    <img
                                        src={s.image}
                                        alt={s.heading}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Floating Collection Card */}
                                    <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-3 shadow-xl max-w-[180px]">
                                        <p className="text-xs text-gray-500 mb-1">Summer Collection</p>
                                        <p className="text-amber-600 font-bold text-sm mb-2">Up to 40% off</p>
                                        <div className="relative">
                                            <img
                                                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop"
                                                alt="Brown bag"
                                                className="w-full h-24 object-cover rounded-xl"
                                            />
                                            <button className="absolute -bottom-2 -right-2 bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg text-sm">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Arrow Navigation */}
                        <button
                            onClick={prev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index === current
                                            ? 'bg-gray-900 w-7'
                                            : 'bg-gray-400/50 hover:bg-gray-400 w-2'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

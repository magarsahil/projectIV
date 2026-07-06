import MainLayout from '@/Layouts/MainLayout';
import Hero from '@/Components/Hero';
import Categories from '@/Components/Categories';
import FeaturedProducts from '@/Components/FeaturedProducts';
import RecentlyViewed from '@/Components/RecentlyViewed';
import JustForYou from '@/Components/JustForYou';
import ServicesToHelp from '@/Components/ServicesToHelp';

export default function Welcome() {
    return (
        <MainLayout>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <RecentlyViewed />
            <JustForYou />
            <ServicesToHelp />
        </MainLayout>
    );
}

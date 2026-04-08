import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import FilterSidebar from '@/components/FilterSidebar';
import CategoryPills from '@/components/CategoryPills';
import SortBar from '@/components/SortBar';
import ShopProductGrid from '@/components/ShopProductGrid';
import { categories, getProducts, getCategoryBySlug } from '@/lib/data';
import { Suspense } from 'react';

export async function generateStaticParams() {
    return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }) {
    const { category } = await params;
    const cat = getCategoryBySlug(category);
    if (!cat) return {};
    return {
        title: `${cat.label} — Sweet Irene's Boutique`,
        description: cat.description,
    };
}

export default async function CategoryShopPage({ params, searchParams }) {
    const { category } = await params;
    const resolvedSearchParams = await searchParams;
    const sortValue = resolvedSearchParams?.sort || null;

    const activeCategory = getCategoryBySlug(category);
    if (!activeCategory) notFound();

    const filteredProducts = getProducts({ category, sort: sortValue });

    const breadcrumbItems = [
        { label: 'Home', href: '/home' },
        { label: 'Shop', href: '/shop' },
        { label: activeCategory.label },
    ];

    return (
        <>
            <Header />

            <main className="shop-page">
                {/* Breadcrumb */}
                <div className="shop-breadcrumb-row">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                {/* Page header */}
                <div className="shop-header">
                    <h1 className="shop-heading">{activeCategory.label}</h1>
                    <p className="shop-subheading">{activeCategory.description}</p>
                </div>

                {/* Category pill tabs */}
                <Suspense>
                    <CategoryPills
                        categories={categories}
                        activeSlug={category}
                    />
                </Suspense>

                {/* Main layout: sidebar + product area */}
                <div className="shop-layout">
                    {/* Filter sidebar */}
                    <Suspense>
                        <FilterSidebar
                            categories={categories}
                            activeSlug={category}
                        />
                    </Suspense>

                    {/* Product area */}
                    <div className="shop-main">
                        {/* Sort bar */}
                        <Suspense>
                            <SortBar
                                count={filteredProducts.length}
                                activeCategory={category}
                                sortValue={sortValue}
                                categoryLabel={activeCategory.label}
                            />
                        </Suspense>

                        {/* Product grid */}
                        {filteredProducts.length > 0 ? (
                            <ShopProductGrid products={filteredProducts} />
                        ) : (
                            <div className="shop-empty">
                                <p className="shop-empty-text">
                                    No pieces in this category yet.
                                </p>
                                <Link href="/shop" className="link-subtle">
                                    View All Items
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

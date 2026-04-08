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

export const metadata = {
    title: "Shop — Sweet Irene's Boutique",
    description:
        "Browse our curated collection of women's apparel, baby & nursery essentials, and home decor.",
};

export default async function ShopPage({ searchParams }) {
    const params = await searchParams;
    const categorySlug = params?.category || null;
    const sortValue = params?.sort || null;

    const activeCategory = getCategoryBySlug(categorySlug);

    const filteredProducts = getProducts({
        category: categorySlug,
        sort: sortValue,
    });

    const pageTitle = activeCategory ? activeCategory.label : 'The Collection';

    const breadcrumbItems = [
        { label: 'Home', href: '/home' },
        activeCategory
            ? { label: 'Shop', href: '/shop' }
            : { label: 'Shop' },
        ...(activeCategory ? [{ label: activeCategory.label }] : []),
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
                    <h1 className="shop-heading">{pageTitle}</h1>
                    <p className="shop-subheading">A dialogue between form and texture</p>
                </div>

                {/* Category pill tabs */}
                <Suspense>
                    <CategoryPills
                        categories={categories}
                        activeSlug={categorySlug}
                    />
                </Suspense>

                {/* Main layout: sidebar + product area */}
                <div className="shop-layout">
                    {/* Filter sidebar */}
                    <Suspense>
                        <FilterSidebar
                            categories={categories}
                            activeSlug={categorySlug}
                        />
                    </Suspense>

                    {/* Product area */}
                    <div className="shop-main">
                        {/* Sort bar */}
                        <Suspense>
                            <SortBar
                                count={filteredProducts.length}
                                activeCategory={categorySlug}
                                sortValue={sortValue}
                                categoryLabel={activeCategory?.label}
                            />
                        </Suspense>

                        {/* Product grid */}
                        {filteredProducts.length > 0 ? (
                            <ShopProductGrid products={filteredProducts} />
                        ) : (
                            <div className="shop-empty">
                                <p className="shop-empty-text">No pieces match your selection.</p>
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

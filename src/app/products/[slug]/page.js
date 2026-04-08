import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ProductDetailOptions from '@/components/ProductDetailOptions';
import { products, getCategoryBySlug, getProductBySlug, formatPrice } from '@/lib/data';

export async function generateStaticParams() {
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};
    return {
        title: `${product.title} — Sweet Irene's Boutique`,
        description: product.description,
    };
}

export default async function ProductDetailPage({ params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) notFound();

    const category = getCategoryBySlug(product.category);

    const breadcrumbItems = [
        { label: 'Home', href: '/home' },
        { label: 'Shop', href: '/shop' },
        ...(category
            ? [{ label: category.label, href: `/shop/${category.slug}` }]
            : []),
        { label: product.title },
    ];

    return (
        <>
            <Header />

            <main className="pdp-page">
                {/* Breadcrumb */}
                <div className="shop-breadcrumb-row">
                    <Breadcrumb items={breadcrumbItems} />
                </div>

                {/* Two-column product detail layout */}
                <div className="pdp-layout">
                    {/* Left: Image */}
                    <div className="pdp-image-col">
                        <div className="pdp-image-box">
                            {product.badge && (
                                <span className="product-badge">{product.badge}</span>
                            )}
                            <Image
                                src={product.img}
                                alt={product.alt}
                                fill
                                sizes="(max-width: 900px) 100vw, 50vw"
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                    </div>

                    {/* Right: Details */}
                    <div className="pdp-details-col">
                        {category && (
                            <p className="pdp-category-label">{category.label}</p>
                        )}

                        <h1 className="pdp-title">{product.title}</h1>

                        <p className="pdp-price">{formatPrice(product.price)}</p>

                        <p className="pdp-description">{product.description}</p>

                        {/* Interactive option selectors + Add to Cart */}
                        <ProductDetailOptions product={product} />
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/lib/data';

/**
 * ShopProductGrid — product grid for /shop and /shop/[category].
 *
 * Each card navigates to the full product detail page (/products/[slug]).
 * The hover bar shows a quick "Add to Cart" button that fires a mockup alert.
 *
 * @param {{ products: object[] }} props
 */
export default function ShopProductGrid({ products }) {
    function handleAddToCart(e, productTitle) {
        // Prevent the parent link from navigating when the button is clicked
        e.preventDefault();
        e.stopPropagation();
        alert('E-Commerce functionality coming soon');
    }

    return (
        <div className="product-grid">
            {products.map((product) => (
                <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="shop-product-card"
                >
                    {product.badge && (
                        <span className="product-badge">{product.badge}</span>
                    )}
                    <div className="product-img-box">
                        <Image
                            src={product.img}
                            alt={product.alt}
                            className="img-placeholder"
                            fill
                            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="shop-card-hover-bar">
                            <button
                                className="shop-card-atc-btn"
                                onClick={(e) => handleAddToCart(e, product.title)}
                                aria-label={`Add ${product.title} to cart`}
                            >
                                Add to Cart
                            </button>
                            <span className="shop-card-view-link">View Product →</span>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="product-title">{product.title}</p>
                        <p className="product-price">{formatPrice(product.price)}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

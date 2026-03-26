'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function FeaturedCollection({ products }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.title}
                        imageSrc={product.img}
                        imageAlt={product.alt}
                        title={product.title}
                        price={product.price}
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
            </div>
            <ProductModal
                product={selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </>
    );
}

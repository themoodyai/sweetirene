'use client';

import { useState } from 'react';

/**
 * ProductDetailOptions — client component for the product detail page.
 *
 * Renders size pills, color pills (where applicable), and the Add to Cart button.
 * Owns selected-option state; Add to Cart fires an alert (mockup behaviour).
 *
 * @param {{ product: object }} props
 */
export default function ProductDetailOptions({ product }) {
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    function handleAddToCart() {
        alert('E-Commerce functionality coming soon');
    }

    return (
        <div className="pdp-options">
            {/* Size selector */}
            {product.sizes && product.sizes.length > 0 && (
                <div className="pdp-option-group">
                    <p className="pdp-option-label">
                        Size
                        {selectedSize && (
                            <span className="pdp-option-selected-value">{selectedSize}</span>
                        )}
                    </p>
                    <div className="pdp-pills">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                className={`pdp-pill${selectedSize === size ? ' pdp-pill--active' : ''}`}
                                onClick={() =>
                                    setSelectedSize(selectedSize === size ? null : size)
                                }
                                aria-pressed={selectedSize === size}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Color selector */}
            {product.colors && product.colors.length > 0 && (
                <div className="pdp-option-group">
                    <p className="pdp-option-label">
                        Color
                        {selectedColor && (
                            <span className="pdp-option-selected-value">{selectedColor}</span>
                        )}
                    </p>
                    <div className="pdp-pills">
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                className={`pdp-pill${selectedColor === color ? ' pdp-pill--active' : ''}`}
                                onClick={() =>
                                    setSelectedColor(selectedColor === color ? null : color)
                                }
                                aria-pressed={selectedColor === color}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Add to Cart */}
            <button className="pdp-add-to-cart btn-primary" onClick={handleAddToCart}>
                Add to Cart
            </button>

            {/* Shipping note */}
            <p className="pdp-shipping-note">Free shipping on orders over $75</p>
        </div>
    );
}

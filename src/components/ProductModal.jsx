'use client';

import Image from 'next/image';

export default function ProductModal({ product, onClose }) {
    if (!product) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    &times;
                </button>
                <div className="modal-img-box">
                    <Image
                        src={product.img}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 600px) 100vw, 260px"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="modal-details">
                    <h3>{product.title}</h3>
                    <p className="modal-price">{product.price}</p>
                    <p className="modal-description">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

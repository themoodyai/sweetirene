import Image from 'next/image';

export default function ProductCard({ imageSrc, imageAlt, title, price, onClick }) {
    return (
        <div className="product-card" onClick={onClick}>
            <div className="product-img-box">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="img-placeholder"
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className="product-info">
                <p className="product-title">{title}</p>
                <p className="product-price">{price}</p>
            </div>
        </div>
    );
}

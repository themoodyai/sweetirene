import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCollection from '@/components/FeaturedCollection';
import NewsletterForm from '@/components/NewsletterForm';
import Image from 'next/image';
import { Star } from '@phosphor-icons/react/dist/ssr';
import { categories as allCategories, products as allProducts, formatPrice } from '@/lib/data';

export const metadata = {
    title: "Sweet Irene's Boutique - Home",
    description: "Curated goods for you, your little one, and your home.",
};

// Map data-layer categories to the shape the home page needs
const categories = allCategories.map((cat) => ({
    href: `/shop/${cat.slug}`,
    img: cat.img,
    label: cat.label,
}));

// Map data-layer products to the shape FeaturedCollection / ProductModal expects
const products = allProducts.map((p) => ({
    img: p.img,
    alt: p.alt,
    title: p.title,
    price: formatPrice(p.price),
    description: p.description,
}));

export default function HomePage() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="hero-section hero-centered">
                <Image
                    src="/images/hero.jpeg"
                    alt="Sweet Irene's Boutique"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority
                />
                <div className="hero-overlay" />
                <div className="hero-centered-content">
                    <h1>Curated Goods for You, Your Little One, &amp; Your Home.</h1>
                    <a href="#shop" className="btn-primary">Shop New Arrivals</a>
                </div>
            </section>

            {/* Quick Category Navigation */}
            <section className="quick-categories">
                <div className="category-grid">
                    {categories.map((cat) => (
                        <a key={cat.label} href={cat.href} className="category-item">
                            <div className="circle-img-wrapper">
                                <Image
                                    src={cat.img}
                                    alt={cat.label}
                                    width={250}
                                    height={250}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <h3>{cat.label}</h3>
                        </a>
                    ))}
                </div>
            </section>

            {/* Brand Story */}
            <section className="brand-story">
                <div className="story-container">
                    <h2>Welcome to Sweet Irene&apos;s.</h2>
                    <p>
                        We believe in surrounding yourself with things that bring warmth and
                        peace to your daily life. Discover our hand-picked collection of
                        high-quality treasures, thoughtfully curated for mindful living and
                        effortless style.
                    </p>
                    <a href="/our-story" className="link-subtle">Read Our Story</a>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="featured-collection" id="shop">
                <h2>Our New Favorites</h2>
                <FeaturedCollection products={products} />
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2>&ldquo;I Always Feel Like I&apos;m At Home Here&rdquo;</h2>
                <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} weight="fill" />
                    ))}
                </div>
                <p className="testimonial-text">
                    &ldquo;The quality of the baby clothes is exceptional. I love the
                    neutral tones and how soft the fabric is. My order was packaged
                    beautifully and arrived so quickly. Highly recommend!&rdquo;
                </p>
                <p className="testimonial-author">- Sarah M.</p>
            </section>

            {/* Newsletter Opt-In */}
            <section className="newsletter">
                <div className="newsletter-content">
                    <h2>Join Our List for 10% Off</h2>
                    <NewsletterForm />
                </div>
            </section>

            <Footer />
        </>
    );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCollection from '@/components/FeaturedCollection';
import NewsletterForm from '@/components/NewsletterForm';
import Image from 'next/image';
import { Star } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
    title: "Sweet Irene's Boutique - Home",
    description: "Curated goods for you, your little one, and your home.",
};

const categories = [
    { href: '#womens', img: '/images/cat_womens.png', label: "Women's Apparel" },
    { href: '#baby', img: '/images/cat_baby.png', label: 'Baby & Nursery' },
    { href: '#home', img: '/images/cat_home.png', label: 'Home & Decor' },
];

const products = [
    {
        img: '/images/prod_romper.png',
        alt: 'Organic Cotton Romper',
        title: 'Organic Cotton Romper',
        price: '$42.00',
        description:
            'Crafted from 100% certified organic cotton, this buttery-soft romper is gentle on delicate skin and built to move with your little one. Available in timeless neutral tones, it pairs beautifully with everything in a growing wardrobe.',
    },
    {
        img: '/images/prod_dress.png',
        alt: 'Linen Midi Dress',
        title: 'Linen Midi Dress',
        price: '$85.00',
        description:
            'An effortless everyday dress in breathable linen. The relaxed midi silhouette flows beautifully and transitions from morning errands to an evening out. A piece you will reach for again and again.',
    },
    {
        img: '/images/prod_vase.png',
        alt: 'Ceramic Artisan Vase',
        title: 'Ceramic Artisan Vase',
        price: '$54.00',
        description:
            'Hand-thrown by local artisans, each of these ceramic vases carries subtle variations that make it uniquely yours. Its warm, organic form brings a grounding presence to any shelf, mantle, or tabletop.',
    },
    {
        img: '/images/prod_basket.png',
        alt: 'Woven Moses Basket',
        title: 'Woven Moses Basket',
        price: '$120.00',
        description:
            'A timeless heirloom piece, hand-woven from natural seagrass. Beautifully functional as a baby bassinet or a stylish storage solution, this basket brings warmth and texture to any nursery or living space.',
    },
];

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

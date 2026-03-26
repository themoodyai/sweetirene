import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export const metadata = {
    title: "Our Story | Sweet Irene's Boutique",
    description:
        "Meet Melissa Moody and learn the story behind Sweet Irene\u2019s Boutique \u2014 a boutique born from love, family, and an eye for the beautiful.",
};

export default function OurStoryPage() {
    return (
        <>
            <Header />

            {/* Hero */}
            <section className="hero-section hero-centered" style={{ minHeight: '65vh' }}>
                <Image
                    src="/images/hero.jpeg"
                    alt="Sweet Irene's Boutique"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    priority
                />
                <div className="hero-overlay" />
                <div className="hero-centered-content">
                    <h1>Our Story</h1>
                    <p>A boutique born from love, family, and an eye for the beautiful.</p>
                </div>
            </section>

            {/* Meet Melissa */}
            <section className="our-story-bio">
                <div className="our-story-container">
                    <div className="our-story-bio-layout">
                        <div className="our-story-bio-img">
                            <Image
                                src="/images/melissa-bio.jpg"
                                alt="Melissa Moody, founder of Sweet Irene's Boutique"
                                fill
                                sizes="(max-width: 900px) 100vw, 520px"
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>
                        <div className="our-story-bio-text">
                            <h2>Meet Melissa Moody</h2>
                            <p>
                                Melissa Moody is the heart and hands behind Sweet Irene&apos;s
                                Boutique. A mother, a dreamer, and a lifelong lover of beautiful
                                things, she has spent years searching for the kinds of pieces that
                                feel as good as they look — the organic cotton romper that&apos;s
                                soft enough for a newborn, the artisan vase that transforms a
                                corner of a room, the linen dress you reach for again and again.
                            </p>
                            <p style={{ marginTop: '20px' }}>
                                Sweet Irene&apos;s Boutique is named for her grandmother Irene, a
                                woman of quiet elegance who believed that the small, beautiful
                                details of a home and wardrobe were acts of love. Melissa carries
                                that spirit into every piece she selects for the shop — thoughtful,
                                intentional, and always chosen with her customers&apos; families
                                in mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="our-story-section">
                <div className="our-story-container">
                    <div className="our-story-layout">
                        <div className="our-story-text">
                            <h2>How It All Began</h2>
                            <p>
                                Sweet Irene&apos;s Boutique began as a simple idea: what if there
                                were one beautiful place to find thoughtfully curated goods for
                                you, your little one, and your home? A place where quality
                                wasn&apos;t an afterthought, where every piece had a story, and
                                where shopping felt less like a transaction and more like a
                                discovery.
                            </p>
                            <p style={{ marginTop: '20px' }}>
                                From hand-stitched baby rompers in the softest organic cotton, to
                                linen dresses designed to move with you through your day, to
                                ceramic vases and woven baskets that bring warmth to any room —
                                every item in our collection is chosen with intention. We believe
                                in surrounding yourself with things that bring warmth and peace to
                                your daily life.
                            </p>
                            <p style={{ marginTop: '20px' }}>
                                Today, Sweet Irene&apos;s Boutique is more than a shop. It is a
                                community of families who value quality, beauty, and mindful
                                living. We are so grateful you are here.
                            </p>
                        </div>
                        <div className="our-story-img">
                            <Image
                                src="/images/melissa-story.jpg"
                                alt="Melissa Moody at Sweet Irene's Boutique"
                                fill
                                sizes="(max-width: 900px) 100vw, 520px"
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

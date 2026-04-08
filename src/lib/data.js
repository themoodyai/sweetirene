/**
 * Sweet Irene's Boutique — Product & Category Data
 *
 * Single source of truth for all product and category data.
 * Both the home page and shop/product pages import from here.
 *
 * Future: this module becomes the adapter layer when live inventory
 * data (Faire, SimpleConsign) is integrated — same export shape,
 * different data source.
 */

export const categories = [
    {
        slug: 'womens',
        label: "Women's Apparel",
        img: '/images/cat_womens.png',
        description: 'Effortless pieces for the everyday woman — linen, cotton, and natural fabrics in timeless silhouettes.',
    },
    {
        slug: 'baby',
        label: 'Baby & Nursery',
        img: '/images/cat_baby.png',
        description: 'Gentle on delicate skin and beautiful in any nursery. Organic and natural materials only.',
    },
    {
        slug: 'home',
        label: 'Home & Decor',
        img: '/images/cat_home.png',
        description: 'Hand-picked pieces that bring warmth and texture to your living spaces.',
    },
];

export const products = [
    {
        id: 'organic-cotton-romper',
        slug: 'organic-cotton-romper',
        title: 'Organic Cotton Romper',
        price: 42,
        category: 'baby',
        img: '/images/prod_romper.png',
        alt: 'Organic Cotton Romper',
        description:
            'Crafted from 100% certified organic cotton, this buttery-soft romper is gentle on delicate skin and built to move with your little one. Available in timeless neutral tones, it pairs beautifully with everything in a growing wardrobe.',
        sizes: ['Newborn', '0–3M', '3–6M', '6–12M'],
        colors: ['Natural', 'Sage', 'Oatmeal'],
        badge: 'New',
    },
    {
        id: 'linen-midi-dress',
        slug: 'linen-midi-dress',
        title: 'Linen Midi Dress',
        price: 85,
        category: 'womens',
        img: '/images/prod_dress.png',
        alt: 'Linen Midi Dress',
        description:
            'An effortless everyday dress in breathable linen. The relaxed midi silhouette flows beautifully and transitions from morning errands to an evening out. A piece you will reach for again and again.',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Ivory', 'Dusty Rose', 'Sage'],
    },
    {
        id: 'ceramic-artisan-vase',
        slug: 'ceramic-artisan-vase',
        title: 'Ceramic Artisan Vase',
        price: 54,
        category: 'home',
        img: '/images/prod_vase.png',
        alt: 'Ceramic Artisan Vase',
        description:
            'Hand-thrown by local artisans, each of these ceramic vases carries subtle variations that make it uniquely yours. Its warm, organic form brings a grounding presence to any shelf, mantle, or tabletop.',
        colors: ['Warm White', 'Terracotta', 'Sage'],
    },
    {
        id: 'woven-moses-basket',
        slug: 'woven-moses-basket',
        title: 'Woven Moses Basket',
        price: 120,
        category: 'baby',
        img: '/images/prod_basket.png',
        alt: 'Woven Moses Basket',
        description:
            'A timeless heirloom piece, hand-woven from natural seagrass. Beautifully functional as a baby bassinet or a stylish storage solution, this basket brings warmth and texture to any nursery or living space.',
        colors: ['Natural', 'Bleached'],
    },
];

/**
 * Helper — find a category by slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getCategoryBySlug(slug) {
    return categories.find((c) => c.slug === slug);
}

/**
 * Helper — find a product by slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getProductBySlug(slug) {
    return products.find((p) => p.slug === slug);
}

/**
 * Helper — get products filtered and/or sorted.
 * @param {{ category?: string, sort?: string }} options
 * @returns {object[]}
 */
export function getProducts({ category, sort } = {}) {
    let result = [...products];

    if (category && category !== 'all') {
        result = result.filter((p) => p.category === category);
    }

    switch (sort) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            result.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            // Badge "New" items first, otherwise stable order
            result.sort((a, b) => (a.badge === 'New' ? -1 : b.badge === 'New' ? 1 : 0));
            break;
        default:
            // Default: curated order (as defined above)
            break;
    }

    return result;
}

/**
 * Helper — format price as currency string.
 * @param {number} price
 * @returns {string}
 */
export function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

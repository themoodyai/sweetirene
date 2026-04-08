'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * FilterSidebar — sticky left panel for category and sort filtering.
 *
 * Currently supports category selection. Price/size filters are scaffolded
 * for Phase 2 when product data has those attributes.
 *
 * @param {{ categories: Array<{ slug: string, label: string }>, activeSlug: string|null }} props
 */
export default function FilterSidebar({ categories, activeSlug }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function setCategory(slug) {
        const params = new URLSearchParams(searchParams.toString());
        if (slug === 'all') {
            params.delete('category');
        } else {
            params.set('category', slug);
        }
        params.delete('page');
        router.push(`${pathname}?${params.toString()}`);
    }

    function clearAll() {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('category');
        params.delete('sort');
        router.push(`${pathname}?${params.toString()}`);
    }

    const hasFilters = activeSlug && activeSlug !== 'all';

    return (
        <aside className="filter-sidebar">
            <div className="filter-section">
                <h3 className="filter-section-title">Category</h3>
                <ul className="filter-category-list">
                    <li>
                        <button
                            className={`filter-category-btn${!activeSlug || activeSlug === 'all' ? ' filter-category-btn--active' : ''}`}
                            onClick={() => setCategory('all')}
                        >
                            All Items
                        </button>
                    </li>
                    {categories.map((cat) => (
                        <li key={cat.slug}>
                            <button
                                className={`filter-category-btn${activeSlug === cat.slug ? ' filter-category-btn--active' : ''}`}
                                onClick={() => setCategory(cat.slug)}
                            >
                                {cat.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {hasFilters && (
                <button className="filter-clear-btn" onClick={clearAll}>
                    Clear All Filters
                </button>
            )}
        </aside>
    );
}

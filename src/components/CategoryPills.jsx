'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * CategoryPills — horizontal scrollable pill tabs for filtering by category.
 *
 * URL-driven: sets/removes the `category` search param on the current path.
 *
 * @param {{ categories: Array<{ slug: string, label: string }>, activeSlug: string|null }} props
 */
export default function CategoryPills({ categories, activeSlug }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleClick(slug) {
        const params = new URLSearchParams(searchParams.toString());
        if (slug === 'all') {
            params.delete('category');
        } else {
            params.set('category', slug);
        }
        // Reset to page 1 on category change
        params.delete('page');
        router.push(`${pathname}?${params.toString()}`);
    }

    const allPills = [{ slug: 'all', label: 'All Items' }, ...categories];

    return (
        <div className="category-pills-wrapper">
            <div className="category-pills">
                {allPills.map((cat) => {
                    const isActive =
                        cat.slug === 'all'
                            ? !activeSlug || activeSlug === 'all'
                            : cat.slug === activeSlug;
                    return (
                        <button
                            key={cat.slug}
                            onClick={() => handleClick(cat.slug)}
                            className={`category-pill${isActive ? ' category-pill--active' : ''}`}
                            aria-pressed={isActive}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

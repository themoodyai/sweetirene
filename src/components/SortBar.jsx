'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

/**
 * SortBar — result count, active filter chips, and sort dropdown.
 *
 * @param {{ count: number, activeCategory: string|null, sortValue: string }} props
 */
export default function SortBar({ count, activeCategory, sortValue, categoryLabel }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleSort(e) {
        const params = new URLSearchParams(searchParams.toString());
        if (e.target.value === 'default') {
            params.delete('sort');
        } else {
            params.set('sort', e.target.value);
        }
        router.push(`${pathname}?${params.toString()}`);
    }

    function clearCategory() {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('category');
        router.push(`${pathname}?${params.toString()}`);
    }

    return (
        <div className="sort-bar">
            <div className="sort-bar-left">
                <span className="sort-bar-count">
                    {count} {count === 1 ? 'item' : 'items'}
                </span>
                {activeCategory && activeCategory !== 'all' && categoryLabel && (
                    <button
                        className="filter-chip"
                        onClick={clearCategory}
                        aria-label={`Remove ${categoryLabel} filter`}
                    >
                        {categoryLabel}
                        <span className="filter-chip-remove" aria-hidden="true">×</span>
                    </button>
                )}
            </div>

            <div className="sort-bar-right">
                <label className="sort-label" htmlFor="shop-sort">Sort</label>
                <select
                    id="shop-sort"
                    className="sort-select"
                    value={sortValue || 'default'}
                    onChange={handleSort}
                >
                    <option value="default">Curated Choice</option>
                    <option value="newest">Newest First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </div>
    );
}

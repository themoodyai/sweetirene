import Link from 'next/link';

/**
 * Breadcrumb navigation.
 *
 * @param {{ items: Array<{ label: string, href?: string }> }} props
 *   - Each item with an `href` renders as a link.
 *   - The last item (no href) renders as plain text (current page).
 *
 * Usage:
 *   <Breadcrumb items={[
 *     { label: 'Home', href: '/home' },
 *     { label: "Women's Apparel", href: '/shop/womens' },
 *     { label: 'Linen Midi Dress' },
 *   ]} />
 */
export default function Breadcrumb({ items = [] }) {
    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} className="breadcrumb-item">
                            {isLast || !item.href ? (
                                <span className="breadcrumb-current" aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <Link href={item.href} className="breadcrumb-link">
                                    {item.label}
                                </Link>
                            )}
                            {!isLast && (
                                <span className="breadcrumb-sep" aria-hidden="true">/</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

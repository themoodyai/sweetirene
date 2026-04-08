'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List, MagnifyingGlass, User, Handbag } from '@phosphor-icons/react';

export default function Header({ simplified = false }) {
    const [menuOpen, setMenuOpen] = useState(false);

    if (simplified) {
        return (
            <>
                <div className="top-promotional-bar">
                    Something beautiful is arriving soon...
                </div>
                <header className="main-header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '16px 5%' }}>
                    <div className="logo-container" style={{ flex: 'none' }}>
                        <Image
                            src="/images/logo_transparent.png"
                            alt="Sweet Irene's Boutique"
                            className="logo-image"
                            width={500}
                            height={500}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                </header>
            </>
        );
    }

    return (
        <>
            <div className="top-promotional-bar">
                Free Shipping on Orders Over $75!
            </div>
            <header className="main-header">
                <div className="header-nav-row">
                    <div
                        className="mobile-menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <List size={28} />
                    </div>

                    <nav className={`nav-middle ${menuOpen ? 'active' : ''}`}>
                        <Link href="/shop/womens">Women&apos;s</Link>
                        <Link href="/shop/baby">Baby</Link>
                        <Link href="/shop/home">Home &amp; Decor</Link>
                    </nav>

                    <nav className="nav-right">
                        <a href="#search"><MagnifyingGlass size={24} /></a>
                        <a href="#account" className="hide-mobile"><User size={24} /></a>
                        <a href="#cart"><Handbag size={24} /></a>
                    </nav>
                </div>

                <div className="logo-drop-container">
                    <Link href="/home">
                        <Image
                            src="/images/logo_transparent.png"
                            alt="Sweet Irene's Boutique"
                            className="logo-image"
                            width={500}
                            height={500}
                            priority
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </Link>
                </div>
            </header>
        </>
    );
}

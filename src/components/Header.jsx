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
                <header className="main-header" style={{ justifyContent: 'center' }}>
                    <div className="logo-container" style={{ order: 0, flex: 'none' }}>
                        <Image
                            src="/images/logo_transparent.png"
                            alt="Sweet Irene's Boutique"
                            className="logo-image"
                            width={200}
                            height={80}
                            priority
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
                <div
                    className="mobile-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <List size={28} />
                </div>

                <div className="logo-container">
                    <Link href="/home">
                        <Image
                            src="/images/logo.png"
                            alt="Sweet Irene's Boutique"
                            className="logo-image"
                            width={200}
                            height={80}
                            priority
                        />
                    </Link>
                </div>

                <nav className="nav-right">
                    <a href="#search"><MagnifyingGlass size={24} /></a>
                    <a href="#account" className="hide-mobile"><User size={24} /></a>
                    <a href="#cart"><Handbag size={24} /></a>
                </nav>

                <nav className={`nav-middle ${menuOpen ? 'active' : ''}`}>
                    <a href="#womens">Women&apos;s</a>
                    <a href="#baby">Baby</a>
                    <a href="#home">Home &amp; Decor</a>
                </nav>
            </header>
        </>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import { InstagramLogo, FacebookLogo, PinterestLogo } from '@phosphor-icons/react/dist/ssr';

export default function Footer({ simplified = false }) {
    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <div className="footer-col brand-col">
                    <Image
                        src="/images/logo_transparent.png"
                        alt="Sweet Irene's BOUTIQUE"
                        className="footer-logo"
                        width={300}
                        height={300}
                        style={{ width: 'auto', height: '100%' }}
                    />
                    <p>
                        Curating hand-picked treasures for your family and home, with a
                        focus on quality and organic beauty.
                    </p>
                </div>

                {simplified ? (
                    <>
                        <div className="footer-col" style={{ visibility: 'hidden' }} />
                        <div className="footer-col" style={{ visibility: 'hidden' }} />
                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <a href="mailto:melissa@sweetirenesboutique.com">
                                melissa@sweetirenesboutique.com
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="footer-col">
                            <h4>Shop</h4>
                            <a href="#">Women&apos;s</a>
                            <a href="#">Baby &amp; Nursery</a>
                            <a href="#">Home &amp; Decor</a>
                            <a href="#">Gifts</a>
                        </div>
                        <div className="footer-col">
                            <h4>Company</h4>
                            <Link href="#">Our Story</Link>
                            <Link href="#">Contact Us</Link>
                            <Link href="#">FAQ</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Policies</h4>
                            <a href="#">Shipping &amp; Returns</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </>
                )}
            </div>

            <div className="footer-bottom">
                <div className="social-icons">
                    <a href="#"><InstagramLogo size={24} /></a>
                    <a href="#"><FacebookLogo size={24} /></a>
                    <a href="#"><PinterestLogo size={24} /></a>
                </div>
                <p>&copy; 2026 Sweet Irene&apos;s Boutique. All rights reserved.</p>
            </div>
        </footer>
    );
}

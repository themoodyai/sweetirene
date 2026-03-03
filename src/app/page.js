'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComingSoonPage() {
  const [formState, setFormState] = useState('idle'); // idle | submitting | success | error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');

    const WEBHOOK_URL =
      'https://services.leadconnectorhq.com/hooks/q0NEtcQnfHz7UlhfCKpp/webhook-trigger/82f85a20-59f0-4d75-843c-8323996697e7';

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name,
          email: email,
          source: 'Coming Soon Page',
          tags: ['newsletter-subscriber', 'pre-launch'],
        }),
      });

      if (response.ok || response.type === 'opaque') {
        setFormState('success');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error submitting to webhook:', error);
      setFormState('error');
    }
  };

  return (
    <>
      <Header simplified />

      <section
        className="hero-section coming-soon-hero"
        style={{ backgroundImage: "url('/images/hero.jpeg')" }}
      >
        <div className="coming-soon-overlay" />

        <div className="coming-soon-card hero-content">
          <h1>We&apos;re Launching Soon.</h1>
          <p>
            We are curating hand-picked treasures for you, your little one, and
            your home. Join our VIP list to be notified the moment our doors
            open, and receive an exclusive 10% off your first order!
          </p>

          {formState !== 'success' && (
            <form className="coming-soon-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your First Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="btn-primary"
                disabled={formState === 'submitting'}
                style={{
                  opacity: formState === 'submitting' ? 0.7 : 1,
                }}
              >
                {formState === 'submitting' ? 'Subscribing...' : 'Notify Me'}
              </button>
            </form>
          )}

          {formState === 'success' && (
            <p className="form-success-msg">
              Thanks! You&apos;re on the list. We&apos;ll see you soon!
            </p>
          )}

          {formState === 'error' && (
            <p className="form-error-msg">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </section>

      <Footer simplified />
    </>
  );
}

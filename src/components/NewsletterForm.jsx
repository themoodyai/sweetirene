'use client';

import { useState } from 'react';

export default function NewsletterForm() {
    const [formState, setFormState] = useState('idle'); // idle | submitting | success | error
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
                    email: email,
                    source: 'Home Page Newsletter',
                    tags: ['newsletter-subscriber'],
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

    if (formState === 'success') {
        return (
            <p className="form-success-msg">
                Thanks! You&apos;re on the list.
            </p>
        );
    }

    return (
        <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email address"
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
                {formState === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
            {formState === 'error' && (
                <p className="form-error-msg" style={{ marginTop: '10px' }}>
                    Something went wrong. Please try again.
                </p>
            )}
        </form>
    );
}

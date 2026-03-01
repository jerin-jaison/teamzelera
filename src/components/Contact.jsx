import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp, FaHeart } from 'react-icons/fa'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [focused, setFocused] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)')
        setIsMobile(mq.matches)
        const handler = (e) => setIsMobile(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const msg = encodeURIComponent(
            `Hi ZELERA! 👋\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        )
        window.open(`https://wa.me/917012783442?text=${msg}`, '_blank')
    }

    const inputStyle = (name) => ({
        width: '100%',
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${focused === name ? 'rgba(212,168,67,0.35)' : 'rgba(255,255,255,0.06)'}`,
        borderRadius: '10px',
        padding: '13px 16px',
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: 'var(--color-white)',
        outline: 'none',
        transition: 'border-color 0.25s ease, background 0.25s ease',
        background: focused === name ? 'rgba(212,168,67,0.03)' : 'rgba(255,255,255,0.02)',
    })

    const labelStyle = {
        fontFamily: 'var(--font-body)',
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--color-gray-text)',
        display: 'block',
        marginBottom: '8px',
    }

    return (
        <section
            id="contact"
            style={{ padding: isMobile ? '80px 20px 0' : '120px 32px 0', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <span className="section-label">✦ Contact</span>
                    </div>
                    <h2 className="section-heading">
                        Let's Build Something <span>Great</span>
                    </h2>
                    <p className="section-subheading" style={{ marginBottom: 0 }}>
                        Have a project in mind? Tell us about it and we'll get back to you within the hour.
                    </p>
                </motion.div>

                {/* Content grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'minmax(280px, 420px) 1fr',
                        gap: isMobile ? '32px' : '40px',
                        alignItems: 'start',
                    }}
                >
                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '1.05rem',
                                color: 'var(--color-white-dim)',
                                lineHeight: 1.8,
                                marginBottom: '40px',
                            }}
                        >
                            We reply fast — usually within the hour. Start a conversation on WhatsApp or send us a message through the form.
                        </p>

                        {/* Contact items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                            <a
                                href="https://instagram.com/teamzelera"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    background: 'var(--color-black-card)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '14px',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.3s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                            >
                                <div
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(131,58,180,0.2), rgba(255,60,140,0.2))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <FaInstagram style={{ color: '#e879f9', fontSize: '1.1rem' }} />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gray-text)', marginBottom: '2px' }}>Instagram</p>
                                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--color-white-dim)', fontSize: '0.9rem' }}>@teamzelera</p>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/917012783442"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '18px 20px',
                                    background: 'var(--color-black-card)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    borderRadius: '14px',
                                    textDecoration: 'none',
                                    transition: 'border-color 0.3s ease',
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(37,211,102,0.2)'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                            >
                                <div
                                    style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '12px',
                                        background: 'rgba(37,211,102,0.12)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0,
                                    }}
                                >
                                    <FaWhatsapp style={{ color: '#4ade80', fontSize: '1.2rem' }} />
                                </div>
                                <div>
                                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gray-text)', marginBottom: '2px' }}>WhatsApp</p>
                                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--color-white-dim)', fontSize: '0.9rem' }}>+91 70127 83442</p>
                                </div>
                            </a>
                        </div>

                        <a
                            href="https://wa.me/917012783442"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '15px 28px',
                                borderRadius: '12px',
                                background: '#25D366',
                                color: '#fff',
                                fontFamily: 'var(--font-body)',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 20px rgba(37,211,102,0.25)',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.35)' }}
                            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.25)' }}
                        >
                            <FaWhatsapp style={{ fontSize: '1.1rem' }} />
                            Start a Conversation
                        </a>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            background: 'var(--color-black-card)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: '20px',
                            padding: '36px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                        }}
                    >
                        <div>
                            <label style={labelStyle}>Name</label>
                            <input
                                type="text"
                                required
                                value={form.name}
                                placeholder="Your full name"
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused(null)}
                                style={inputStyle('name')}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Email</label>
                            <input
                                type="email"
                                required
                                value={form.email}
                                placeholder="your@email.com"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused(null)}
                                style={inputStyle('email')}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                required
                                rows={5}
                                value={form.message}
                                placeholder="Tell us about your project…"
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused(null)}
                                style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '130px' }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-gold"
                            style={{ width: '100%', fontSize: '0.9rem', padding: '15px' }}
                        >
                            Send via WhatsApp →
                        </button>
                    </motion.form>
                </div>

                {/* Footer */}
                <footer style={{ marginTop: '80px' }}>
                    {/* Top divider */}
                    <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.2), rgba(212,168,67,0.4), rgba(212,168,67,0.2), transparent)', marginBottom: '56px' }} />

                    {/* Main footer grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '48px',
                            marginBottom: '48px',
                        }}
                    >
                        {/* Brand column */}
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                                <div
                                    style={{
                                        width: '32px', height: '32px', borderRadius: '9px',
                                        background: 'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold-secondary))',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '0.75rem', fontWeight: 800, color: '#080808',
                                        fontFamily: 'var(--font-heading)',
                                    }}
                                >Z</div>
                                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-gold)', letterSpacing: '0.08em' }}>
                                    ZELERA
                                </span>
                            </div>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-gray-text)', lineHeight: 1.75, maxWidth: '220px' }}>
                                Premium websites built for ambitious businesses
                            </p>
                        </div>

                        {/* Quick links */}
                        <div>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '20px' }}>
                                Quick Links
                            </h4>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { label: 'Home', href: '#home' },
                                    { label: 'Services', href: '#services' },
                                    { label: 'Projects', href: '#projects' },
                                    { label: 'Pricing', href: '#pricing' },
                                    { label: 'About', href: '#about' },
                                ].map(link => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            style={{
                                                fontFamily: 'var(--font-body)', fontSize: '0.875rem',
                                                color: 'var(--color-gray-text)', textDecoration: 'none',
                                                transition: 'color 0.2s ease',
                                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-gray-text)'}
                                        >
                                            <span style={{ color: 'rgba(212,168,67,0.4)', fontSize: '0.5rem' }}>◆</span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect / social */}
                        <div>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '20px' }}>
                                Connect
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <a
                                    href="https://wa.me/917012783442"
                                    target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                                    onMouseEnter={e => e.currentTarget.querySelector('span').style.color = '#4ade80'}
                                    onMouseLeave={e => e.currentTarget.querySelector('span').style.color = 'var(--color-gray-text)'}
                                >
                                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(37,211,102,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <FaWhatsapp style={{ color: '#4ade80', fontSize: '1rem' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>WhatsApp</p>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-gray-text)', transition: 'color 0.2s ease' }}>+91 70127 83442</span>
                                    </div>
                                </a>

                                <a
                                    href="https://instagram.com/teamzelera"
                                    target="_blank" rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                                    onMouseEnter={e => e.currentTarget.querySelector('span').style.color = '#e879f9'}
                                    onMouseLeave={e => e.currentTarget.querySelector('span').style.color = 'var(--color-gray-text)'}
                                >
                                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'linear-gradient(135deg, rgba(131,58,180,0.15), rgba(255,60,140,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <FaInstagram style={{ color: '#e879f9', fontSize: '1rem' }} />
                                    </div>
                                    <div>
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Instagram</p>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-gray-text)', transition: 'color 0.2s ease' }}>@teamzelera</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-white)', marginBottom: '20px' }}>
                                Contact Info
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                <a
                                    href="mailto:teamzelera@gmail.com"
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
                                    onMouseEnter={e => e.currentTarget.querySelector('span').style.color = 'var(--color-gold)'}
                                    onMouseLeave={e => e.currentTarget.querySelector('span').style.color = 'var(--color-gray-text)'}
                                >
                                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(212,168,67,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Email</p>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-gray-text)', transition: 'color 0.2s ease' }}>teamzelera@gmail.com</span>
                                    </div>
                                </a>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(212,168,67,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                            <path d="M2 12h20" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Location</p>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--color-gray-text)' }}>Kerala, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '28px' }} />
                    <div
                        style={{
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                            justifyContent: 'space-between', gap: '12px',
                            paddingBottom: '16px',
                        }}
                    >
                        {/* <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-gray-text)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            © 2025 ZELERA · Made with <FaHeart style={{ color: '#f43f5e', fontSize: '0.65rem' }} /> in India
                        </p> */}
                        <div style={{ display: 'flex', gap: '24px' }}>
                            {[
                                // { label: 'Privacy Policy', href: '#' },
                                // { label: 'Terms of Service', href: '#' },
                            ].map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--color-gray-text)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                                    onMouseEnter={e => e.target.style.color = 'var(--color-white-dim)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--color-gray-text)'}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    )
}

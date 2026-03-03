import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [active, setActive] = useState('#home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 50,
                transition: 'all 0.5s ease',
                background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
            }}
        >
            <div
                className="mx-auto flex items-center justify-between"
                style={{ maxWidth: '1280px', padding: '0 32px', height: '72px' }}
            >
                {/* Logo */}
                <a
                    href="#home"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        letterSpacing: '0.1em',
                        color: 'var(--color-gold)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                    }}
                >
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '8px',
                            background: 'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold-secondary))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            color: '#080808',
                        }}
                    >Z</div>
                    ZELERA
                </a>

                {/* Trust pill */}
                <div
                    className="hidden md:flex items-center gap-2"
                    style={{
                        fontSize: '0.7rem',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        color: 'var(--color-gray-text)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '100px',
                        padding: '5px 14px',
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(212,168,67,0.7)" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    Secure & Trusted
                </div>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setActive(link.href)}
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: active === link.href ? 'var(--color-gold)' : 'var(--color-gray-text)',
                                textDecoration: 'none',
                                padding: '6px 14px',
                                borderRadius: '8px',
                                transition: 'all 0.2s ease',
                                background: active === link.href ? 'rgba(212,168,67,0.08)' : 'transparent',
                            }}
                            onMouseEnter={e => { if (active !== link.href) e.target.style.color = 'var(--color-white-dim)' }}
                            onMouseLeave={e => { if (active !== link.href) e.target.style.color = 'var(--color-gray-text)' }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="https://wa.me/917012783442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:inline-flex btn-gold"
                    style={{ padding: '9px 22px', fontSize: '0.8rem' }}
                >
                    Get a Quote
                </a>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden"
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px',
                    }}
                    aria-label="Toggle menu"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            style={{
                                display: 'block',
                                height: '1.5px',
                                borderRadius: '2px',
                                background: 'var(--color-gold)',
                            }}
                            animate={{
                                width: mobileOpen && i === 1 ? 0 : i === 0 ? 24 : i === 2 ? 18 : 24,
                                rotate: mobileOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                                y: mobileOpen ? (i === 0 ? 6.5 : i === 2 ? -6.5 : 0) : 0,
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'rgba(8,8,8,0.97)',
                            backdropFilter: 'blur(20px)',
                            borderTop: '1px solid rgba(255,255,255,0.04)',
                            overflow: 'hidden',
                        }}
                    >
                        <div style={{ padding: '20px 32px 28px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => { setActive(link.href); setMobileOpen(false) }}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.04 }}
                                    style={{
                                        fontFamily: 'var(--font-body)',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        color: 'var(--color-white-dim)',
                                        textDecoration: 'none',
                                        padding: '12px 0',
                                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                                        display: 'block',
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <a
                                href="https://wa.me/917012783442"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold mt-4 w-full"
                                style={{ fontSize: '0.82rem', padding: '10px 18px', textAlign: 'center' }}
                            >
                                Get a Quote →
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

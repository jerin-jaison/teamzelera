import { useCallback, useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function Hero() {
    const [init, setInit] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine)
        }).then(() => setInit(true))
    }, [])

    const particlesOptions = useMemo(() => ({
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
            color: { value: ['#D4A843', '#A8842E', '#F0C040'] },
            links: {
                color: '#A8842E',
                distance: 140,
                enable: true,
                opacity: 0.12,
                width: 0.8,
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: 'none',
                outModes: { default: 'bounce' },
            },
            number: { density: { enable: true, area: 1000 }, value: 60 },
            opacity: { value: { min: 0.15, max: 0.5 } },
            shape: { type: 'circle' },
            size: { value: { min: 0.8, max: 2.5 } },
        },
        detectRetina: true,
    }), [])

    const particlesLoaded = useCallback(() => { }, [])

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Particles */}
            {init && (
                <Particles
                    id="hero-particles"
                    className="absolute inset-0 z-0"
                    particlesLoaded={particlesLoaded}
                    options={particlesOptions}
                />
            )}

            {/* Subtle grid */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
                }}
            />

            {/* Background glow blobs */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,168,67,0.06) 0%, transparent 70%)',
                }}
            />
            <div
                className="absolute top-[15%] left-[8%] w-72 h-72 rounded-full pointer-events-none orb-drift"
                style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}
            />
            <div
                className="absolute bottom-[20%] right-[8%] w-80 h-80 rounded-full pointer-events-none float-animation"
                style={{ background: 'radial-gradient(circle, rgba(212,168,67,0.05) 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '4s' }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-8"
                >
                    <span className="section-label">✦ Web Agency of the Future</span>
                </motion.div>

                {/* Main title */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-shimmer mb-6"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(4rem, 13vw, 9rem)',
                        fontWeight: 700,
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                    }}
                >
                    ZELERA
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="text-lg md:text-xl mb-3 font-medium"
                    css={{ color: 'var(--color-white-dim)' }}
                >
                    <span style={{ color: 'var(--color-white-dim)' }}>Premium Websites. Affordable Prices.</span>{' '}
                    <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Zero Compromise.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="w-24 h-px mx-auto mb-10"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)' }}
                />

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#projects" className="btn-gold btn-pulse">
                        View Our Work
                    </a>
                    <a
                        href="https://wa.me/917012783442"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat on WhatsApp
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-gray-text)', textTransform: 'uppercase' }}></span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-px h-10"
                        style={{ background: 'linear-gradient(to bottom, rgba(212,168,67,0.5), transparent)' }}
                    />
                </motion.div>
            </div>
        </section>
    )
}

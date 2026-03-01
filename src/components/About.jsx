import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
    { value: 10, suffix: '+', label: 'Projects Delivered', icon: '🚀' },
    { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '⭐' },
    { value: 3, suffix: ' days', label: 'Average Delivery', icon: '⚡' },
]

export default function About() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)')
        setIsMobile(mq.matches)
        const handler = (e) => setIsMobile(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    return (
        <section
            id="about"
            style={{ padding: isMobile ? '80px 20px' : '120px 32px', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <span className="section-label">✦ About</span>
                    </div>
                    <h2 className="section-heading">
                        Who <span>We Are</span>
                    </h2>
                </motion.div>

                {/* About text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'var(--color-white-dim)',
                        lineHeight: 1.85,
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto 64px',
                    }}
                >
                    <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>ZELERA</span> is a young, passionate web agency
                    delivering premium digital experiences at startup-friendly prices. We don't just build
                    websites — we design your brand's digital identity. From Figma mockups to full
                    deployment, we walk with you every step of the way.
                </motion.p>

                {/* Stats */}
                <div
                    ref={ref}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: isMobile ? '12px' : '20px',
                        marginBottom: '48px',
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 32 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                            className="premium-card"
                            style={{ padding: '36px 24px', textAlign: 'center' }}
                        >
                            <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{stat.icon}</div>
                            <div
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 700,
                                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                                    color: 'var(--color-gold)',
                                    letterSpacing: '-0.04em',
                                    lineHeight: 1,
                                    marginBottom: '10px',
                                }}
                            >
                                {inView ? (
                                    <CountUp end={stat.value} duration={2.2} suffix={stat.suffix} />
                                ) : `0${stat.suffix}`}
                            </div>
                            <p
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.8rem',
                                    fontWeight: 500,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-gray-text)',
                                }}
                            >
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="gold-divider"
                />
            </div>
        </section>
    )
}

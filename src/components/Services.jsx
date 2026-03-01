import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
    {
        number: '01',
        emoji: '⚡',
        title: 'Custom Websites',
        desc: 'Pixel-perfect, blazing-fast sites engineered to reflect your brand and convert visitors.',
    },
    {
        number: '02',
        emoji: '🛒',
        title: 'E-Commerce Stores',
        desc: 'Stunning storefronts with smooth checkout flows built to maximize your sales.',
    },
    {
        number: '03',
        emoji: '📅',
        title: 'Booking Systems',
        desc: 'Smart, automated scheduling platforms for clinics, studios, and service businesses.',
    },
    {
        number: '04',
        emoji: '🎨',
        title: 'Figma UI Design',
        desc: 'Beautiful visual mockups reviewed and approved by you before a single line of code.',
    },
    {
        number: '05',
        emoji: '☁️',
        title: 'Web Hosting',
        desc: 'Reliable hosting with SSL, custom domains, and 99.9% uptime — all handled for you.',
    },
    {
        number: '06',
        emoji: '💼',
        title: 'Portfolio Sites',
        desc: 'Showcase your work, skills, and achievements with a design that sets you apart.',
    },
]

export default function Services() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

    return (
        <section
            id="services"
            className="section-bg"
            style={{ padding: '120px 32px', position: 'relative', overflow: 'hidden' }}
        >
            {/* Background blobs */}
            <div
                style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '700px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                        <span className="section-label">✦ Services</span>
                    </div>
                    <h2 className="section-heading">
                        Everything You Need{' '}
                        <span>to Grow Online</span>
                    </h2>
                    <p className="section-subheading" style={{ marginBottom: 0 }}>
                        From concept to deployment — we deliver complete digital solutions tailored to your goals.
                    </p>
                </motion.div>

                {/* Grid */}
                <div
                    ref={ref}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            className="premium-card"
                            initial={{ opacity: 0, y: 36 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            style={{ padding: '32px' }}
                        >
                            {/* Header row */}
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                                <div className="icon-box" style={{ fontSize: '1.3rem' }}>
                                    {service.emoji}
                                </div>
                                <span
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.65rem',
                                        fontWeight: 600,
                                        letterSpacing: '0.12em',
                                        color: 'rgba(212,168,67,0.3)',
                                    }}
                                >
                                    {service.number}
                                </span>
                            </div>

                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    color: 'var(--color-white)',
                                    marginBottom: '10px',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {service.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.9rem',
                                    color: 'var(--color-gray-text)',
                                    lineHeight: 1.7,
                                }}
                            >
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

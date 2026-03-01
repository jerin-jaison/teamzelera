import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const plans = [
    {
        name: 'Basic Website',
        price: '₹5,999',
        description: 'Perfect for landing pages, personal sites, and simple business pages.',
        features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'Basic SEO'],
        popular: false,
    },
    {
        name: 'Dynamic Website',
        price: '₹12,000',
        description: 'For businesses that need dynamic content, a CMS, and custom features.',
        features: ['Unlimited pages', 'CMS integration', 'Advanced animations', 'Priority support'],
        popular: true,
    },
    {
        name: 'Booking System',
        price: '₹15K – ₹25K',
        description: 'Complete scheduling and appointment booking platform for your business.',
        features: ['Slot management', 'Email/SMS alerts', 'Payment integration', 'Dashboard'],
        popular: false,
    },
    {
        name: 'E-Commerce',
        price: '₹25K – ₹60K',
        description: 'Full-featured online store with product management and secure payments.',
        features: ['Product catalog', 'Razorpay / Stripe', 'Inventory management', 'Analytics'],
        popular: false,
    },
]

const trust = [
    { icon: '🔄', text: 'Free 3-Month Feature Updates' },
    { icon: '🛡️', text: 'Free 6-Month Bug Fixes' },
    { icon: '🎨', text: 'Free Figma Preview Before Dev' },
]

export default function Pricing() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 })

    return (
        <section
            id="pricing"
            style={{ padding: '120px 32px', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-100px',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,168,67,0.03) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    transform: 'translateY(-50%)',
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
                        <span className="section-label">✦ Pricing</span>
                    </div>
                    <h2 className="section-heading">
                        Transparent Pricing.<br />
                        <span>No Hidden Costs.</span>
                    </h2>
                    <p className="section-subheading" style={{ marginBottom: 0 }}>
                        Every plan comes with lifetime support during the warranty period and Figma previews.
                    </p>
                </motion.div>

                {/* Cards */}
                <div
                    ref={ref}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px',
                        marginBottom: '56px',
                    }}
                >
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`premium-card ${plan.popular ? 'pricing-featured' : ''}`}
                            style={{ padding: '32px', position: 'relative' }}
                        >
                            {plan.popular && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-1px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold))',
                                        color: '#080808',
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        padding: '4px 14px',
                                        borderRadius: '0 0 8px 8px',
                                        fontFamily: 'var(--font-body)',
                                    }}
                                >
                                    Most Popular
                                </div>
                            )}

                            <h3
                                style={{
                                    fontFamily: 'var(--font-heading)',
                                    fontWeight: 600,
                                    fontSize: '0.95rem',
                                    color: 'var(--color-white-dim)',
                                    marginBottom: '12px',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                {plan.name}
                            </h3>

                            <div style={{ marginBottom: '16px' }}>
                                <span
                                    style={{
                                        fontFamily: 'var(--font-heading)',
                                        fontWeight: 700,
                                        fontSize: '2rem',
                                        color: plan.popular ? 'var(--color-gold-bright)' : 'var(--color-white)',
                                        letterSpacing: '-0.03em',
                                        lineHeight: 1,
                                    }}
                                >
                                    {plan.price}
                                </span>
                            </div>

                            <p
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.82rem',
                                    color: 'var(--color-gray-text)',
                                    lineHeight: 1.65,
                                    marginBottom: '24px',
                                    paddingBottom: '24px',
                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                }}
                            >
                                {plan.description}
                            </p>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {plan.features.map(f => (
                                    <li
                                        key={f}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            fontFamily: 'var(--font-body)',
                                            fontSize: '0.85rem',
                                            color: 'var(--color-white-dim)',
                                        }}
                                    >
                                        <span style={{ color: 'var(--color-gold)', fontSize: '0.7rem', flexShrink: 0 }}>✦</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Figma add-on strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '16px',
                        background: 'rgba(212,168,67,0.04)',
                        border: '1px solid rgba(212,168,67,0.12)',
                        borderRadius: '16px',
                        padding: '20px 28px',
                        marginBottom: '48px',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '1.4rem' }}>🎨</span>
                        <div>
                            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-white)' }}>
                                Figma UI Design
                            </p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--color-gray-text)' }}>
                                Add professional mockups to any package
                            </p>
                        </div>
                    </div>
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-gold)' }}>
                        +₹2,000
                    </span>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '32px',
                        marginBottom: '48px',
                    }}
                >
                    {trust.map(item => (
                        <div
                            key={item.text}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.875rem',
                                color: 'var(--color-white-dim)',
                            }}
                        >
                            <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                            {item.text}
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ textAlign: 'center' }}
                >
                    <a
                        href="https://wa.me/917012783442"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold btn-pulse"
                        style={{ fontSize: '0.9rem', padding: '16px 40px', borderRadius: '14px' }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Get a Free Quote on WhatsApp
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

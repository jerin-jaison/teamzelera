import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import sahasraraImg from '../static/image.png'

const projects = [
    {
        name: 'Sahasrara Wellness',
        tag: 'Wellness Platform',
        url: 'https://sahasrara-wellness.onrender.com/',
        image: sahasraraImg,
        tagColor: 'rgba(139, 92, 246, 0.15)',
        tagTextColor: '#a78bfa',
        topGlow: 'rgba(139, 92, 246, 0.1)',
    },
    {
        name: 'Electric Experts',
        tag: 'Business Website',
        url: 'https://electricexperts.online/',
        tagColor: 'rgba(212, 168, 67, 0.12)',
        tagTextColor: 'var(--color-gold)',
        topGlow: 'rgba(212, 168, 67, 0.08)',
    },
]

function ProjectCard({ project, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="premium-card"
            style={{ overflow: 'hidden' }}
        >
            {/* Preview thumbnail */}
            <div
                style={{
                    position: 'relative',
                    height: '220px',
                    overflow: 'hidden',
                    background: `linear-gradient(135deg, #0f0f0f, #161616)`,
                }}
            >
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.9,
                        }}
                    />
                ) : (
                    <iframe
                        src={project.url}
                        title={project.name}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '200%',
                            height: '200%',
                            transformOrigin: 'top left',
                            transform: 'scale(0.5)',
                            border: 'none',
                            pointerEvents: 'none',
                            opacity: 0.85,
                        }}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                    />
                )}
                {/* Gradient overlay */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, var(--color-black-card) 0%, transparent 50%)',
                        pointerEvents: 'none',
                    }}
                />
                {/* Tag */}
                <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span
                        style={{
                            fontSize: '0.7rem',
                            fontWeight: 600,
                            fontFamily: 'var(--font-body)',
                            letterSpacing: '0.06em',
                            background: project.tagColor,
                            color: project.tagTextColor,
                            border: `1px solid ${project.tagTextColor}30`,
                            borderRadius: '100px',
                            padding: '4px 12px',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        {project.tag}
                    </span>
                </div>
            </div>

            {/* Card footer */}
            <div
                style={{
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                }}
            >
                <h3
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--color-white)',
                        letterSpacing: '-0.01em',
                    }}
                >
                    {project.name}
                </h3>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--color-gold)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'gap 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '10px'}
                    onMouseLeave={e => e.currentTarget.style.gap = '6px'}
                >
                    View Live
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                </a>
            </div>
        </motion.div>
    )
}

function PlaceholderCard({ index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: (projects.length + index) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
                background: 'var(--color-black-card)',
                border: '1px dashed rgba(255,255,255,0.07)',
                borderRadius: '20px',
                overflow: 'hidden',
            }}
        >
            <div className="shimmer-placeholder" style={{ height: '220px' }} />
            <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(212,168,67,0.35)',
                    }}
                >
                    More Coming Soon…
                </span>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section
            id="projects"
            style={{ padding: '120px 32px', position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: '-100px',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,168,67,0.03) 0%, transparent 70%)',
                    filter: 'blur(80px)',
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
                        <span className="section-label">✦ Our Work</span>
                    </div>
                    <h2 className="section-heading">
                        Our Work <span>Speaks</span>
                    </h2>
                    <p className="section-subheading" style={{ marginBottom: 0 }}>
                        Real businesses. Real results. See how we've helped clients build their digital presence.
                    </p>
                </motion.div>

                {/* Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
                        gap: '20px',
                    }}
                >
                    {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
                    <PlaceholderCard index={0} />
                    <PlaceholderCard index={1} />
                </div>
            </div>
        </section>
    )
}

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
    useEffect(() => {
        // Smooth scroll for anchor links
        const handleClick = (e) => {
            const href = e.target.closest('a')?.getAttribute('href')
            if (href?.startsWith('#')) {
                e.preventDefault()
                const el = document.querySelector(href)
                if (el) el.scrollIntoView({ behavior: 'smooth' })
            }
        }
        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <Navbar />
                <main>
                    <Hero />
                    <Services />
                    <Projects />
                    <Pricing />
                    <About />
                    <Contact />
                </main>
                <WhatsAppFloat />
            </motion.div>
        </AnimatePresence>
    )
}

export default App

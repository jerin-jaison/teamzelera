import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/917012783442"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="text-white text-2xl" />
        </a>
    )
}

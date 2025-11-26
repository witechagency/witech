import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactButton() {
    return (
        <motion.a
            href="https://wa.me/33600000000" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
        >
            <MessageCircle size={32} fill="white" className="text-white" />
        </motion.a>
    );
}

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[calc(100vw-2.5rem)] max-w-xs sm:w-80 h-[460px] sm:h-[520px] rounded-2xl shadow-2xl overflow-hidden bg-black border border-white/10">
          <iframe
            src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/11/26/20/20251126204939-D73NYFTT.json"
            title="Assistant Wi'Tech"
            className="w-full h-full border-0"
            allow="microphone; camera"
          />
        </div>
      )}

      <motion.button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40 transition-all flex items-center justify-center"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        aria-label="Contacter Wi'Tech"
      >
        <MessageCircle size={26} className="text-white" />
      </motion.button>
    </div>
  );
}

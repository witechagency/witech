import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-80 h-[520px] rounded-2xl shadow-xl overflow-hidden bg-black">
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
        className="bg-[#3b82f6] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <MessageCircle size={28} className="text-white" />
      </motion.button>
    </div>
  );
}

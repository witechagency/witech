import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_SPRING, STAGGER_CONTAINER } from '../lib/framer-configs';
import { useEffect, useState } from 'react';

const phrases = [
    { main: "Votre site web", accent: "livré vite." },
    { main: "Votre vision", accent: "propulsée." },
    { main: "Votre business", accent: "automatisé." }
];

export function Hero() {
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">

            {/* Static space background — replaces canvas animation */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.svg')" }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    variants={STAGGER_CONTAINER(0.2, 0.3)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center"
                >
                    {/* Floating Badge */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                        }}
                        className="mb-10 px-6 py-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 backdrop-blur-xl shadow-2xl relative group overflow-hidden"
                    >
                        <span className="text-emerald-400/70 text-[11px] font-bold uppercase tracking-[0.4em] relative z-10">L'Agence Web Nouvelle Génération</span>
                    </motion.div>

                    {/* Headline with Rotating Text */}
                    <div className="mb-10 min-h-[300px] md:min-h-[400px] flex flex-col items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPhrase}
                                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                            >
                                <h1 className="text-4xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[1] md:leading-[0.85]">
                                    {phrases[currentPhrase].main} <br />
                                    <span className="relative inline-block mt-1 md:mt-2 pb-2 md:pb-4">
                                        <span className="text-gradient animate-shimmer italic">
                                            {phrases[currentPhrase].accent}
                                        </span>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            className="absolute bottom-0 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 rounded-full origin-left shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                                        />
                                    </span>
                                </h1>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
                        }}
                        className="text-xl md:text-2xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed tracking-tight"
                    >
                        Franchissez la vitesse de la lumière avec des solutions web d'élite. Design radical, performance sans compromis.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                        }}
                        className="flex flex-col md:flex-row items-center justify-center gap-8"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="#pricing"
                            className="group relative bg-emerald-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all flex items-center gap-4 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                        >
                            <span className="relative z-10">Lancer la mission</span>
                            <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:witechagency@gmail.com"
                            className="px-12 py-6 rounded-2xl font-bold text-xl text-white border border-white/10 flex items-center gap-4 backdrop-blur-xl transition-all"
                        >
                            <MessageCircle size={22} />
                            Contacter la base
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20">
                <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-transparent"
                    />
                </div>
            </div>
        </section>
    );
}

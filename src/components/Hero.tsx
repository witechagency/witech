import { ArrowRight, ShieldCheck, Globe, Workflow, Award, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PREMIUM_SPRING, STAGGER_CONTAINER } from '../lib/framer-configs';
import { useEffect, useState } from 'react';

const phrases = [
    { lead: "Sites web convertissants", accent: "100% sur-mesure." },
    { lead: "Cloud & Cybersécurité", accent: "Microsoft & Azure." },
    { lead: "Automatisation de vos flux", accent: "et intégration d'outils." }
];

export function Hero() {
    const [currentPhrase, setCurrentPhrase] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }, 3600);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-red-50/30 via-white to-white">

            {/* Subtle background grid & ambient light */}
            <div 
                className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,#000_60%,transparent_100%)]" 
                aria-hidden="true"
            />
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[700px] h-[200px] md:h-[350px] bg-red-500/10 rounded-full blur-[90px] md:blur-[120px] pointer-events-none" 
                aria-hidden="true"
            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
                <motion.div
                    variants={STAGGER_CONTAINER(0.15, 0.2)}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center"
                >
                    {/* Pills matching the official Wi'Tech banner */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 15 },
                            animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                        }}
                        className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-6 md:mb-8"
                    >
                        <span className="bg-[#991B1B] text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xs tracking-wide">
                            Expertise Reconnue
                        </span>
                        <span className="bg-[#991B1B] text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xs tracking-wide">
                            Solutions 100% sur-mesure
                        </span>
                        <span className="bg-[#991B1B] text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-xs tracking-wide">
                            Azure, Sécurité & Automatisations
                        </span>
                    </motion.div>

                    {/* Target audience question */}
                    <motion.p
                        variants={{
                            initial: { opacity: 0, y: 15 },
                            animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                        }}
                        className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-widest text-red-600 mb-3 md:mb-4"
                    >
                        Êtes-vous une PME ? Un indépendant ?
                    </motion.p>

                    {/* Headline with Rotating Text */}
                    <div className="mb-6 md:mb-8 min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex flex-col items-center justify-center">
                        {/* initial={false} : la 1re phrase (et le h1) est visible dès le premier affichage (HTML pré-rendu, SEO, LCP).
                            Les phrases suivantes gardent leur animation d'entrée/sortie. */}
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={currentPhrase}
                                initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -25, filter: "blur(6px)" }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-center"
                            >
                                <span className="block text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight mb-2">
                                    {phrases[currentPhrase].lead}
                                </span>
                                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 tracking-tight leading-[1.1] md:leading-[1.05]">
                                    <span className="relative inline-block pb-2 md:pb-3">
                                        <span className="text-gradient">
                                            {phrases[currentPhrase].accent}
                                        </span>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="absolute bottom-1 left-0 right-0 h-1 md:h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-red-700 rounded-full origin-left shadow-[0_0_15px_rgba(220,38,38,0.35)]"
                                        />
                                    </span>
                                </h1>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Subtitle : visible dès le premier affichage (pas d'opacity 0 au départ), seul un léger glissement */}
                    <motion.p
                        variants={{
                            initial: { y: 12 },
                            animate: { y: 0, transition: { duration: 0.8, delay: 0.3 } }
                        }}
                        className="text-base sm:text-lg md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight px-2"
                    >
                        Développez votre activité avec des solutions numériques pérennes : <strong className="text-gray-900 font-semibold">sites web convertissants</strong>, infrastructure sécurisée <strong className="text-gray-900 font-semibold">Microsoft Azure</strong> et <strong className="text-gray-900 font-semibold">automatisations métier</strong> sur-mesure.
                    </motion.p>

                    {/* Call to Actions */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, scale: 0.95 },
                            animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                        }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-16 w-full sm:w-auto"
                    >
                        <motion.a
                            whileHover={{ scale: 1.03, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            href="#pricing"
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-7 sm:px-9 py-3.5 sm:py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-red-600/25 hover:shadow-2xl hover:shadow-red-600/35"
                        >
                            <span>Démarrer un projet</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.03, y: -3, backgroundColor: "#fafafa" }}
                            whileTap={{ scale: 0.97 }}
                            href="#services"
                            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg text-gray-800 bg-white border border-gray-200 hover:border-gray-300 flex items-center justify-center gap-3 shadow-xs transition-all"
                        >
                            <span>Découvrir l'expertise Azure</span>
                        </motion.a>
                    </motion.div>

                    {/* Trust ribbon / Core pillars */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }
                        }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full pt-6 md:pt-8 border-t border-gray-100"
                    >
                        <div className="flex items-center gap-2 sm:gap-3 justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                            <ShieldCheck className="text-red-600 shrink-0" size={18} />
                            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-700 text-left">Sécurité & Azure</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                            <Globe className="text-red-600 shrink-0" size={18} />
                            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-700 text-left">Sites Convertissants</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                            <Workflow className="text-red-600 shrink-0" size={18} />
                            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-700 text-left">Automatisations Métier</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 justify-center p-2.5 sm:p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                            <Award className="text-red-600 shrink-0" size={18} />
                            <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-700 text-left">Solutions Sur-mesure</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <a 
                href="#services"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Faire défiler"
            >
                <ChevronDown size={22} className="animate-bounce" />
            </a>
        </section>
    );
}

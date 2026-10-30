import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

interface Testimonial {
    author: string;
    role: string;
    company: string;
    category: string;
    quote: string;
    impact: string;
    initials: string;
    accent: string;
}

const testimonials: Testimonial[] = [
    {
        author: "M. Obiang",
        role: "Fondateur",
        company: "Panthères Inside",
        category: "Média Sportif & Haute Disponibilité",
        quote: "Wi'Tech a su capturer l'essence de Panthères Inside. La plateforme est non seulement esthétique mais surtout extrêmement performante : nous absorbons des pics de trafic intenses pendant les matchs sans aucun ralentissement.",
        impact: "+180% d'audience & 0 downtime",
        initials: "PI",
        accent: "from-red-600 to-rose-700"
    },
    {
        author: "Bikel Keumeka",
        role: "Directeur Général",
        company: "BK Engineering",
        category: "Cloud Azure & Ingénierie",
        quote: "L'intégration de notre infrastructure avec Microsoft Azure et les automatisations n8n ont transformé nos processus internes. Un travail d'ingénieur rigoureux, sécurisé et pensé pour durer.",
        impact: "15h économisées par semaine",
        initials: "BK",
        accent: "from-rose-700 to-red-800"
    },
    {
        author: "A. Nguema",
        role: "Head of Digital",
        company: "Soko Commerce",
        category: "E-Commerce & Conversion",
        quote: "Une architecture de conversion redoutable. Le design inspire une confiance immédiate aux acheteurs et notre taux de transformation a bondi dès le premier mois après la mise en ligne.",
        impact: "+42% de taux de conversion",
        initials: "SC",
        accent: "from-red-700 to-rose-900"
    },
    {
        author: "K. Touré",
        role: "Responsable Exploitation",
        company: "KTM Transport",
        category: "Logistique & Portails Métiers",
        quote: "Notre outil précédent était lourd et dépassé. Wi'Tech a modernisé toute notre interface et connecté nos formulaires de fret directement à notre gestion interne. Gain de temps inestimable pour nos équipes.",
        impact: "Traitement 3x plus rapide",
        initials: "KT",
        accent: "from-rose-600 to-red-700"
    },
    {
        author: "C. Mba",
        role: "Rédacteur en Chef",
        company: "Vision du Monde",
        category: "Presse & Média d'Actualités",
        quote: "Une fluidité de lecture remarquable sur mobile et un score Google PageSpeed exemplaire. L'optimisation technique nous a permis d'accroître considérablement notre portée naturelle.",
        impact: "Temps de chargement < 0.8s",
        initials: "VM",
        accent: "from-red-600 to-rose-800"
    },
    {
        author: "S. Laurent",
        role: "Associée",
        company: "Cabinet Synergies",
        category: "Conseil PME & Écosystème Microsoft",
        quote: "Un accompagnement proactif du premier appel jusqu'à la mise en ligne. Wi'Tech comprend les enjeux des PME : pas de jargon inutile, des livrables de grande qualité et une réactivité irréprochable.",
        impact: "100% conformité & sécurité",
        initials: "CS",
        accent: "from-rose-700 to-red-900"
    }
];

export function Testimonials() {
    return (
        <section id="avis" className="py-16 md:py-32 bg-[#F9F7F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200/60 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
                    >
                        <ShieldCheck size={14} className="text-red-600" />
                        Retours d'expérience
                    </motion.div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6 px-2"
                    >
                        La confiance de nos <span className="text-gradient">clients.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                        className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-4"
                    >
                        Des résultats concrets mesurés auprès de PME, médias et dirigeants exigeants.
                    </motion.p>

                    {/* Quick Metric Pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.2 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600 font-semibold"
                    >
                        <div className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-gray-200/80 shadow-xs">
                            <div className="flex text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="font-bold text-gray-900">4.9 / 5</span>
                            <span className="text-gray-400">satisfaction</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200/80 shadow-xs">
                            <Zap size={14} className="text-red-600" />
                            <span className="font-bold text-gray-900">+99.9%</span>
                            <span className="text-gray-400">disponibilité cloud</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200/80 shadow-xs">
                            <TrendingUp size={14} className="text-emerald-600" />
                            <span className="font-bold text-gray-900">100%</span>
                            <span className="text-gray-400">engagements tenus</span>
                        </div>
                    </motion.div>
                </div>

                {/* Reviews Grid */}
                <motion.div 
                    variants={STAGGER_CONTAINER(0.08)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    {testimonials.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                initial: { opacity: 0, y: 25 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            whileHover={{ y: -6, transition: PREMIUM_SPRING }}
                            className="bg-white rounded-2xl md:rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border border-gray-200/80 shadow-xs hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                        >
                            {/* Decorative Corner Glow on hover */}
                            <div className="absolute top-0 right-0 w-28 h-28 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors pointer-events-none" />

                            <div>
                                {/* Rating Stars & Quote Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex gap-1 text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <Quote size={20} className="text-red-500/40 group-hover:text-red-600 transition-colors" />
                                </div>

                                {/* Category Tag */}
                                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-md mb-3">
                                    {item.category}
                                </span>

                                {/* Quote */}
                                <p className="text-gray-700 text-sm sm:text-base font-normal leading-relaxed italic mb-6">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div>
                                {/* Impact pill */}
                                <div className="mb-5 inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-800">
                                    <TrendingUp size={13} className="text-emerald-600 shrink-0" />
                                    <span>{item.impact}</span>
                                </div>

                                {/* Author info */}
                                <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
                                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center font-bold text-white text-sm shadow-sm shrink-0`}>
                                        {item.initials}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-bold text-gray-900 text-sm truncate">{item.author}</p>
                                        <p className="text-gray-400 text-xs truncate">
                                            {item.role} · <span className="text-gray-600 font-medium">{item.company}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Reassurance / Link to Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={SCROLL_VIEW_CONFIG}
                    transition={PREMIUM_SPRING}
                    className="mt-12 md:mt-16 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
                >
                    <div className="text-center sm:text-left">
                        <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Transparence & Qualité</span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1 tracking-tight">
                            Vous souhaitez voir ces réalisations en direct ?
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base font-light mt-1 max-w-xl">
                            Consultez notre galerie complète de sites web, plateformes et intégrations techniques.
                        </p>
                    </div>

                    <Link
                        to="/realisations"
                        className="shrink-0 inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
                    >
                        Voir toutes les réalisations <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

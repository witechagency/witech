import { motion } from 'framer-motion';
import { Compass, Bot, BarChart3, Globe, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

export function Vision() {
    return (
        <section id="vision" className="py-20 md:py-36 bg-[#F9F7F2] relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-300/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-14 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="inline-flex items-center gap-2 bg-white text-red-700 border border-stone-200/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs"
                    >
                        <Compass size={14} className="text-red-600" />
                        Qui sommes-nous · Notre Vision
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
                    >
                        L'alliance du web, de l'automatisation <br className="hidden sm:inline" />
                        <span className="text-gradient">et de la data intelligence.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.15 }}
                        className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
                    >
                        Wi'Tech est née de la rencontre de deux profils techniques complémentaires. Notre conviction : allier l'impact d'une présence web sur-mesure à la puissance de l'automatisation et de l'analyse de données avancée, pour faire grandir les entreprises de façon durable.
                    </motion.p>
                </div>

                {/* Common Core : Web Technologies & Online Presence */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={SCROLL_VIEW_CONFIG}
                    transition={PREMIUM_SPRING}
                    className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-stone-200/80 shadow-xs mb-8 md:mb-10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative z-10">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                                    <Globe size={20} />
                                </div>
                                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
                                    Le Socle Commun aux Deux Fondateurs
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                                Technologies Web & Présence en Ligne d'Exception
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                                Au-delà de nos spécialités respectives, le développement web moderne constitue notre passion commune. Nous concevons des vitrines digitales haute performance, des plateformes e-commerce et des portails sur-mesure : un design premium, un temps de chargement instantané et une architecture pensée pour convertir chaque visiteur.
                            </p>
                        </div>

                        <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0 text-xs font-medium text-gray-700">
                            <span className="bg-stone-50 border border-stone-200/80 px-4 py-2 rounded-xl flex items-center gap-2">
                                <Sparkles size={14} className="text-red-600" />
                                Développement Web Sur-Mesure
                            </span>
                            <span className="bg-stone-50 border border-stone-200/80 px-4 py-2 rounded-xl flex items-center gap-2">
                                <Layers size={14} className="text-red-600" />
                                Sites Convertissants & Portails Clients
                            </span>
                            <span className="bg-stone-50 border border-stone-200/80 px-4 py-2 rounded-xl flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-emerald-600" />
                                Éco-conception & SEO Technique
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* The Two Individual Expert Pillars */}
                <motion.div
                    variants={STAGGER_CONTAINER(0.12)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 md:mb-16"
                >
                    {/* Founder Pillar 1 : Power Platform & Copilot */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 25 },
                            animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                        }}
                        className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200/70 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative group"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:scale-105 transition-transform">
                                    <Bot size={24} />
                                </div>
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-full">
                                    Spécialité 01 · Automatisation
                                </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Écosystème Microsoft & Solutions Copilot
                            </h3>
                            <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">
                                Power Automate · Power Apps · Copilot Studio
                            </p>

                            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-6">
                                Avant de cofonder Wi'Tech, il a évolué au contact direct des environnements Microsoft en entreprise : mise en place de flux d'automatisation complexes avec Power Automate, conception d'applications opérationnelles sous Power Apps et déploiement d'agents conversationnels intelligents avec Microsoft Copilot Studio pour supprimer les frictions manuelles et gagner un temps précieux.
                            </p>
                        </div>

                        <div>
                            <div className="pt-5 border-t border-stone-100 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
                                <span className="bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-xl">Workflows Power Automate</span>
                                <span className="bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-xl">Applications métiers Power Apps</span>
                                <span className="bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-xl">Chatbots Copilot Studio</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Founder Pillar 2 : Machine Learning, Data & Business Intelligence */}
                    <motion.div
                        variants={{
                            initial: { opacity: 0, y: 25 },
                            animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                        }}
                        className="bg-white rounded-3xl p-7 sm:p-10 border border-stone-200/70 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative group"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-gray-800 group-hover:scale-105 transition-transform">
                                    <BarChart3 size={24} />
                                </div>
                                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-full">
                                    Spécialité 02 · Data & IA
                                </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                                Machine Learning, Data & Business Intelligence
                            </h3>
                            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
                                Machine Learning · Business Intelligence (BI) · Exploitation de Données Brutes
                            </p>

                            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-6">
                                Un ancrage approfondi dans l'apprentissage automatique (Machine Learning), l'ingénierie et l'exploitation des données brutes. Son rôle : collecter, nettoyer et modéliser vos données pour construire des tableaux de bord décisionnels en Business Intelligence (BI) et concevoir des modèles prédictifs qui éclairent vos choix stratégiques.
                            </p>
                        </div>

                        <div>
                            <div className="pt-5 border-t border-stone-100 flex flex-wrap gap-2 text-xs font-medium text-gray-600">
                                <span className="bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-xl">Modèles de Machine Learning</span>
                                <span className="bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-xl">Tableaux de bord BI</span>
                                <span className="bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-xl">Exploitation de données brutes</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* The Agency Commitment Manifesto */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={SCROLL_VIEW_CONFIG}
                    transition={PREMIUM_SPRING}
                    className="bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-stone-200/80 shadow-sm"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        <div className="lg:col-span-2">
                            <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
                                Notre Philosophie d'Accompagnement
                            </span>
                            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                                Du code utile, des process automatisés et des données qui ont du sens.
                            </h4>
                            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                                Pas d'intermédiaires superflus ni de jargon inutile : vous travaillez directement avec les créateurs de vos solutions. Chaque projet associe l'élégance du développement web, l'efficacité de l'automatisation et la clarté de la data pour maximiser la rentabilité de votre entreprise.
                            </p>
                        </div>

                        <div className="space-y-3.5 lg:border-l lg:border-stone-100 lg:pl-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                                <span className="text-sm font-semibold text-gray-800">100% Souveraineté & Code propriétaire</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                                <span className="text-sm font-semibold text-gray-800">Décisions éclairées par la Data & la BI</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                                <span className="text-sm font-semibold text-gray-800">Gain de temps direct via l'automatisation</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

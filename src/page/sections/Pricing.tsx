import { Check, ArrowRight, BarChart, Settings, ShieldCheck, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

export function Pricing() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPack, setSelectedPack] = useState('');

    const handlePackClick = (packTitle: string) => {
        setSelectedPack(packTitle);
        setIsFormOpen(true);
    };

    return (
        <section id="pricing" className="py-16 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900"
                    >
                        L'offre <span className="text-gradient">Wi'Tech.</span>
                    </motion.h2>
                </div>

                <motion.div 
                    variants={STAGGER_CONTAINER(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#050505] p-4 sm:p-6 md:p-8 rounded-3xl md:rounded-[3.5rem] shadow-2xl"
                >
                    {/* Left Panel: Main Offer */}
                    <motion.div 
                        variants={{
                            initial: { opacity: 0, x: -30 },
                            animate: { opacity: 1, x: 0, transition: PREMIUM_SPRING }
                        }}
                        className="lg:col-span-5 bg-gradient-to-b from-red-700 via-red-800 to-rose-950 rounded-2xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 text-white flex flex-col h-full relative overflow-hidden shadow-2xl"
                    >
                        {/* Subtle patterns */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        
                        <div className="relative z-10 mb-8">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-white/20 shadow-sm">
                                <img src="/witech-logo.svg" alt="Logo Wi'Tech" className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg" />
                            </div>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">Le Site Premium</h3>
                            <p className="text-white/90 text-base sm:text-xl font-light leading-relaxed mb-6 sm:mb-10">
                                Une offre conçue pour <span className="font-bold text-white underline decoration-white/40 decoration-2 underline-offset-4">convertir & durer</span>. Pensée pour les PME et indépendants.
                            </p>
                            <button 
                                onClick={() => handlePackClick('Site Premium')}
                                className="w-full sm:w-auto justify-center bg-white text-red-900 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center gap-3 hover:bg-gray-100 transition-all group shadow-xl cursor-pointer"
                            >
                                SE RENSEIGNER <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative z-10 space-y-10 mt-auto">
                            <div>
                                <h4 className="font-bold text-xl mb-6 flex items-center gap-2 uppercase tracking-widest text-xs opacity-80">
                                    Recherche & Stratégie
                                </h4>
                                <ul className="space-y-4">
                                    {[
                                        "Analyse de votre marché & cible",
                                        "Architecture de conversion optimisée",
                                        "Copywriting orienté résultats"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-base text-white bg-black/20 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold text-xl mb-6 uppercase tracking-widest text-xs opacity-80">Design, Éco-conception & Azure</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Design UI sur-mesure & moderne",
                                        "Hébergement rapide & sécurisé Azure",
                                        "Performance & optimisation conversion"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-base text-white bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Panel: Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Top: Value Pillars (No site screenshots) */}
                        <motion.div 
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
                        >
                            {[
                                { title: "100% Propriétaire", desc: "Code sur-mesure & sans dépendance", icon: ShieldCheck },
                                { title: "Cloud Microsoft", desc: "Hébergement Azure souverain & rapide", icon: Cloud },
                                { title: "Flux n8n & IA", desc: "Automatisations métiers intégrées", icon: Zap }
                            ].map((pillar, i) => {
                                const IconComponent = pillar.icon;
                                return (
                                    <div key={i} className="rounded-2xl md:rounded-[2rem] bg-white/5 border border-white/10 p-5 sm:p-6 flex flex-col justify-between group hover:border-red-500/40 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <IconComponent size={20} />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold text-base sm:text-lg mb-1">{pillar.title}</h5>
                                            <p className="text-white/50 text-xs sm:text-sm font-light leading-snug">{pillar.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </motion.div>

                        {/* Middle: Custom Tailored Card (No price) */}
                        <motion.div 
                            variants={{
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                            }}
                            className="md:col-span-2 bg-white rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group cursor-default"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-50 transition-colors duration-700" />
                            
                            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-3">Accompagnement</p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black">100% Sur-mesure.</h4>
                                    <p className="text-gray-500 font-normal text-sm sm:text-base md:text-lg mt-2 max-w-lg leading-relaxed">
                                        Chaque projet est dimensionné selon vos réels objectifs : architecture Azure, conversion web et automatisations.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => handlePackClick('Accompagnement Sur-mesure')}
                                    className="shrink-0 self-start sm:self-center bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg shadow-red-600/25 transition-all group/btn cursor-pointer"
                                >
                                    Se renseigner <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Bottom: Sub-cards (Upsells) */}
                        <motion.div 
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            whileHover={{ y: -10, transition: PREMIUM_SPRING }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-white/10 flex flex-col h-full group"
                        >
                            <div className="h-28 sm:h-40 bg-white/5 rounded-xl sm:rounded-[2rem] mb-6 sm:mb-8 overflow-hidden relative border border-white/5 flex items-center justify-center">
                                <BarChart className="text-red-500 opacity-60 group-hover:scale-110 transition-transform duration-500" size={48} />
                            </div>
                            <h4 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">SEO & Visibilité</h4>
                            <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-10">Optimisation technique et sémantique pour générer des leads qualifiés.</p>
                            <div className="mt-auto">
                                <button
                                    onClick={() => handlePackClick('SEO & Visibilité')}
                                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl shadow-red-600/30 transition-all cursor-pointer"
                                >
                                    Se renseigner <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            whileHover={{ y: -10, transition: PREMIUM_SPRING }}
                            className="bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-white/10 flex flex-col h-full group"
                        >
                            <div className="h-28 sm:h-40 bg-white/5 rounded-xl sm:rounded-[2rem] mb-6 sm:mb-8 overflow-hidden flex items-center justify-center relative border border-white/5">
                                <Settings className="text-red-500 opacity-60 group-hover:rotate-90 transition-transform duration-700" size={48} />
                            </div>
                            <h4 className="text-white font-bold text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">Sécurité Azure & Support</h4>
                            <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-10">Maintien en conditions opérationnelles, sauvegardes et sécurité cloud 24/7.</p>
                            <div className="mt-auto">
                                <button
                                    onClick={() => handlePackClick('Sécurité Azure & Support')}
                                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl shadow-xl shadow-red-600/30 transition-all cursor-pointer"
                                >
                                    Se renseigner <ArrowRight size={14} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Contact Form Modal */}
            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                packName={selectedPack}
            />
        </section>
    );
}

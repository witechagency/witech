import { Check, ArrowRight, BarChart, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';
import { cn } from '../../lib/utils';

export function Pricing() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPack, setSelectedPack] = useState('');

    const handlePackClick = (packTitle: string) => {
        setSelectedPack(packTitle);
        setIsFormOpen(true);
    };

    return (
        <section id="pricing" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900"
                    >
                        L'offre <span className="text-gradient">Wi'Tech.</span>
                    </motion.h2>
                </div>

                <motion.div 
                    variants={STAGGER_CONTAINER(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#050505] p-6 rounded-[3.5rem] shadow-2xl"
                >
                    {/* Left Panel: Main Offer */}
                    <motion.div 
                        variants={{
                            initial: { opacity: 0, x: -30 },
                            animate: { opacity: 1, x: 0, transition: PREMIUM_SPRING }
                        }}
                        className="lg:col-span-5 bg-gradient-to-b from-[#D4AF37] to-[#8A6D3B] rounded-[2.5rem] p-10 text-white flex flex-col h-full relative overflow-hidden"
                    >
                        {/* Subtle patterns */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="relative z-10 mb-8">
                            <div className="w-14 h-14 bg-black/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                                <span className="font-bold text-3xl">W</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Le Site Premium</h3>
                            <p className="text-white/80 text-xl font-light leading-relaxed mb-10">
                                Une offre conçue pour <span className="font-bold text-white">performer</span>. Pas seulement pour exister.
                            </p>
                            <button 
                                onClick={() => handlePackClick('Site Premium')}
                                className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-gray-100 transition-all group"
                            >
                                RÉSERVER UN APPEL <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="relative z-10 space-y-10 mt-auto">
                            <div>
                                <h4 className="font-bold text-xl mb-6 flex items-center gap-2 uppercase tracking-widest text-xs opacity-70">
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
                                <h4 className="font-bold text-xl mb-6 uppercase tracking-widest text-xs opacity-70">Design & Développement</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Design UI premium & sur-mesure",
                                        "Intégration haute performance",
                                        "Animations & micro-interactions"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-base text-white bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/5">
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
                        {/* Top: Image Grid (Réalisations) */}
                        <motion.div 
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            className="md:col-span-2 grid grid-cols-3 gap-4 h-56"
                        >
                            {[
                                { img: "/Bikel.png", color: "bg-blue-500/20" },
                                { img: "/KTM.png", color: "bg-orange-500/20" },
                                { img: "/VDM.png", color: "bg-indigo-500/20" }
                            ].map((item, i) => (
                                <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10">
                                    <img src={item.img} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 grayscale group-hover:grayscale-0" alt="" />
                                    <div className={cn("absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity", item.color)} />
                                </div>
                            ))}
                        </motion.div>

                        {/* Middle: Price Tag Card */}
                        <motion.div 
                            variants={{
                                initial: { opacity: 0, scale: 0.9 },
                                animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                            }}
                            className="md:col-span-2 bg-white rounded-[3rem] p-12 flex flex-col justify-center relative overflow-hidden group cursor-default"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-yellow-100 transition-colors duration-700" />
                            
                            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">Investissement</p>
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                                <span className="text-gray-400 font-medium text-lg md:text-2xl italic">À partir de</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl md:text-9xl font-bold tracking-tighter text-black">700€</span>
                                    <span className="text-gray-400 font-bold text-xl md:text-2xl">HT</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bottom: Sub-cards (Upsells) */}
                        <motion.div 
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            whileHover={{ y: -10, transition: PREMIUM_SPRING }}
                            className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/10 flex flex-col h-full group"
                        >
                            <div className="h-40 bg-white/5 rounded-[2rem] mb-8 overflow-hidden relative border border-white/5 flex items-center justify-center">
                                <BarChart className="text-[#D4AF37] opacity-50 group-hover:scale-110 transition-transform duration-500" size={64} />
                            </div>
                            <h4 className="text-white font-bold text-2xl mb-3 tracking-tight">SEO & Visibilité</h4>
                            <p className="text-white/40 text-lg font-light leading-relaxed mb-10">Optimisation complète pour dominer les résultats Google.</p>
                            <div className="mt-auto">
                                <span className="inline-block bg-[#D4AF37] text-black text-sm font-bold px-6 py-3 rounded-2xl shadow-xl shadow-[#D4AF37]/20">
                                    Sur devis
                                </span>
                            </div>
                        </motion.div>

                        <motion.div 
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                            whileHover={{ y: -10, transition: PREMIUM_SPRING }}
                            className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/10 flex flex-col h-full group"
                        >
                            <div className="h-40 bg-white/5 rounded-[2rem] mb-8 overflow-hidden flex items-center justify-center relative border border-white/5">
                                <Settings className="text-[#D4AF37] opacity-50 group-hover:rotate-90 transition-transform duration-700" size={64} />
                            </div>
                            <h4 className="text-white font-bold text-2xl mb-3 tracking-tight">Maintenance & Support</h4>
                            <p className="text-white/40 text-lg font-light leading-relaxed mb-10">Gardez votre site à jour, sécurisé et performant 24/7.</p>
                            <div className="mt-auto">
                                <span className="inline-block bg-[#D4AF37] text-black text-sm font-bold px-6 py-3 rounded-2xl shadow-xl shadow-[#D4AF37]/20">
                                    Sur devis
                                </span>
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

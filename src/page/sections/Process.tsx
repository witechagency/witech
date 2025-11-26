import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: "Analyse",
        description: "Nous étudions vos besoins et définissons ensemble la meilleure stratégie.",
        icon: Search
    },
    {
        title: "Conception",
        description: "Création des maquettes et validation du design de votre futur site.",
        icon: PenTool
    },
    {
        title: "Développement",
        description: "Intégration technique et développement des fonctionnalités.",
        icon: Code
    },
    {
        title: "Livraison",
        description: "Mise en ligne, formation et suivi de votre projet.",
        icon: Rocket
    }
];

export function Process() {
    return (
        <section id="process" className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Notre <span className="text-gradient">Processus</span></h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Une méthodologie éprouvée pour des résultats garantis.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 -translate-y-1/2 z-0 origin-left"
                    />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="bg-gray-900/80 backdrop-blur-xl p-6 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 text-center h-full hover:-translate-y-2">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                                        <step.icon size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

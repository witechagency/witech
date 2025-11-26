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
        <section id="process" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Une méthodologie éprouvée pour des résultats garantis.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

                    <div className="grid md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-2xl text-center"
                            >
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-600/20">
                                    <step.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

import { Zap, Shield, Headset, Rocket } from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { motion } from 'framer-motion';

const advantages = [
    {
        title: "Rapidité d'exécution",
        description: "Votre site en ligne en un temps record grâce à nos processus optimisés.",
        icon: Zap
    },
    {
        title: "Qualité Premium",
        description: "Design moderne et code propre respectant les derniers standards.",
        icon: Shield
    },
    {
        title: "Support Réactif",
        description: "Une équipe à votre écoute pour vous accompagner à chaque étape.",
        icon: Headset
    },
    {
        title: "Performance",
        description: "Des sites ultra-rapides optimisés pour le référencement naturel.",
        icon: Rocket
    }
];

export function Advantages() {
    return (
        <section id="advantages" className="py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Pourquoi choisir <span className="text-gradient">Wi'Tech</span> ?
                    </motion.h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Nous allions expertise technique et vision créative pour votre réussite.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard
                                {...advantage}
                                className="bg-white/80 border-none hover:bg-white hover:shadow-2xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

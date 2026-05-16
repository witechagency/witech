import { Zap, Shield, Headset, Rocket } from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { motion } from 'framer-motion';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

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
        <section id="advantages" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8"
                    >
                        Pourquoi choisir <span className="text-gradient">Wi'Tech</span> ?
                    </motion.h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        L'alliance de l'expertise technique et de la vision créative pour votre succès.
                    </p>
                </div>

                <motion.div 
                    variants={STAGGER_CONTAINER(0.1)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                            }}
                        >
                            <ServiceCard
                                {...advantage}
                                className="border-transparent"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

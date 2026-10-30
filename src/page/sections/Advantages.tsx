import { ShieldCheck, Cloud, Target, Headset } from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';
import { motion } from 'framer-motion';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

const advantages = [
    {
        title: "Approche Responsable & Éco-conçue",
        description: "Des solutions sobres, optimisées et durables, garantissant une empreinte carbone maîtrisée et un chargement instantané.",
        icon: ShieldCheck
    },
    {
        title: "Expertise Azure & Microsoft",
        description: "Une sécurisation cloud de haut niveau pour vos données et vos identités professionnelles aux normes du marché.",
        icon: Cloud
    },
    {
        title: "Solutions 100% Sur-mesure",
        description: "Une réponse ciblée aux besoins réels des PME et indépendants, orientée conversion et rentabilité de votre investissement.",
        icon: Target
    },
    {
        title: "Accompagnement Réactif & Humain",
        description: "Une équipe dédiée qui vous conseille, déploie vos outils et assure un suivi rigoureux à chaque étape de votre croissance.",
        icon: Headset
    }
];

export function Advantages() {
    return (
        <section id="advantages" className="py-16 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 md:mb-8"
                    >
                        Pourquoi choisir <span className="text-gradient">Wi'Tech</span> ?
                    </motion.h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
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

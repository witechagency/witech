import { Zap, Shield, Headset, Rocket } from 'lucide-react';
import { ServiceCard } from '../../components/ServiceCard';

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
        <section id="advantages" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir Wi'Tech ?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Nous allions expertise technique et vision créative pour votre réussite.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((advantage, index) => (
                        <ServiceCard
                            key={index}
                            {...advantage}
                            className="bg-white"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

import { Search, PenTool, Code, Rocket } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { PREMIUM_SPRING, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';
import { cn } from '../../lib/utils';

const steps = [
    {
        number: "01",
        title: "Analyse & Stratégie",
        description: "Nous étudions vos besoins et votre marché pour définir une stratégie numérique sur-mesure et efficace.",
        icon: Search,
        color: "from-red-600 to-rose-600"
    },
    {
        number: "02",
        title: "Conception & Design",
        description: "Création d'une interface unique et premium. Nous validons chaque détail visuel avec vous pour garantir une expérience utilisateur optimale.",
        icon: PenTool,
        color: "from-rose-600 to-red-700"
    },
    {
        number: "03",
        title: "Développement & Sécurisation",
        description: "Intégration technique haute performance et déploiement sécurisé Azure respectant les normes les plus strictes.",
        icon: Code,
        color: "from-red-700 to-red-900"
    },
    {
        number: "04",
        title: "Lancement & Suivi",
        description: "Mise en ligne optimisée, formation à vos outils et suivi des performances pour garantir la réussite de votre projet.",
        icon: Rocket,
        color: "from-red-600 to-rose-500"
    }
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" className="py-16 md:py-40 bg-[#0A0A0A] text-white relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/5 rounded-full blur-[90px] md:blur-[140px] -z-0" />
            <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-800/5 rounded-full blur-[90px] md:blur-[140px] -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                    >
                        <h2 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-4 md:mb-8">
                            Notre <span className="text-gradient">Méthode.</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed px-2">
                            Un accompagnement rigoureux et transparent pour transformer votre projet en réussite concrète.
                        </p>
                    </motion.div>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* The Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    <motion.div 
                        style={{ scaleY }}
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-rose-500 to-transparent -translate-x-1/2 origin-top hidden md:block z-20"
                    />

                    {/* Steps */}
                    <div className="space-y-16 md:space-y-40">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={PREMIUM_SPRING}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-center gap-8 md:gap-12",
                                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Step Content */}
                                <div className="flex-1 w-full text-center md:text-left relative pt-6 md:pt-0">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 mb-4 md:hidden">
                                        <step.icon className="text-red-500" size={24} />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-6 tracking-tight flex items-center gap-3 justify-center md:justify-start">
                                        <span className="text-white/10 font-black text-5xl md:text-8xl absolute -top-4 md:-top-16 left-0 right-0 md:left-auto md:right-auto pointer-events-none select-none z-0">
                                            {step.number}
                                        </span>
                                        <span className="relative z-10">{step.title}</span>
                                    </h3>
                                    <p className="text-white/50 text-sm sm:text-base md:text-xl font-light leading-relaxed relative z-10 px-2 md:px-0">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Central Node (Desktop) */}
                                <div className="relative z-30 hidden md:block">
                                    <div className="w-16 h-16 rounded-full bg-[#111111] border-2 border-white/15 flex items-center justify-center hover:border-red-600 transition-colors duration-500 shadow-[0_0_25px_rgba(220,38,38,0.2)]">
                                        <step.icon className="text-red-500" size={28} />
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

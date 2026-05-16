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
        color: "from-blue-500 to-cyan-500"
    },
    {
        number: "02",
        title: "Conception & Design",
        description: "Création d'une interface unique et premium. Nous validons chaque détail visuel avec vous pour garantir une expérience utilisateur optimale.",
        icon: PenTool,
        color: "from-purple-500 to-pink-500"
    },
    {
        number: "03",
        title: "Développement",
        description: "Intégration technique haute performance avec les standards les plus récents pour garantir rapidité et sécurité.",
        icon: Code,
        color: "from-orange-500 to-red-500"
    },
    {
        number: "04",
        title: "Lancement & Suivi",
        description: "Mise en ligne optimisée, formation à vos outils et suivi des performances pour garantir la réussite de votre projet.",
        icon: Rocket,
        color: "from-emerald-500 to-green-500"
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
        <section id="process" className="py-40 bg-[#050505] text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                    >
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                            Notre <span className="text-gradient">Méthode.</span>
                        </h2>
                        <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Un accompagnement étape par étape pour transformer votre vision en une réalité numérique d'exception.
                        </p>
                    </motion.div>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* The Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    <motion.div 
                        style={{ scaleY }}
                        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] to-transparent -translate-x-1/2 origin-top hidden md:block z-20"
                    />

                    {/* Steps */}
                    <div className="space-y-24 md:space-y-40">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={PREMIUM_SPRING}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-center gap-12",
                                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Step Content */}
                                <div className="flex-1 w-full text-center md:text-left">
                                    <div className={cn(
                                        "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 md:hidden",
                                        "bg-gradient-to-br"
                                    )}>
                                        <step.icon className="text-[#D4AF37]" size={32} />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight flex items-center gap-4 justify-center md:justify-start">
                                        <span className="text-white/10 font-black text-6xl md:text-8xl absolute -top-10 md:-top-16 left-0 right-0 md:left-auto md:right-auto pointer-events-none select-none z-0">
                                            {step.number}
                                        </span>
                                        <span className="relative z-10">{step.title}</span>
                                    </h3>
                                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed relative z-10">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Central Node (Desktop) */}
                                <div className="relative z-30 hidden md:block">
                                    <div className="w-16 h-16 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                                        <step.icon className="text-[#D4AF37]" size={28} />
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

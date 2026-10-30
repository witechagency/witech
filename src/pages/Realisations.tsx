import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactButton } from '../components/ContactButton';
import { PREMIUM_SPRING, STAGGER_CONTAINER } from '../lib/framer-configs';
import { cn } from '../lib/utils';

const projects = [
    {
        title: "Soko Commerce",
        category: "Plateforme E-Commerce",
        description: "Première marketplace locale réinventée : paiements sécurisés, fluidité d'achat sur mobile et back-office optimisé.",
        image: "/sokocommerce.png",
        link: "#",
        badge: "En projet",
        color: "from-green-600/20 to-emerald-600/20",
        tags: ["E-Commerce", "En projet", "Mobile First"]
    },
    {
        title: "Panthères Inside",
        category: "Média Sportif National",
        description: "Portail d'actualités sportives haute fréquence capable d'absorber les pics de trafic lors des rencontres internationales.",
        image: "/pantheresinside.png",
        link: "https://pantheresinside.com/",
        color: "from-purple-600/20 to-pink-600/20",
        tags: ["Média", "Haute Disponibilité", "Azure Hosting"]
    },
    {
        title: "BK Engineering",
        category: "Cabinet d'Ingénierie & Stratégie",
        description: "Plateforme institutionnelle avec présentation de portefeuille, intégration cloud Microsoft et automatisation de formulaires.",
        image: "/Bikel.png",
        link: "https://bikelkeumeka.fr/",
        color: "from-blue-600/20 to-cyan-600/20",
        tags: ["Corporate", "Cloud Azure", "n8n"]
    },
    {
        title: "KTM Transport",
        category: "Logistique & Fret International",
        description: "Interface client pour demande d'expéditions, suivi de cargaisons et interfaçage direct avec les équipes de gestion.",
        image: "/KTM.png",
        link: "https://site-katako-ci7k.vercel.app/",
        color: "from-orange-600/20 to-red-600/20",
        tags: ["Logistique", "Portail Client", "Automatisation"]
    },
    {
        title: "Vision du Monde",
        category: "Presse & Média d'Actualités",
        description: "Site d'actualités généralistes et d'analyses avec chargement instantané (< 0.8s) et expérience de lecture épurée.",
        image: "/VDM.png",
        link: "https://vision-du-monde.vercel.app/",
        color: "from-indigo-600/20 to-blue-600/20",
        tags: ["Média", "SEO Avancé", "Performance"]
    },
    {
        title: "Wi'Tech",
        category: "Agence Web & Cloud B2B",
        description: "Notre propre vitrine nouvelle génération conçue avec React, Tailwind 4, animations Framer Motion et hébergement Azure.",
        image: "/Witech.png",
        link: "https://witechagency.com/",
        color: "from-red-600/20 to-rose-600/20",
        tags: ["Agence", "D.A Rouge & Blanc", "Azure"]
    },
];

export function Realisations() {
    return (
        <div className="min-h-screen bg-[#F9F7F2] text-gray-900">
            <Header />

            <main className="pt-28 md:pt-36 pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Breadcrumb / Back button */}
                    <div className="mb-6 md:mb-8">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-red-600 transition-colors"
                        >
                            <ArrowLeft size={16} /> Retour à l'accueil
                        </Link>
                    </div>

                    {/* Page Hero */}
                    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200/60 px-4 py-1.5 rounded-full mb-4"
                        >
                            Galerie de Projets
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                        >
                            Nos <span className="text-gradient">Réalisations.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ ...PREMIUM_SPRING, delay: 0.2 }}
                            className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed"
                        >
                            Explorez nos plateformes web, architectures cloud et automatisations conçues sur-mesure pour nos partenaires et clients.
                        </motion.p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={STAGGER_CONTAINER(0.08)}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                variants={{
                                    initial: { opacity: 0, y: 30 },
                                    animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                                }}
                                whileHover={{ y: -8, transition: PREMIUM_SPRING }}
                                className="bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col group"
                            >
                                {/* Image / Mockup preview */}
                                <div className="relative aspect-[16/11] bg-gray-50 flex items-center justify-center p-4 overflow-hidden border-b border-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        className="w-full h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        project.color
                                    )} />
                                    {project.badge && (
                                        <div className="absolute top-3 right-3 z-10">
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-amber-700 backdrop-blur-md border border-amber-200/80 shadow-xs">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                {project.badge}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 mb-2">
                                            <span className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                                                {project.category}
                                            </span>
                                            {project.link !== '#' && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-red-600 transition-colors"
                                                    aria-label={`Visiter ${project.title}`}
                                                >
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {project.tags.map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="text-[10px] font-semibold bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {project.link !== '#' ? (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-red-600 text-white font-bold text-sm py-3 rounded-xl transition-colors duration-200"
                                            >
                                                Voir le site <ArrowUpRight size={16} />
                                            </a>
                                        ) : (
                                            <div className="w-full text-center text-xs text-amber-800 bg-amber-50/90 border border-amber-200/80 py-3 font-semibold rounded-xl flex items-center justify-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                {project.badge || "En projet"}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom CTA */}
                    <div className="mt-16 md:mt-24 text-center bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 tracking-tight">
                            Vous avez un projet en tête ?
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto font-light">
                            Que ce soit pour un site web performant, une infrastructure Cloud Azure ou l'automatisation de vos flux, échangeons ensemble.
                        </p>
                        <Link
                            to="/#pricing"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-red-600/30 transition-all hover:scale-105"
                        >
                            Se renseigner sur nos solutions
                        </Link>
                    </div>
                </div>
            </main>

            <ContactButton />
            <Footer />
        </div>
    );
}

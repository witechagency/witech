import { motion } from 'framer-motion';
import { ArrowUpRight, Quote, Play } from 'lucide-react';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';
import { cn } from '../../lib/utils';

const projects = [
    {
        title: "Soko Commerce",
        category: "Marketplace Vinted x Leboncoin",
        image: "/sokocommerce.png",
        link: "#",
        badge: "Prototype revendu",
        className: "order-1",
        color: "from-green-600/20 to-emerald-600/20"
    },
    {
        title: "Panthères Inside",
        category: "Média & Championnat Live",
        image: "/pantheresinside.png",
        link: "https://pantheresinside.com/",
        className: "order-2",
        color: "from-purple-600/20 to-pink-600/20"
    },
    {
        title: "BK Engineering",
        category: "Site Web & Cloud Azure",
        image: "/Bikel.png",
        link: "https://bikelkeumeka.fr/",
        className: "order-3",
        color: "from-blue-600/20 to-cyan-600/20"
    },
    {
        title: "KTM Transport",
        category: "Logistics",
        image: "/KTM.png",
        link: "https://katakotransportmessagerie.com/",
        className: "order-4 md:order-6",
        color: "from-orange-600/20 to-red-600/20"
    },
    {
        title: "Vision du monde",
        category: "Média (Sortie WordPress)",
        image: "/VDM.png",
        link: "https://vision-du-monde.vercel.app/",
        className: "order-7 md:order-7",
        color: "from-indigo-600/20 to-blue-600/20"
    },
    {
        title: "Wi'Tech",
        category: "Agence Web",
        image: "/Witech.png",
        link: "https://witechagency.com/",
        className: "order-8 md:order-8",
        color: "from-yellow-600/20 to-orange-600/20"
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-16 md:py-32 bg-[#F9F7F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 md:mb-8 px-2 sm:px-4"
                    >
                        Inside <span className="text-gradient">Wi'Tech.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                        className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-4"
                    >
                        Plongez dans l'univers de nos réalisations les plus marquantes.
                    </motion.p>
                </div>

                <motion.div 
                    variants={STAGGER_CONTAINER(0.05)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 auto-rows-auto md:auto-rows-[minmax(320px,auto)]"
                >
                    {/* Row 1: The Top 3 */}
                    <ProjectCard project={projects[0]} />
                    <ProjectCard project={projects[1]} />
                    <ProjectCard project={projects[2]} />

                    {/* Row 2: Testimonial + Wide Logo */}
                    <motion.div 
                        variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                        }}
                        className="order-5 md:order-4 col-span-2 md:col-span-1 bg-white rounded-2xl md:rounded-[2.5rem] p-5 sm:p-8 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[180px] sm:min-h-[240px] md:min-h-[320px]"
                    >
                        <div className="flex-1">
                            <Quote className="text-red-600 mb-2 sm:mb-4" size={22} />
                            <p className="text-gray-800 text-xs sm:text-base md:text-lg font-medium leading-relaxed italic">
                                "Wi'Tech nous a livré une plateforme ultra-performante et un back-office sur-mesure complet : API championnats, scores en direct et gestion des joueurs. Tout tourne sans faille."
                            </p>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-50">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-50 rounded-full flex items-center justify-center font-bold text-red-600 text-xs shrink-0">
                                LN
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-xs sm:text-sm">Leans</p>
                                <p className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-widest font-bold">Fondateur · Panthères Inside</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                        }}
                        className="order-6 md:order-5 col-span-2 md:col-span-2 bg-gradient-to-br from-red-600 via-rose-600 to-red-800 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-[140px] sm:min-h-[200px] md:min-h-[320px] group cursor-default relative overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="text-center relative z-10 flex flex-col items-center">
                            <div className="flex items-center gap-2 sm:gap-4">
                                <img src="/witech-logo.svg" alt="Wi'Tech Logo" className="w-8 h-8 sm:w-14 sm:h-14 md:w-20 md:h-20 drop-shadow-md" />
                                <span className="text-white text-3xl sm:text-5xl md:text-8xl font-bold tracking-tighter">Wi'Tech.</span>
                            </div>
                            <div className="h-1.5 w-12 sm:w-16 bg-white mx-auto mt-2 sm:mt-4 rounded-full group-hover:w-24 sm:group-hover:w-32 transition-all duration-700" />
                        </div>
                    </motion.div>

                    {/* Row 3: Other Projects */}
                    <ProjectCard project={projects[3]} />
                    <ProjectCard project={projects[4]} />
                    <ProjectCard project={projects[5]} />
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: any }) {
    const isClickable = Boolean(project.link && project.link !== '#');

    return (
        <motion.div
            variants={{
                initial: { opacity: 0, scale: 0.9, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0, transition: PREMIUM_SPRING }
            }}
            whileHover={isClickable ? { y: -6, transition: PREMIUM_SPRING } : undefined}
            className={cn(
                "group relative overflow-hidden rounded-2xl md:rounded-[2.5rem] bg-white border border-gray-200/80 shadow-sm aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[320px] flex flex-col justify-between transition-shadow duration-300",
                isClickable ? "cursor-pointer hover:shadow-xl" : "cursor-default",
                project.className
            )}
            onClick={() => isClickable && window.open(project.link, '_blank')}
        >
            {/* Mockup Container: Entier, fidèle et non rogné */}
            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-3 md:p-5 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className={cn(
                        "w-full h-full object-contain drop-shadow-sm transition-transform duration-700",
                        isClickable && "group-hover:scale-105"
                    )}
                />
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-700 pointer-events-none rounded-2xl md:rounded-[2.5rem]",
                    isClickable && "group-hover:opacity-20",
                    project.color
                )} />
            </div>

            {/* Badge statut (ex: En projet) */}
            {project.badge && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gray-900/85 text-amber-300 backdrop-blur-md border border-amber-500/30 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {project.badge}
                    </span>
                </div>
            )}
            
            {/* Dégradé sombre uniquement en bas pour mettre en valeur les libellés */}
            <div className="absolute inset-x-0 bottom-0 h-14 sm:h-20 md:h-24 bg-gradient-to-t from-black/85 via-black/35 to-transparent rounded-b-2xl md:rounded-b-[2.5rem] pointer-events-none" />

            {project.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
                        <Play className="text-white fill-white translate-x-0.5" size={18} />
                    </div>
                </div>
            )}

            {/* Label & Titre */}
            <div className="relative z-10 p-2.5 sm:p-4 md:p-6 mt-auto">
                <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5 sm:mb-1 truncate">
                    {project.category}
                </p>
                <div className="flex justify-between items-center gap-1">
                    <h3 className="text-white text-xs sm:text-base md:text-xl font-bold tracking-tight truncate">
                        {project.title}
                    </h3>
                    {isClickable && (
                        <ArrowUpRight className="text-white shrink-0 opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                    )}
                </div>
            </div>

            {/* Bordure rouge Wi'Tech au hover uniquement si cliquable */}
            {isClickable && (
                <div className="absolute inset-0 border-2 border-red-600/0 group-hover:border-red-600/50 rounded-2xl md:rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
            )}
        </motion.div>
    );
}

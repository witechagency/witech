import { motion } from 'framer-motion';
import { ArrowUpRight, Quote, Play } from 'lucide-react';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';
import { cn } from '../../lib/utils';

const projects = [
    {
        title: "Soko Commerce",
        category: "E-commerce Platform",
        image: "/sokocommerce.png",
        link: "https://sokocommerce.com/",
        className: "md:col-span-1",
        color: "from-green-600/20 to-emerald-600/20"
    },
    {
        title: "Panthères Inside",
        category: "Sports Media",
        image: "/pantheresinside.png",
        link: "https://pantheresinside.com/",
        className: "md:col-span-1",
        color: "from-purple-600/20 to-pink-600/20"
    },
    {
        title: "BK Engineering",
        category: "Corporate Strategy",
        image: "/Bikel.png",
        link: "https://bikelkeumeka.fr/",
        className: "md:col-span-1",
        color: "from-blue-600/20 to-cyan-600/20"
    },
    {
        title: "KTM Transport",
        category: "Logistics",
        image: "/KTM.png",
        link: "https://site-katako-ci7k.vercel.app/",
        className: "md:col-span-1",
        color: "from-orange-600/20 to-red-600/20"
    },
    {
        title: "Vision du monde",
        category: "News Platform",
        image: "/VDM.png",
        link: "https://vision-du-monde.vercel.app/",
        className: "md:col-span-1",
        color: "from-indigo-600/20 to-blue-600/20"
    },
    {
        title: "Wi'Tech",
        category: "Agence Web",
        image: "/Witech.png",
        link: "https://witechagency.com/",
        className: "md:col-span-1",
        color: "from-yellow-600/20 to-orange-600/20"
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-[#F9F7F2] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8 px-4"
                    >
                        Inside <span className="text-gradient">Wi'Tech.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-6"
                    >
                        Plongez dans l'univers de nos réalisations les plus marquantes.
                    </motion.p>
                </div>

                <motion.div 
                    variants={STAGGER_CONTAINER(0.05)}
                    initial="initial"
                    whileInView="animate"
                    viewport={SCROLL_VIEW_CONFIG}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(320px,auto)]"
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
                        className="bg-white rounded-[2.5rem] p-8 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[320px]"
                    >
                        <div className="flex-1">
                            <Quote className="text-[#D4AF37] mb-4" size={24} />
                            <p className="text-gray-800 text-sm md:text-lg font-medium leading-relaxed italic">
                                "Wi'Tech a su capturer l'essence de Panthères Inside. La plateforme est non seulement esthétique mais surtout extrêmement performante, un vrai game-changer pour notre média sportif."
                            </p>
                        </div>
                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-50">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-[#D4AF37] text-xs">
                                PI
                            </div>
                            <div>
                                <p className="font-bold text-gray-900 text-sm">Fondateur</p>
                                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Panthères Inside</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1, transition: PREMIUM_SPRING }
                        }}
                        className="md:col-span-2 bg-gradient-to-br from-[#D4AF37] to-[#8A6D3B] rounded-[2.5rem] flex items-center justify-center p-12 group cursor-default relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="text-center relative z-10">
                            <span className="text-black text-6xl md:text-8xl font-bold tracking-tighter">Wi'Tech.</span>
                            <div className="h-1.5 w-16 bg-black mx-auto mt-4 rounded-full group-hover:w-32 transition-all duration-700" />
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
    return (
        <motion.div
            variants={{
                initial: { opacity: 0, scale: 0.9, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0, transition: PREMIUM_SPRING }
            }}
            whileHover={{ y: -10, transition: PREMIUM_SPRING }}
            className={cn(
                "group relative overflow-hidden rounded-[2.5rem] bg-gray-200 cursor-pointer border border-gray-100 shadow-sm",
                project.className
            )}
            onClick={() => project.link !== '#' && window.open(project.link, '_blank')}
        >
            <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-700",
                    project.color
                )} />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />

            {project.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-500">
                        <Play className="text-white fill-white translate-x-0.5" size={24} />
                    </div>
                </div>
            )}

            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                    {project.category}
                </p>
                <div className="flex justify-between items-center">
                    <h3 className="text-white text-2xl font-bold tracking-tight">{project.title}</h3>
                    {project.link !== '#' && (
                        <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    )}
                </div>
            </div>

            {/* Premium Gold Border on Hover */}
            <div className="absolute inset-0 border-2 border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 rounded-[2.5rem] transition-all duration-500" />
        </motion.div>
    );
}

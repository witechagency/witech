import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Hurricane",
        category: "Site Vitrine",
        image: "../../src/assets/Design_sans_titre__4_-removebg-preview.png",
        link: "https://hurricane-10wb.onrender.com/",
        status: "completed"
    },
    {
        title: "Mariage Africain",
        category: "Site de Mariage",
        image: "../../src/assets/Design_sans_titre__3_-removebg-preview.png",
        link: "https://mariage-africain.onrender.com/",
        status: "completed"
    },
    {
        title: "Portfolio",
        category: "Site Vitrine",
        image: "../../src/assets/Design_sans_titre__5_-removebg-preview.png",
        link: "https://bis-portfo.onrender.com/",
        status: "completed"
    },
    {
        title: "Wi'Tech",
        category: "Prestation de service web",
        image: "../../src/assets/Design_sans_titre__2_-removebg-preview.png",
        status: "in-progress"
    },
    {
        title: "Salon de Coiffure",
        category: "Site Vitrine",
        image: "../../src/assets/image.png",
        link: "https://site-de-coiffeur.onrender.com/",
        status: "completed"
    },
    {
        title: "Restaurant Africain",
        category: "Site E-commerce",
        image: "../../src/assets/image.png",
        link: "https://site-de-restaurant.onrender.com/",
        status: "completed"
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos <span className="text-gradient">Réalisations</span></h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Découvrez les projets que nous avons concrétisés pour nos clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => {
                        const CardContent = (
                            <>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-blue-400 font-medium mb-1">{project.category}</p>
                                            <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                                        </div>
                                        {project.link && (
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {project.status === 'in-progress' && (
                                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                                        En cours
                                    </div>
                                )}
                            </>
                        );

                        return project.link ? (
                            <motion.a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3] cursor-pointer block"
                            >
                                {CardContent}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/3]"
                            >
                                {CardContent}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

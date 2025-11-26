import { motion } from 'framer-motion';

const projects = [
    {
        title: "E-commerce Mode",
        category: "Site Marchand",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Cabinet d'Avocat",
        category: "Site Vitrine",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Restaurant Italien",
        category: "Site Vitrine + Réservation",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Start-up SaaS",
        category: "Landing Page",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Agence Immobilière",
        category: "Catalogue",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Coach Sportif",
        category: "Site Personnel",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
    }
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Réalisations</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Découvrez les projets que nous avons concrétisés pour nos clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                <p className="text-gray-300 text-sm">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

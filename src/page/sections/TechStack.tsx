import { motion } from 'framer-motion';

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Framer Motion', icon: '🎬' }
];

const platforms = [
    { name: 'WordPress', icon: '📝' },
    { name: 'WooCommerce', icon: '🛒' },
    { name: 'Shopify', icon: '🏪' },
    { name: 'Supabase', icon: '🗄️' },
    { name: 'Vercel', icon: '▲' },
    { name: 'Render', icon: '🚀' }
];

export function TechStack() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Technologies & <span className="text-gradient">Plateformes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Nous utilisons les meilleures technologies et plateformes pour créer vos projets.
                    </p>
                </div>

                {/* Technologies */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technologies de développement</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group"
                            >
                                <motion.div
                                    animate={{
                                        rotate: [0, 10, -10, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                        ease: "easeInOut"
                                    }}
                                    className="text-5xl mb-3"
                                >
                                    {tech.icon}
                                </motion.div>
                                <h4 className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                                    {tech.name}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Platforms */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Plateformes & Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={platform.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeInOut"
                                    }}
                                    className="text-5xl mb-3"
                                >
                                    {platform.icon}
                                </motion.div>
                                <h4 className="text-sm font-semibold text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                                    {platform.name}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

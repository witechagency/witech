import { motion } from 'framer-motion';

const technologies = [
    {
        name: "React",
        category: "Frontend",
        icon: "⚛️",
        color: "from-cyan-500 to-blue-500"
    },
    {
        name: "TypeScript",
        category: "Language",
        icon: "📘",
        color: "from-blue-600 to-blue-700"
    },
    {
        name: "Node.js",
        category: "Backend",
        icon: "🟢",
        color: "from-green-600 to-green-700"
    },
    {
        name: "WordPress",
        category: "CMS",
        icon: "📝",
        color: "from-blue-500 to-indigo-600"
    },
    {
        name: "WooCommerce",
        category: "E-commerce",
        icon: "🛒",
        color: "from-purple-600 to-pink-600"
    },
    {
        name: "Shopify",
        category: "E-commerce",
        icon: "🛍️",
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "Tailwind CSS",
        category: "Styling",
        icon: "🎨",
        color: "from-teal-500 to-cyan-600"
    },
    {
        name: "Supabase",
        category: "Database",
        icon: "🍃",
        color: "from-green-600 to-green-700"
    },
    {
        name: "PostgreSQL",
        category: "Database",
        icon: "🐘",
        color: "from-blue-600 to-indigo-700"
    },
    {
        name: "Git",
        category: "Version Control",
        icon: "📦",
        color: "from-orange-600 to-red-600"
    },
    {
        name: "Figma",
        category: "Design",
        icon: "🎯",
        color: "from-purple-500 to-pink-500"
    },
    {
        name: "Vercel",
        category: "Hosting",
        icon: "▲",
        color: "from-gray-800 to-black"
    }
];

export function Technologies() {
    return (
        <section className="py-32 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Technologies & <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Nous utilisons les meilleures technologies pour créer des solutions performantes et évolutives.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: index * 0.05,
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.1,
                                rotate: [0, -5, 5, -5, 0],
                                transition: { duration: 0.5 }
                            }}
                            className="relative group"
                        >
                            <div className="glass p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-gray-200/50 hover:border-transparent overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                                
                                <div className="relative z-10">
                                    {/* Icon with animation */}
                                    <motion.div 
                                        className="text-5xl mb-3"
                                        animate={{ 
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: index * 0.1
                                        }}
                                    >
                                        {tech.icon}
                                    </motion.div>
                                    
                                    <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                                    <p className="text-xs text-gray-500 font-medium">{tech.category}</p>
                                </div>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-600 text-lg">
                        Et bien d'autres technologies selon vos besoins spécifiques
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

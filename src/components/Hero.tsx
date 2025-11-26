import { ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        Votre site web pro, <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            livré vite.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
                        Moderne, efficace, accessible.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#contact"
                            className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 flex items-center gap-2"
                        >
                            Commencer mon projet
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="https://wa.me/33600000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full font-semibold text-lg text-gray-700 border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 transition-all flex items-center gap-2"
                        >
                            <MessageCircle size={20} />
                            Parler à un expert
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

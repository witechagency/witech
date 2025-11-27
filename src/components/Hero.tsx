import { ArrowRight, MessageCircle, Sparkles, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0a0a]">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[120px] animate-float" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-float-delayed" />
                <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-pink-600/20 rounded-full blur-[100px] animate-pulse" />
            </div>

            {/* Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-[15%] hidden lg:flex items-center gap-2 glass-dark px-4 py-2 rounded-full border border-white/10"
            >
                <Sparkles size={16} className="text-yellow-400" />
                <span className="text-white/80 text-sm font-medium">Design Premium</span>
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 right-[15%] hidden lg:flex items-center gap-2 glass-dark px-4 py-2 rounded-full border border-white/10"
            >
                <Zap size={16} className="text-blue-400" />
                <span className="text-white/80 text-sm font-medium">Ultra Rapide</span>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-white/60 text-sm font-medium">Disponible pour nouveaux projets</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
                        Votre site web pro, <br />
                        <span className="text-gradient">
                            livré vite.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                        Transformez votre vision en réalité digitale. Design moderne, performance maximale, sans compromis.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#pricing"
                            className="group bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-3"
                        >
                            Commencer mon projet
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/33600000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3 backdrop-blur-sm"
                        >
                            <MessageCircle size={20} />
                            Parler à un expert
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}

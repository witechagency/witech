import { ServiceCard } from '../../components/ServiceCard';
import { services } from '../../lib/constant';
import { motion } from 'framer-motion';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

export function Services() {
    return (
        <section id="services" className="py-16 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4 md:mb-8 px-2"
                    >
                        Nos <span className="text-gradient">Expertises</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                        className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-2"
                    >
                        Des solutions numériques d'exception pour les entreprises ambitieuses.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Background halo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-red-500/5 rounded-full blur-[90px] md:blur-[120px] pointer-events-none" />

                    <motion.div 
                        variants={STAGGER_CONTAINER(0.15)}
                        initial="initial"
                        whileInView="animate"
                        viewport={SCROLL_VIEW_CONFIG}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto relative z-10"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    initial: { opacity: 0, y: 30 },
                                    animate: { opacity: 1, y: 0, transition: PREMIUM_SPRING }
                                }}
                            >
                                <ServiceCard
                                    {...service}
                                    className="h-full"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

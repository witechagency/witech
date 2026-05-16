import { ServiceCard } from '../../components/ServiceCard';
import { services } from '../../lib/constant';
import { motion } from 'framer-motion';
import { PREMIUM_SPRING, STAGGER_CONTAINER, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';

export function Services() {
    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 md:mb-8 px-4"
                    >
                        Nos <span className="text-gradient">Expertises</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={{ ...PREMIUM_SPRING, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-6"
                    >
                        Des solutions numériques d'exception pour les entreprises ambitieuses.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Background mechanical halo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

                    <motion.div 
                        variants={STAGGER_CONTAINER(0.15)}
                        initial="initial"
                        whileInView="animate"
                        viewport={SCROLL_VIEW_CONFIG}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10"
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

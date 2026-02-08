import { Check } from 'lucide-react';
import { packs, options } from '../../lib/constant';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactForm } from '../../components/ContactForm';

export function Pricing() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPack, setSelectedPack] = useState('');

    const handlePackClick = (packTitle: string) => {
        setSelectedPack(packTitle);
        setIsFormOpen(true);
    };

    return (
        <section id="pricing" className="py-32 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nos <span className="text-gradient">Packs</span></h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Des offres claires et transparentes adaptées à vos besoins.
                    </p>
                </div>

                {/* Packs Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24 items-stretch">
                    {packs.map((pack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className={cn(
                                "rounded-[2rem] p-8 relative overflow-hidden flex flex-col",
                                index === 1
                                    ? "bg-gray-900 text-white shadow-2xl md:scale-105 z-10 ring-4 ring-blue-500/20"
                                    : "bg-white text-gray-900 shadow-xl"
                            )}
                        >
                            {index === 1 && (
                                <div className="absolute top-0 right-0 bg-gradient-to-bl from-blue-600 to-purple-600 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
                                    POPULAIRE
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{pack.title}</h3>
                            <p className={cn("font-medium mb-6", index === 1 ? "text-blue-400" : "text-blue-600")}>
                                {pack.pages}
                            </p>
                            <p className={cn("mb-8 text-sm", index === 1 ? "text-gray-400" : "text-gray-600")}>
                                {pack.description}
                            </p>

                            <ul className="space-y-4 mb-10 flex-1">
                                {pack.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                        <div className={cn("mt-0.5 p-0.5 rounded-full shrink-0", index === 1 ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600")}>
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className={index === 1 ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handlePackClick(pack.title)}
                                className={cn(
                                    "w-full py-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105",
                                    index === 1
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-600/40"
                                        : "bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-blue-600 hover:to-purple-600 hover:shadow-xl"
                                )}
                            >
                                Choisir ce pack
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Options Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Options & Services Plus</h2>
                    <p className="text-gray-600">Personnalisez votre offre avec nos services à la carte.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {options.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass p-6 rounded-2xl hover:border-blue-500/30 transition-colors group gradient-reveal"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <option.icon size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg">{option.category}</h3>
                            </div>

                            <ul className="space-y-3">
                                {option.items.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center text-sm border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                                        <span className="text-gray-600">{item.name}</span>
                                        <span className="font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md text-xs">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Contact Form Modal */}
            <ContactForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                packName={selectedPack}
            />
        </section>
    );
}

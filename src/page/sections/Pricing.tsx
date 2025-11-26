import { Check } from 'lucide-react';
import { packs, options } from '../../lib/constant';

import { cn } from '../../lib/utils';

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Packs</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Des offres claires et transparentes adaptées à vos besoins.
                    </p>
                </div>

                {/* Packs Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {packs.map((pack, index) => (
                        <div
                            key={index}
                            className={cn(
                                "bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex flex-col",
                                index === 1 ? "ring-2 ring-blue-600 scale-105 z-10" : ""
                            )}
                        >
                            {index === 1 && (
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                                    POPULAIRE
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{pack.title}</h3>
                            <p className="text-blue-600 font-medium mb-6">{pack.pages}</p>
                            <p className="text-gray-600 mb-8 text-sm">{pack.description}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {pack.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={cn(
                                    "w-full py-3 rounded-xl font-bold text-center transition-colors",
                                    index === 1
                                        ? "bg-blue-600 text-white hover:bg-blue-700"
                                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                )}
                            >
                                Choisir ce pack
                            </a>
                        </div>
                    ))}
                </div>

                {/* Options Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Options & Services Plus</h2>
                    <p className="text-gray-600">Personnalisez votre offre avec nos services à la carte.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {options.map((option, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                    <option.icon size={20} />
                                </div>
                                <h3 className="font-bold text-gray-900">{option.category}</h3>
                            </div>

                            <ul className="space-y-3">
                                {option.items.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center text-sm">
                                        <span className="text-gray-600">{item.name}</span>
                                        <span className="font-semibold text-gray-900">{item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

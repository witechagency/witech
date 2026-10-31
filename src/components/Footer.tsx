import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { navLinks } from '../lib/constant';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-20">
                    <div className="sm:col-span-2 lg:col-span-4 lg:pr-6">
                        <Link to="/" className="flex items-center gap-3 mb-6 group">
                            <img src="/witech-logo.svg" alt="Wi'Tech" className="w-9 h-9 rounded-xl shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform" />
                            <span className="text-3xl font-bold tracking-tighter text-black">
                                Wi'Tech<span className="text-red-600">.</span>
                            </span>
                        </Link>
                        <p className="text-base md:text-lg text-gray-500 font-light max-w-sm leading-relaxed">
                            Solutions web convertissantes, architecture cloud Microsoft Azure & automatisations pour PME et indépendants.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base font-medium text-gray-500 hover:text-red-600 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:contact@witechagency.com"
                                    className="inline-flex items-center gap-2.5 text-base font-medium text-gray-500 hover:text-red-600 transition-colors whitespace-nowrap"
                                >
                                    <Mail size={18} className="text-red-600 shrink-0" />
                                    <span>contact@witechagency.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/witechagency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 text-base font-medium text-gray-500 hover:text-red-600 transition-colors"
                                >
                                    <Linkedin size={18} className="text-red-600 shrink-0" />
                                    <span>LinkedIn Wi'Tech</span>
                                </a>
                            </li>
                            <li className="inline-flex items-center gap-2.5 text-base font-medium text-gray-500">
                                <MapPin size={18} className="text-red-600 shrink-0" />
                                <span>Nantes (44000) · France</span>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Légal</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/mentions-legales" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
                                    Mentions légales
                                </Link>
                            </li>
                            <li>
                                <Link to="/confidentialite" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
                                    Confidentialité
                                </Link>
                            </li>
                            <li>
                                <Link to="/cgv" className="text-base font-medium text-gray-500 hover:text-black transition-colors">
                                    CGV
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm font-medium text-gray-400">
                        © {new Date().getFullYear()} Wi'Tech.
                    </p>
                </div>
            </div>
        </footer>
    );
}

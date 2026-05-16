import { Link } from 'react-router-dom';
import { navLinks } from '../lib/constant';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-3xl font-bold tracking-tighter text-black mb-6 block">
                            Wi'Tech<span className="text-gray-400">.</span>
                        </a>
                        <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed">
                            L'excellence technique au service de votre présence numérique.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-base font-medium text-gray-500 hover:text-black transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
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
                        © {new Date().getFullYear()} Wi'Tech. Built with Precision.
                    </p>
                    <div className="flex gap-8">
                         <span className="text-xs font-bold uppercase tracking-widest text-gray-300">Design by Wi'Tech</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

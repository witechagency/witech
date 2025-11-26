import { navLinks } from '../lib/constant';

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 block">
                            Wi'Tech
                        </a>
                        <p className="text-gray-600 max-w-sm">
                            Votre partenaire digital de confiance pour la création de sites web modernes et performants.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-gray-900 mb-4">Légal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Mentions légales
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    Politique de confidentialité
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                    CGV
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Wi'Tech. Tous droits réservés.
                    </p>
                    <div className="flex gap-4">
                        {/* Social links could go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

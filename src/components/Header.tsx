import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { navLinks } from '../lib/constant';
import { PREMIUM_SPRING } from '../lib/framer-configs';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div 
                    className={cn(
                        "flex items-center justify-between w-full px-8 py-4 transition-all duration-500",
                        isScrolled 
                            ? "bg-white/70 backdrop-blur-xl rounded-[2rem] premium-border shadow-sm" 
                            : "bg-transparent rounded-none border-transparent"
                    )}
                >
                    <a href="#" className="text-2xl font-bold tracking-tighter text-black">
                        Wi'Tech<span className="text-gray-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#pricing"
                            className="bg-black text-white px-8 py-3 rounded-2xl text-sm font-bold hover:bg-gray-800 transition-all"
                        >
                            Commencer
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={PREMIUM_SPRING}
                        className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white rounded-[2.5rem] premium-border shadow-2xl p-8"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-bold tracking-tight text-gray-900"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#pricing"
                                className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-center mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Commencer mon projet
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

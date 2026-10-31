import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { navLinks } from '../lib/constant';
import { getServiceMenu } from '../lib/services-menu';
import { PREMIUM_SPRING } from '../lib/framer-configs';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const publishedServices = getServiceMenu();

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
                isScrolled ? "py-2 md:py-4" : "py-3 md:py-8"
            )}
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6">
                <div 
                    className={cn(
                        "flex items-center justify-between w-full px-4 py-2.5 sm:px-6 md:px-8 md:py-4 transition-all duration-500",
                        isScrolled 
                            ? "bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2rem] premium-border shadow-sm" 
                            : "bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-2xl md:rounded-none border border-black/5 md:border-transparent"
                    )}
                >
                    <a href="/" className="flex items-center gap-3 group">
                        <img 
                            src="/witech-logo.svg" 
                            alt="Logo Wi'Tech" 
                            className="w-9 h-9 rounded-xl shadow-md shadow-red-600/20 group-hover:scale-105 transition-transform" 
                        />
                        <span className="text-2xl font-bold tracking-tighter text-gray-900">
                            Wi'Tech<span className="text-red-600">.</span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            link.name === "Services" && publishedServices.length > 0 ? (
                                <div key={link.name} className="relative group">
                                    <a
                                        href={publishedServices[0].path}
                                        className="text-sm font-semibold tracking-wide text-gray-600 hover:text-red-600 transition-colors inline-flex items-center gap-1"
                                    >
                                        {link.name}
                                        <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                                    </a>
                                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-3 z-50">
                                        <div className="w-72 bg-white rounded-2xl border border-gray-100 shadow-xl p-2 flex flex-col gap-1">
                                            {publishedServices.map((s) => (
                                                <a
                                                    key={s.slug}
                                                    href={s.path}
                                                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                >
                                                    {s.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold tracking-wide text-gray-600 hover:text-red-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                        <a
                            href="/#pricing"
                            className="bg-red-600 hover:bg-red-700 text-white px-7 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-red-600/20 transition-all hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5"
                        >
                            Commencer
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 p-2"
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
                        className="md:hidden absolute top-full left-6 right-6 mt-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-gray-100 shadow-2xl p-8"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-2">
                                    <a
                                        href={link.name === "Services" && publishedServices.length > 0 ? publishedServices[0].path : link.href}
                                        className="text-lg font-bold tracking-tight text-gray-900 hover:text-red-600 transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                    {link.name === "Services" && publishedServices.length > 0 && (
                                        <div className="pl-4 flex flex-col gap-2 border-l-2 border-red-100">
                                            {publishedServices.map((s) => (
                                                <a
                                                    key={s.slug}
                                                    href={s.path}
                                                    className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {s.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <a
                                href="/#pricing"
                                className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold text-center mt-4 shadow-lg shadow-red-600/25"
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

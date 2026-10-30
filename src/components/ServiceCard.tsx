import type { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { PREMIUM_SPRING } from '../lib/framer-configs';

interface ServiceCardProps {
    title: string;
    subtitle?: string;
    description?: string;
    icon: LucideIcon;
    features?: string[];
    price?: string;
    className?: string;
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    className
}: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10, transition: PREMIUM_SPRING }}
            className={cn(
                "relative p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-700 flex flex-col items-center justify-between min-h-[420px] md:min-h-[600px] h-full",
                className
            )}
        >
            {/* Mechanics Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large Gear Circle */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-red-500/5 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-red-500/10 transition-all duration-700"
                >
                    <div className="w-full h-full border-4 border-dashed border-rose-500/10 rounded-full" />
                </motion.div>

                {/* Small Gear */}
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-12 -left-12 w-48 h-48 border-[15px] border-slate-500/5 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-700"
                >
                    <div className="w-full h-full border-2 border-dotted border-red-500/10 rounded-full" />
                </motion.div>

                {/* Corner "Screws" */}
                {[
                    "top-4 left-4 sm:top-6 sm:left-6", "top-4 right-4 sm:top-6 sm:right-6", 
                    "bottom-4 left-4 sm:bottom-6 sm:left-6", "bottom-4 right-4 sm:bottom-6 sm:right-6"
                ].map((pos, i) => (
                    <div key={i} className={cn("absolute w-3 h-3 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner", pos)}>
                        <div className="w-1.5 h-px bg-gray-300 rotate-45" />
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Central Icon Housing */}
                <div className="relative mb-6 md:mb-10">
                    {/* Pulsing rings */}
                    <div className="absolute inset-[-12px] md:inset-[-15px] border border-red-500/20 rounded-full group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute inset-[-24px] md:inset-[-30px] border border-rose-500/10 rounded-full group-hover:scale-150 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
                    
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 group-hover:border-red-500/30 group-hover:shadow-[0_15px_35px_rgba(185,28,28,0.15)] transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-red-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <Icon size={34} className="text-gray-900 group-hover:text-red-600 transition-all duration-500 group-hover:scale-110 relative z-10 md:hidden" strokeWidth={1.3} />
                        <Icon size={40} className="text-gray-900 group-hover:text-red-600 transition-all duration-500 group-hover:scale-110 relative z-10 hidden md:block" strokeWidth={1.2} />
                    </div>
                </div>

                <div className="space-y-3 md:space-y-4 max-w-sm">
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-px w-8 bg-gradient-to-r from-red-600 to-rose-600 mb-1 md:mb-2 group-hover:w-16 transition-all duration-700" />
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 group-hover:text-red-600 transition-all duration-500">
                            {title}
                        </h3>
                    </div>
                    
                    <p className="text-red-600/70 font-bold uppercase tracking-[0.3em] text-[10px]">
                        Expertise & Qualité
                    </p>

                    <p className="text-gray-500 leading-relaxed font-light text-base md:text-lg pt-3 md:pt-4 border-t border-gray-50 group-hover:text-gray-700 transition-colors">
                        {description}
                    </p>
                </div>

                {/* Technical footer details */}
                <div className="mt-8 md:mt-12 flex items-center gap-6 opacity-30 group-hover:opacity-70 transition-opacity duration-700">
                    <span className="text-[9px] font-black tracking-widest uppercase">Sécurité</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <span className="text-[9px] font-black tracking-widest uppercase">Performance</span>
                </div>
            </div>

            {/* Inner Red Highlight */}
            <div className="absolute inset-1 rounded-[3.2rem] border border-red-500/0 group-hover:border-red-500/10 transition-all duration-700 pointer-events-none" />
        </motion.div>
    );
}

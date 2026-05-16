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
                "relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden group transition-all duration-700 flex flex-col items-center justify-between min-h-[500px] md:min-h-[600px] h-full",
                className
            )}
        >
            {/* Watch Mechanics Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large Gear Circle */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-24 -right-24 w-96 h-96 border-[40px] border-emerald-500/5 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:border-emerald-500/10 transition-all duration-700"
                >
                    <div className="w-full h-full border-4 border-dashed border-teal-500/10 rounded-full" />
                </motion.div>

                {/* Small Gear */}
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-12 -left-12 w-48 h-48 border-[15px] border-amber-500/5 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-700"
                >
                    <div className="w-full h-full border-2 border-dotted border-amber-500/10 rounded-full" />
                </motion.div>

                {/* Corner "Screws" */}
                {[
                    "top-6 left-6", "top-6 right-6", 
                    "bottom-6 left-6", "bottom-6 right-6"
                ].map((pos, i) => (
                    <div key={i} className={cn("absolute w-3 h-3 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center shadow-inner", pos)}>
                        <div className="w-1.5 h-px bg-gray-300 rotate-45" />
                    </div>
                ))}
            </div>

            {/* Watch Face / Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Central "Jewel" Icon Housing */}
                <div className="relative mb-10">
                    {/* Pulsing rings */}
                    <div className="absolute inset-[-15px] border border-emerald-500/20 rounded-full group-hover:scale-125 transition-transform duration-700" />
                    <div className="absolute inset-[-30px] border border-teal-500/10 rounded-full group-hover:scale-150 transition-transform duration-1000 opacity-0 group-hover:opacity-100" />
                    
                    <div className="w-24 h-24 bg-gradient-to-br from-white to-gray-50 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 group-hover:border-emerald-500/30 group-hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] transition-all duration-500 relative">
                        <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <Icon size={40} className="text-gray-900 group-hover:text-emerald-600 transition-all duration-500 group-hover:scale-110 relative z-10" strokeWidth={1.2} />
                    </div>
                </div>

                <div className="space-y-4 max-w-sm">
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-amber-500 mb-2 group-hover:w-16 transition-all duration-700" />
                        <h3 className="text-3xl font-bold tracking-tight text-gray-900 group-hover:bg-gradient-to-br group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                            {title}
                        </h3>
                    </div>
                    
                    <p className="text-emerald-600/40 font-bold uppercase tracking-[0.3em] text-[10px]">
                        Engineering & Excellence
                    </p>

                    <p className="text-gray-500 leading-relaxed font-light text-lg pt-4 border-t border-gray-50 group-hover:text-gray-700 transition-colors">
                        {description}
                    </p>
                </div>

                {/* "Technical" footer details like a watch face */}
                <div className="mt-12 flex items-center gap-6 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                    <span className="text-[9px] font-black tracking-widest uppercase">Precision</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                    <span className="text-[9px] font-black tracking-widest uppercase">Reliability</span>
                </div>
            </div>

            {/* Inner Gold Bezel Highlight */}
            <div className="absolute inset-1 rounded-[3.2rem] border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/10 transition-all duration-700 pointer-events-none" />
        </motion.div>
    );
}

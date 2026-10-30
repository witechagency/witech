import { motion } from 'framer-motion';
import { PREMIUM_SPRING, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';
import { Box, Code2, Globe2, Cpu, Database, Layout, ShieldCheck, Zap, Workflow, Bot, Settings, Cloud } from 'lucide-react';
import { cn } from '../../lib/utils';

const techsLeft = [
    { name: "Microsoft Azure", icon: Cloud },
    { name: "Azure Security", icon: ShieldCheck },
    { name: "n8n", icon: Workflow },
    { name: "React", icon: Layout },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Cpu },
    { name: "Tailwind", icon: Layout },
    { name: "PostgreSQL", icon: Database },
];

const techsRight = [
    { name: "Power Automate", icon: Zap },
    { name: "Copilot Studio", icon: Bot },
    { name: "Power Apps", icon: Layout },
    { name: "Microsoft 365", icon: Cloud },
    { name: "Supabase", icon: Database },
    { name: "Shopify", icon: Box },
    { name: "WordPress", icon: Globe2 },
    { name: "Figma", icon: Layout }
];

export function Technologies() {
    return (
        <section className="py-16 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-32">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-4 md:mb-6"
                    >
                        Notre <span className="text-gradient">Arsenal.</span>
                    </motion.h2>
                    <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-2">
                        Une sélection de technologies robustes et éprouvées pour bâtir des solutions fiables, performantes et sécurisées.
                    </p>
                </div>
            </div>

            {/* Mobile Grid Layout (Cleaner, faster & fully responsive) */}
            <div className="md:hidden px-4 max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-2.5">
                    {[...techsLeft, ...techsRight].map((tech, index) => (
                        <div 
                            key={index}
                            className="bg-white p-3 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-2.5 hover:border-red-500/40 transition-all"
                        >
                            <div className="w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                <tech.icon size={16} className="text-red-600" />
                            </div>
                            <span className="text-[11px] font-bold text-gray-800 tracking-tight leading-tight">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Dual Gear Mechanism */}
            <div className="hidden md:flex relative h-[700px] w-full items-center justify-center overflow-hidden">
                
                {/* Blurred edges for depth / fog */}
                <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                <div className="relative w-full h-full flex items-center justify-center scale-100">
                    
                    {/* Central Sync Axis */}
                    <div className="absolute z-20 w-20 h-20 bg-white rounded-full border-2 border-red-500/20 shadow-xl flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="text-red-600"
                        >
                            <Settings size={32} strokeWidth={1} />
                        </motion.div>
                    </div>

                    {/* Left Gear Chain (Clockwise) */}
                    <div className="absolute left-1/2 -translate-x-[70%]">
                        <GearChain techs={techsLeft} rotation={360} direction="cw" />
                    </div>

                    {/* Right Gear Chain (Counter-Clockwise) */}
                    <div className="absolute left-1/2 -translate-x-[30%]">
                        <GearChain techs={techsRight} rotation={-360} direction="ccw" />
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={SCROLL_VIEW_CONFIG}
                transition={{ delay: 1 }}
                className="mt-16 text-center"
            >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-gray-100 bg-white shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">Écosystème Microsoft & Solutions Web</span>
                </div>
            </motion.div>
        </section>
    );
}

function GearChain({ techs, rotation, direction }: { techs: any[], rotation: number, direction: "cw" | "ccw" }) {
    const size = 600; // Standard circle size
    const radius = 250; // Radius for placing items

    return (
        <motion.div 
            animate={{ rotate: rotation }}
            transition={{ 
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="relative"
            style={{ width: size, height: size }}
        >
            {/* The Visual Chain Track */}
            <div className="absolute inset-0 rounded-full border-[2px] border-gray-100 shadow-[inset_0_0_20px_rgba(0,0,0,0.02)]" />
            <div className={cn(
                "absolute inset-4 rounded-full border-[1px] border-dashed",
                direction === "cw" ? "border-red-500/20" : "border-gray-200"
            )} />

            {/* Tech "Links" (Mini Elements) */}
            {techs.map((tech, index) => {
                const angle = (index / techs.length) * 360;
                return (
                    <div 
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        style={{ 
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`
                        }}
                    >
                        {/* Negate parent rotation to keep content upright */}
                        <motion.div
                            animate={{ rotate: -rotation }}
                            transition={{ 
                                duration: 50, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }}
                            className="bg-white p-3 rounded-xl border border-gray-100 shadow-md flex flex-col items-center justify-center gap-1 w-20 h-20 md:w-24 md:h-24 hover:border-red-500/50 hover:shadow-red-500/10 transition-all pointer-events-auto cursor-default group"
                        >
                            <tech.icon size={20} className="text-gray-900 group-hover:text-red-600 transition-colors" strokeWidth={1.5} />
                            <span className="text-[8px] md:text-[10px] font-bold text-gray-900 tracking-tight text-center leading-tight">{tech.name}</span>
                        </motion.div>
                    </div>
                );
            })}

            {/* Decorative Inner Gear Teeth */}
            <div className="absolute inset-[30%] rounded-full border border-gray-50 flex items-center justify-center">
                <div className="w-full h-full border-[20px] border-gray-50/50 rounded-full" />
            </div>
        </motion.div>
    );
}

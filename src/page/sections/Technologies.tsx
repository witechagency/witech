import { motion } from 'framer-motion';
import { PREMIUM_SPRING, SCROLL_VIEW_CONFIG } from '../../lib/framer-configs';
import { Box, Code2, Globe2, Cpu, Database, Layout, ShieldCheck, Zap, Workflow, Bot, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

const techsLeft = [
    { name: "n8n", icon: Workflow },
    { name: "React", icon: Layout },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Cpu },
    { name: "Tailwind", icon: Layout },
    { name: "Supabase", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "Git", icon: ShieldCheck },
];

const techsRight = [
    { name: "Power Automate", icon: Zap },
    { name: "Power Apps", icon: Layout },
    { name: "Copilot Studio", icon: Bot },
    { name: "WordPress", icon: Globe2 },
    { name: "WooCommerce", icon: Box },
    { name: "Shopify", icon: Box },
    { name: "Figma", icon: Layout },
    { name: "Vercel", icon: Zap }
];

export function Technologies() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-32">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={SCROLL_VIEW_CONFIG}
                        transition={PREMIUM_SPRING}
                        className="text-3xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6"
                    >
                        Notre <span className="text-gradient">Arsenal.</span>
                    </motion.h2>
                    <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed px-6">
                        Une sélection d'outils d'élite pour construire des solutions durables et performantes.
                    </p>
                </div>
            </div>

            {/* The Dual Gear Mechanism - Placed BELOW the title */}
            <div className="relative h-[500px] md:h-[700px] w-full flex items-center justify-center overflow-hidden">
                
                {/* Blurred edges for depth / fog */}
                <div className="absolute inset-y-0 left-0 w-20 md:w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 md:w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                <div className="relative w-full h-full flex items-center justify-center scale-[0.6] md:scale-100">
                    
                    {/* Central Sync Axis */}
                    <div className="absolute z-20 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-2 border-[#D4AF37]/20 shadow-xl flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="text-[#D4AF37]"
                        >
                            <Settings size={32} strokeWidth={1} />
                        </motion.div>
                    </div>

                    {/* Left Gear Chain (Clockwise) */}
                    <div className="absolute left-1/2 -translate-x-[85%] md:-translate-x-[70%]">
                        <GearChain techs={techsLeft} rotation={360} direction="cw" />
                    </div>

                    {/* Right Gear Chain (Counter-Clockwise) */}
                    <div className="absolute left-1/2 -translate-x-[15%] md:-translate-x-[30%]">
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
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Engineering & Excellence</span>
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
                direction === "cw" ? "border-[#D4AF37]/20" : "border-gray-200"
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
                            className="bg-white p-3 rounded-xl border border-gray-100 shadow-md flex flex-col items-center justify-center gap-1 w-20 h-20 md:w-24 md:h-24 hover:border-[#D4AF37]/50 hover:shadow-[#D4AF37]/10 transition-all pointer-events-auto cursor-default group"
                        >
                            <tech.icon size={20} className="text-gray-900 group-hover:text-[#D4AF37] transition-colors" strokeWidth={1.5} />
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

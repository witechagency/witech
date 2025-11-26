import type { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    subtitle?: string;
    description?: string;
    icon?: LucideIcon;
    features?: string[];
    price?: string;
    className?: string;
}

export function ServiceCard({
    title,
    subtitle,
    description,
    icon: Icon,
    features,
    price,
    className
}: ServiceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={cn(
                "glass p-8 rounded-3xl transition-all duration-300 group hover:border-blue-500/30",
                className
            )}
        >
            {Icon && (
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 border border-white/50">
                    <Icon size={28} className="group-hover:text-purple-600 transition-colors" />
                </div>
            )}

            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>

            {subtitle && (
                <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 uppercase tracking-wide">
                    {subtitle}
                </p>
            )}

            {price && (
                <div className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {price}
                </div>
            )}

            {description && (
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                    {description}
                </p>
            )}

            {features && features.length > 0 && (
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="text-sm font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}

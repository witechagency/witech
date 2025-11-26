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
            whileHover={{ scale: 1.02 }}
            className={cn(
                "bg-white rounded-3xl shadow-xl p-8 transition-all duration-300 border border-gray-100",
                className
            )}
        >
            {Icon && (
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                    <Icon size={24} />
                </div>
            )}

            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

            {subtitle && (
                <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
                    {subtitle}
                </p>
            )}

            {price && (
                <div className="text-2xl font-bold text-gray-900 mb-4">
                    {price}
                </div>
            )}

            {description && (
                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>
            )}

            {features && features.length > 0 && (
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}

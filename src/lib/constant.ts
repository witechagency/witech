import { Mail, MessageSquare, Headset, BarChart, Globe, Settings, Cloud, Zap, Cpu, Bot, Workflow } from 'lucide-react';

export const services = [
    {
        title: "Développement Web",
        description: "Sites vitrines et e-commerce performants, optimisés pour le SEO et la conversion.",
        icon: Globe
    },
    {
        title: "Automatisations & n8n",
        description: "Optimisation de vos processus métiers via n8n. Connectez vos outils et automatisez vos tâches répétitives.",
        icon: Workflow
    },
    {
        title: "Ecosystème Microsoft",
        description: "Expertise Power Automate, Power Apps et Copilot Studio pour une productivité décuplée.",
        icon: Cpu
    },
    {
        title: "Solutions Cloud & Maintenance",
        description: "Hébergement sécurisé et maintenance évolutive pour garantir la pérennité de vos projets.",
        icon: Cloud
    }
];

export const packs = [
    {
        title: "Pack Basique",
        pages: "1–5 pages",
        description: "Pour commencer rapidement.",
        features: [
            "Design moderne",
            "Responsive",
            "Formulaire simple",
            "Intégration réseaux sociaux",
            "Choix : WordPress ou développement sur mesure",
            "E-commerce : WooCommerce ou Shopify (si applicable)",
            "1 retouche",
            "SEO de base"
        ]
    },
    {
        title: "Pack Medium",
        pages: "Jusqu'à 10 pages",
        description: "Le bon équilibre.",
        features: [
            "Design personnalisé",
            "Formulaire avancé",
            "Intégration contenu (texte + images)",
            "Choix : WordPress ou développement sur mesure",
            "E-commerce : WooCommerce ou Shopify (si applicable)",
            "2 retouches",
            "SEO de base",
            "Header / Footer pro"
        ]
    },
    {
        title: "Pack Plus",
        pages: "Pages illimitées",
        description: "Pour un site complet et professionnel.",
        features: [
            "Design premium",
            "Mise en page sur mesure",
            "Intégration complète",
            "Choix : WordPress ou développement sur mesure",
            "E-commerce : WooCommerce ou Shopify (si applicable)",
            "3 retouches",
            "SEO de base"
        ]
    }
];

export const options = [
    {
        category: "SEO avancé",
        items: [
            { name: "SEO local (Google Business)", price: "Sur devis" },
            { name: "SEO optimisé (10 pages)", price: "Sur devis" },
            { name: "Audit SEO complet", price: "Sur devis" }
        ],
        icon: BarChart
    },
    {
        category: "Maintenance",
        items: [
            { name: "Mensuelle", price: "Sur devis" },
            { name: "Annuelle", price: "Sur devis" }
        ],
        icon: Settings
    },
    {
        category: "Email professionnel",
        items: [
            { name: "Licence", price: "Sur devis" },
            { name: "Configuration", price: "Sur devis" }
        ],
        icon: Mail
    },
    {
        category: "Automatisation & IA",
        items: [
            { name: "Chatbot WhatsApp", price: "Sur devis" },
            { name: "Chatbot sur site", price: "Sur devis" }
        ],
        icon: MessageSquare
    },
    {
        category: "Support Premium",
        items: [
            { name: "Réponse 24h", price: "Sur devis" },
            { name: "Assistance téléphone", price: "Sur devis" }
        ],
        icon: Headset
    },
    {
        category: "Modification de sites",
        items: [
            { name: "Refonte design", price: "Sur devis" },
            { name: "Ajout de fonctionnalités", price: "Sur devis" },
            { name: "Migration de plateforme", price: "Sur devis" }
        ],
        icon: Settings
    }
];

export const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Avantages", href: "#advantages" },
    { name: "Processus", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
];

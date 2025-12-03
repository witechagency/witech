import { Mail, MessageSquare, Headset, BarChart, Globe, Settings, Cloud, Wrench } from 'lucide-react';

export const services = [
    {
        title: "Développement Web",
        description: "Sites vitrines et e-commerce performants, optimisés pour le SEO et la conversion.",
        icon: Globe
    },
    {
        title: "Solutions Cloud",
        description: "Hébergement sécurisé, maintenance et déploiement continu.",
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
            "Choix : Développement sur mesure ou CMS (WordPress/Shopify)",
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
            "Choix : Développement sur mesure ou CMS (WordPress/Shopify)",
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
            "Choix : Développement sur mesure ou CMS (WordPress/Shopify)",
            "E-commerce : WooCommerce ou Shopify",
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
        category: "Modification de sites web",
        items: [
            { name: "Refonte complète", price: "Sur devis" },
            { name: "Ajout de fonctionnalités", price: "Sur devis" },
            { name: "Optimisation & corrections", price: "Sur devis" }
        ],
        icon: Wrench
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
    }
];

export const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Avantages", href: "#advantages" },
    { name: "Processus", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
];

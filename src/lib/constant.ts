import { Mail, MessageSquare, ShoppingCart, Headset, BarChart, Globe, Settings, Smartphone, Cloud } from 'lucide-react';

export const services = [
    {
        title: "Développement Web",
        description: "Sites vitrines et e-commerce performants, optimisés pour le SEO et la conversion.",
        icon: Globe
    },
    {
        title: "Applications Mobiles",
        description: "Solutions mobiles natives et hybrides pour iOS et Android.",
        icon: Smartphone
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
        pages: "1–3 pages",
        description: "Pour commencer rapidement.",
        features: [
            "Design moderne",
            "Responsive",
            "Formulaire simple",
            "Intégration réseaux sociaux",
            "Installation WordPress / WooCommerce",
            "1 retouche",
            "SEO de base"
        ]
    },
    {
        title: "Pack Medium",
        pages: "Jusqu’à 6 pages",
        description: "Le bon équilibre.",
        features: [
            "Design personnalisé",
            "Formulaire avancé",
            "Intégration contenu (texte + images)",
            "2 retouches",
            "SEO de base",
            "Header / Footer pro"
        ]
    },
    {
        title: "Pack Plus",
        pages: "Jusqu’à 10 pages",
        description: "Pour un site complet et professionnel.",
        features: [
            "Design premium",
            "Mise en page sur mesure",
            "Intégration complète",
            "3 retouches",
            "Installation WP/WooCommerce",
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
            { name: "Mensuelle", price: "19 €/mois" },
            { name: "Annuelle", price: "199 €/an" }
        ],
        icon: Settings
    },
    {
        category: "Email professionnel",
        items: [
            { name: "Licence", price: "15 €/an" },
            { name: "Configuration", price: "29 €" }
        ],
        icon: Mail
    },
    {
        category: "Automatisation & IA",
        items: [
            { name: "Chatbot WhatsApp", price: "79 €" },
            { name: "Chatbot sur site", price: "129 €" },
            { name: "Formulaires intelligents", price: "49–99 €" }
        ],
        icon: MessageSquare
    },
    {
        category: "E-commerce (options)",
        items: [
            { name: "Activation WooCommerce", price: "59 €" },
            { name: "Ajout catégories", price: "Sur devis" },
            { name: "Ajout produits", price: "Sur devis" }
        ],
        icon: ShoppingCart
    },
    {
        category: "Support Premium",
        items: [
            { name: "Réponse 24h", price: "Inclus" },
            { name: "Assistance téléphone", price: "Inclus" }
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

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import emailjs from "@emailjs/browser";
import { supabase } from "../lib/supabase";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
    packName: string;
}

export function ContactForm({ isOpen, onClose, packName }: ContactFormProps) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        nom: "",
        entreprise: "",
        numero: "",
        email: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // 1️⃣ STOCKAGE DANS SUPABASE
            const { error } = await supabase.from("clients").insert([
                {
                    name: formData.nom,
                    company: formData.entreprise,
                    phone: formData.numero,
                    email: formData.email,
                    pack: packName,
                },
            ]);

            if (error) throw error;

            // 2️⃣ ENVOI PAR EMAILJS (mail interne Wi’Tech)
            await emailjs.send(
                "service_5g5q2pn",
                "template_0g6mc4j", //
                {
                    nom: formData.nom,
                    entreprise: formData.entreprise,
                    numero: formData.numero,
                    email: formData.email,
                    pack: packName,
                },
                "WvDIwX_AvVXUAJFgR" //
            );

            // 3️⃣ AUTO-REPLY AU CLIENT
            await emailjs.send(
                "service_5g5q2pn",
                "template_l6dut7q", //
                {
                    name: formData.nom,
                    email: formData.email,
                    nom: formData.nom,
                    entreprise: formData.entreprise,
                    numero: formData.numero,
                    pack: packName,
                },
                "WvDIwX_AvVXUAJFgR"
            );

            setShowSuccess(true);
            
            // Reset form
            setFormData({ nom: "", entreprise: "", numero: "", email: "" });
            
        } catch (err) {
            console.error(err);
            alert("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    >
                        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Header */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                    Demande de devis
                                </h2>
                                <p className="text-gray-600">
                                    {packName}
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.nom}
                                        onChange={(e) =>
                                            setFormData({ ...formData, nom: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                                        placeholder="Jean Dupont"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Entreprise *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.entreprise}
                                        onChange={(e) =>
                                            setFormData({ ...formData, entreprise: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                                        placeholder="Mon Entreprise"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Numéro de téléphone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.numero}
                                        onChange={(e) =>
                                            setFormData({ ...formData, numero: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                                        placeholder="+33 6 12 34 56 78"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                                        placeholder="jean.dupont@email.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-600/25 transition-all mt-6 disabled:opacity-60"
                                >
                                    {loading ? "Envoi en cours..." : "Envoyer ma demande"}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Demande envoyée ! 🎉</h3>
                        <p className="text-gray-600 mb-6">
                            Votre demande a bien été envoyée ! L’équipe Wi’Tech vous recontactera très rapidement.
                        </p>
                        <div className="flex justify-end">
                            <button
                                onClick={handleCloseSuccess}
                                className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-600/25 transition-all font-medium"
                            >
                                OK
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

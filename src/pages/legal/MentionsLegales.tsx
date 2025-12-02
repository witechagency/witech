import { motion } from 'framer-motion';

export function MentionsLegales() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informations légales</h2>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Nom de l'entreprise :</strong> Wi'Tech</p>
                            <p><strong>Statut juridique :</strong> Auto-entreprise</p>
                            <p><strong>Email :</strong> <a href="mailto:witechagency@gmail.com" className="text-blue-600 hover:underline">witechagency@gmail.com</a></p>
                            <p><strong>Numéro SIRET :</strong> [À compléter]</p>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement du site</h2>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Hébergeur :</strong> [Hostinger / OVH / Render]</p>
                            {/* <p><strong>Adresse :</strong> [À compléter]</p> */}
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
                        <p className="text-gray-700 leading-relaxed">
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilité</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site,
                            dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Toutefois, Wi'Tech ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liens hypertextes</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet
                            ne sauraient engager la responsabilité de Wi'Tech.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse :
                            <a href="mailto:witechagency@gmail.com" className="text-blue-600 hover:underline ml-1">witechagency@gmail.com</a>
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}

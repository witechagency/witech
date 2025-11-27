import { motion } from 'framer-motion';

export function Confidentialite() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech s'engage à protéger la vie privée de ses utilisateurs et à traiter leurs données personnelles de manière responsable,
                            conformément au Règlement Général sur la Protection des Données (RGPD).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données collectées</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Lorsque vous remplissez notre formulaire de demande de devis, nous collectons les informations suivantes :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Nom complet</strong></li>
                            <li><strong>Entreprise</strong></li>
                            <li><strong>Adresse email</strong></li>
                            <li><strong>Numéro de téléphone</strong></li>
                            <li><strong>Pack choisi</strong></li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalité du traitement</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Les données collectées sont utilisées pour :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Répondre à votre demande de devis</li>
                            <li>Vous contacter pour discuter de votre projet</li>
                            <li>Assurer le suivi commercial de votre demande</li>
                            <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base légale (RGPD)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Le traitement de vos données personnelles repose sur votre <strong>consentement explicite</strong> lors de la soumission du formulaire
                            et sur l'<strong>intérêt légitime</strong> de Wi'Tech à traiter votre demande commerciale.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Durée de conservation</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Vos données personnelles sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter de votre dernier contact avec Wi'Tech,
                            sauf obligation légale de conservation plus longue.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sécurité des données</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Vos données sont stockées de manière sécurisée sur <strong>Supabase</strong>, une plateforme d'hébergement conforme aux normes de sécurité.
                            Wi'Tech met en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé,
                            perte ou divulgation.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Partage des données</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech ne vend, ne loue ni ne partage vos données personnelles avec des tiers, sauf dans les cas suivants :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                            <li>Avec votre consentement explicite</li>
                            <li>Pour se conformer à une obligation légale</li>
                            <li>Avec des prestataires de services techniques (hébergement, emailing) dans le cadre strict de nos activités</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Vos droits</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Droit d'accès :</strong> Vous pouvez demander une copie de vos données</li>
                            <li><strong>Droit de rectification :</strong> Vous pouvez corriger vos données inexactes</li>
                            <li><strong>Droit à l'effacement :</strong> Vous pouvez demander la suppression de vos données</li>
                            <li><strong>Droit d'opposition :</strong> Vous pouvez vous opposer au traitement de vos données</li>
                            <li><strong>Droit à la portabilité :</strong> Vous pouvez récupérer vos données dans un format structuré</li>
                            <li><strong>Droit de limitation :</strong> Vous pouvez demander la limitation du traitement</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Exercer vos droits</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Pour exercer vos droits ou pour toute question concernant le traitement de vos données personnelles,
                            vous pouvez nous contacter à l'adresse suivante :
                        </p>
                        <p className="text-gray-700 mt-4">
                            <strong>Email :</strong> <a href="mailto:witechagency@gmail.com" className="text-blue-600 hover:underline">witechagency@gmail.com</a>
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Nous nous engageons à répondre à votre demande dans un délai de <strong>30 jours</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech se réserve le droit de modifier cette politique de confidentialité à tout moment.
                            Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
                        </p>
                        <p className="text-gray-700 mt-4">
                            <strong>Dernière mise à jour :</strong> 27 novembre 2025
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}

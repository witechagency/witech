import { motion } from 'framer-motion';

export function CGV() {
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
                >
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Wi'Tech et ses clients
                            dans le cadre de la création de sites internet (vitrines, e-commerce) et des services associés (maintenance, SEO, options diverses).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Prestations proposées</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Wi'Tech propose les prestations suivantes :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Création de sites vitrines (Pack Basique, Medium, Plus)</li>
                            <li>Création de sites e-commerce</li>
                            <li>Options : SEO avancé, maintenance, email professionnel, automatisation & IA, support premium</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Commande et devis</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Toute commande fait l'objet d'un devis préalable envoyé au client. Le devis est valable 30 jours à compter de sa date d'émission.
                            La commande n'est considérée comme définitive qu'après acceptation écrite du devis par le client et réception de l'acompte.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Tarifs et paiement</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Les tarifs sont indiqués en euros (€) et peuvent être révisés à tout moment. Les prix applicables sont ceux en vigueur au moment de la commande.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong>Modalités de paiement :</strong>
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Acompte de 50% à la commande</li>
                            <li>Solde de 50% à la livraison du site</li>
                            <li>Moyens de paiement acceptés : virement bancaire, carte bancaire</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Délais de réalisation</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les délais de réalisation sont communiqués à titre indicatif et peuvent varier en fonction de la complexité du projet et de la réactivité du client
                            dans la transmission des éléments nécessaires (contenus, images, accès, etc.).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Obligations du client</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Le client s'engage à :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Fournir tous les éléments nécessaires à la réalisation du projet (textes, images, logos, accès)</li>
                            <li>Respecter les droits d'auteur et de propriété intellectuelle pour les contenus fournis</li>
                            <li>Valider les étapes du projet dans les délais convenus</li>
                            <li>Effectuer les paiements selon les modalités prévues</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Livraison et transmission des accès</h2>
                        <p className="text-gray-700 leading-relaxed">
                            À l'issue de la réalisation, Wi'Tech livre le site internet et transmet au client les accès nécessaires (administration, hébergement, etc.).
                            Le client dispose d'un délai de 7 jours pour signaler d'éventuels dysfonctionnements.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Maintenance (option)</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les services de maintenance sont proposés en option (mensuelle ou annuelle). Ils incluent les mises à jour techniques,
                            la sécurité et le support technique. Les modifications de contenu ou de design ne sont pas incluses sauf mention contraire.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Responsabilité de Wi'Tech</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la bonne réalisation des prestations.
                            Toutefois, sa responsabilité ne saurait être engagée en cas de force majeure ou de manquement du client à ses obligations.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Données personnelles</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les données personnelles collectées dans le cadre de la commande sont traitées conformément à notre
                            <a href="/confidentialite" className="text-blue-600 hover:underline ml-1">Politique de Confidentialité</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Litiges</h2>
                        <p className="text-gray-700 leading-relaxed">
                            En cas de litige, une solution amiable sera recherchée en priorité. À défaut, le litige sera porté devant les tribunaux compétents.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}

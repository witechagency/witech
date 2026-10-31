import { staticSeo, useSeo } from '../../lib/seo';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CGV() {
    useSeo(staticSeo('/cgv'));
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                        Conditions Générales de Vente
                    </h1>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">1. Objet</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les présentes Conditions Générales de Vente (CGV) définissent les droits et obligations réciproques entre l'agence Wi'Tech et ses clients professionnels (PME, ETI, indépendants) dans le cadre de ses prestations d'ingénierie web, d'architecture cloud, d'automatisations de processus et de maintenance.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">2. Services & Domaines d'Expertise</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Wi'Tech accompagne ses clients à travers des solutions sur-mesure :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Ingénierie & Création Web :</strong> Conception de sites internet convertissants, plateformes e-commerce et applications web modernes et éco-conçues.</li>
                            <li><strong>Cloud & Sécurité Microsoft Azure :</strong> Architecture, déploiement d'infrastructures sécurisées, gouvernance cloud et conformité.</li>
                            <li><strong>Automatisations & Intégrations :</strong> Développement de workflows d'automatisation sur-mesure (API, Power Automate, n8n, scripts dédiés) et intégration d'agents intelligents.</li>
                            <li><strong>Infogérance & Maintien Opérationnel :</strong> Mises à jour techniques, monitoring proactif, sauvegardes et support technique.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3. Cadrage du Projet et Contractualisation</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Chaque prestation fait l'objet d'un échange préalable permettant d'établir une proposition d'accompagnement sur-mesure (proposition d'intervention ou contrat de mission) définissant le périmètre technique, les livrables attendus et le planning prévisionnel.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            La commande devient définitive dès signature ou acceptation écrite de la proposition par le client et, le cas échéant, réception de l'acompte initial convenu.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">4. Conditions Financières & Modalités de Règlement</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Les conditions financières sont établies sur-mesure en fonction de la complexité technique, du niveau de personnalisation et de l'infrastructure requise. Les montants sont exprimés en euros hors taxes (€ HT).
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            <strong>Modalités de paiement applicables (sauf accord spécifique convenu entre les parties) :</strong>
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Acompte de démarrage lors de la validation de la proposition (généralement 50%)</li>
                            <li>Solde à la livraison et mise en ligne définitive (50%)</li>
                            <li>Pour les prestations récurrentes (infogérance, maintenance Azure) : facturation périodique (mensuelle ou annuelle) à terme à échoir</li>
                            <li>Règlements acceptés : virement bancaire sécurisé ou prélèvement</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">5. Délais et Collaboration</h2>
                        <p className="text-gray-700 leading-relaxed">
                            La réussite du projet repose sur une collaboration étroite. Les délais d'exécution communiqués sont conditionnés par la fourniture diligente par le client des contenus nécessaires (textes, visuels, charte, accès techniques tiers). Wi'Tech ne peut être tenue responsable d'un éventuel retard causé par une latence de validation ou de transmission d'éléments de la part du client.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">6. Recette et Livraison</h2>
                        <p className="text-gray-700 leading-relaxed">
                            À l'achèvement des développements, une phase de recette permet au client de vérifier la conformité des livrables. Le client dispose d'un délai de 7 jours ouvrés pour formuler d'éventuelles réserves motivées. À l'issue de ce délai ou dès mise en production effective, la recette est réputée prononcée sans réserve.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">7. Propriété Intellectuelle</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Le client reste l'unique propriétaire de l'ensemble des éléments, contenus, marques et données qu'il transmet à Wi'Tech.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Sous réserve du paiement intégral des sommes facturées, Wi'Tech cède au client les droits d'exploitation patrimoniaux sur les développements spécifiques créés pour son compte. Les technologies, briques open-source et services tiers (Microsoft Azure, Supabase, n8n) restent soumis à leurs licences respectives.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">8. Responsabilité et Garanties</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech est tenue à une obligation de moyens renforcée quant à la qualité d'exécution, la sécurité et la conformité des solutions déployées. Sa responsabilité ne saurait être engagée en cas de dysfonctionnement imputable à des services tiers (pannes réseau hébergeur non géré, coupure d'API externe, cyberattaque imprévisible) ou à une manipulation non autorisée par le client.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">9. Protection des Données Personnelles</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les échanges et données collectés dans le cadre contractuel sont traités dans le strict respect de la réglementation européenne. Pour plus d'informations, veuillez consulter notre{' '}
                            <Link to="/confidentialite" className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-4">
                                Politique de Confidentialité
                            </Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">10. Droit Applicable et Juridiction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les présentes CGV sont soumises au droit français. En cas de différend relatif à l'interprétation ou à l'exécution du contrat, les parties s'engagent à privilégier une conciliation amiable avant toute action judiciaire.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}

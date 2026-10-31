import { staticSeo, useSeo } from '../../lib/seo';
import { motion } from 'framer-motion';

export function Confidentialite() {
    useSeo(staticSeo('/confidentialite'));
    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
                        Politique de Confidentialité
                    </h1>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">1. Engagement & Conformité</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech s'engage à protéger la vie privée de ses utilisateurs et clients, et à traiter l'ensemble des données personnelles collectées avec transparence, responsabilité et sécurité, en pleine conformité avec le Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">2. Données Collectées</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Lorsque vous nous contactez ou effectuez une demande de renseignement via notre site, nous collectons uniquement les informations professionnelles strictement nécessaires au traitement de votre demande :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Nom complet</strong></li>
                            <li><strong>Entreprise ou organisation</strong></li>
                            <li><strong>Adresse email professionnelle</strong></li>
                            <li><strong>Numéro de téléphone</strong></li>
                            <li><strong>Objet ou solution concernée</strong> (Web, Cloud Azure, Automatisations, etc.)</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">3. Finalités du Traitement</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Les informations recueillies sont exclusivement destinées aux finalités suivantes :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>Prendre contact avec vous et répondre précisément à votre demande de renseignement</li>
                            <li>Analyser la faisabilité technique et fonctionnelle de votre projet</li>
                            <li>Assurer le suivi précontractuel et la relation client B2B</li>
                            <li>Améliorer l'expérience utilisateur et la sécurité de notre plateforme</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">4. Base Légale</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Le traitement de vos données personnelles repose sur votre <strong>consentement explicite</strong> manifesté lors de la soumission volontaire du formulaire, ainsi que sur l'<strong>intérêt légitime</strong> de Wi'Tech à répondre aux sollicitations de ses interlocuteurs professionnels dans le cadre de mesures précontractuelles.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">5. Durée de Conservation</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Les données des prospects et contacts sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier contact émanant de votre part. Les données relatives aux clients contractuels sont conservées pendant la durée de la relation commerciale augmentée des délais de prescription légale applicables.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">6. Sécurité & Stockage des Données</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech applique des standards élevés de sécurité technique et organisationnelle (chiffrement TLS/SSL des flux de transmission, contrôle d'accès strict, authentification sécurisée). Les données sont hébergées sur des infrastructures cloud certifiées et conformes aux exigences européennes de souveraineté et de protection des données (notamment Supabase et Microsoft Azure).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">7. Confidentialité & Non-Cession</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Wi'Tech ne vend, ne loue, ni ne cède aucune donnée personnelle à des fins commerciales ou publicitaires. Les données ne sont accessibles qu'aux collaborateurs habilités de Wi'Tech et, le cas échéant, aux sous-traitants techniques intervenant directement dans l'acheminement des messages (ex : service d'emailing transactionnel ou hébergeur), soumis aux mêmes obligations de confidentialité.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">8. Vos Droits RGPD</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Conformément à la réglementation applicable, vous disposez des droits suivants à tout moment :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li><strong>Droit d'accès et d'information :</strong> Obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
                            <li><strong>Droit de rectification :</strong> Corriger toute information inexacte ou incomplète</li>
                            <li><strong>Droit à l'effacement :</strong> Demander la suppression définitive de vos données</li>
                            <li><strong>Droit d'opposition :</strong> Vous opposer à un traitement pour motif légitime</li>
                            <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et couramment lisible</li>
                            <li><strong>Droit à la limitation :</strong> Demander le gel temporaire du traitement</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">9. Contact & Exercice de vos Droits</h2>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Pour toute demande concernant la gestion de vos données ou pour exercer vos droits, vous pouvez nous écrire directement :
                        </p>
                        <p className="text-gray-700">
                            <strong>Email :</strong>{' '}
                            <a href="mailto:contact@witechagency.com" className="text-red-600 hover:text-red-700 font-semibold underline underline-offset-4">
                                contact@witechagency.com
                            </a>
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4 text-sm text-gray-500">
                            Wi'Tech s'engage à traiter toute demande justifiée sous un délai maximum de 30 jours à compter de sa réception.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">10. Mises à Jour</h2>
                        <p className="text-gray-700 leading-relaxed">
                            La présente politique est susceptible d'évoluer en fonction des évolutions légales, réglementaires ou techniques. Toute mise à jour sera consultable en libre accès sur cette page.
                        </p>
                    </section>
                </motion.div>
            </div>
        </div>
    );
}

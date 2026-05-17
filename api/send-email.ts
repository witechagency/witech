import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { nom, entreprise, numero, email, pack } = req.body;

    if (!nom || !email || !pack) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    try {
        // 1️⃣ Notification interne Wi'Tech
        await resend.emails.send({
            from: "Wi'Tech <contact@witechagency.com>",
            to: ['witechagency@gmail.com'],
            subject: `Nouvelle demande de devis — ${pack}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a1a;">Nouvelle demande de devis</h2>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; font-weight: bold;">Pack</td><td style="padding: 8px;">${pack}</td></tr>
                        <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Nom</td><td style="padding: 8px;">${nom}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Entreprise</td><td style="padding: 8px;">${entreprise}</td></tr>
                        <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Téléphone</td><td style="padding: 8px;">${numero}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
                    </table>
                </div>
            `,
        });

        // 2️⃣ Auto-reply au client
        await resend.emails.send({
            from: "Wi'Tech <contact@witechagency.com>",
            to: [email],
            subject: "Votre demande a bien été reçue — Wi'Tech",
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a1a;">Bonjour ${nom},</h2>
                    <p>Nous avons bien reçu votre demande pour le pack <strong>${pack}</strong>.</p>
                    <p>Notre équipe vous recontactera dans les plus brefs délais.</p>
                    <br/>
                    <p style="color: #666;">L'équipe Wi'Tech<br/>
                    <a href="https://witechagency.com" style="color: #7c3aed;">witechagency.com</a></p>
                </div>
            `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: "Erreur lors de l'envoi du mail" });
    }
}

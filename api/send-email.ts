import { Resend } from 'resend';

const VALID_PACKS = new Set([
    'Site Premium',
    'Accompagnement Sur-mesure',
    'SEO & Visibilité',
    'Sécurité Azure & Support',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function esc(value: unknown): string {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function cleanField(value: unknown): string {
    return String(value ?? '').trim().slice(0, 100);
}

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('RESEND_API_KEY manquante dans les variables d’environnement Vercel');
        return res.status(500).json({ error: 'Configuration serveur : RESEND_API_KEY manquante sur Vercel' });
    }

    const resend = new Resend(apiKey);
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body ?? {});

    // Anti-robots : honeypot rempli ou soumission en moins de 3 secondes → 200 silencieux
    if (body.website) {
        return res.status(200).json({ success: true });
    }
    const openedAt = Number(body.openedAt);
    if (!Number.isFinite(openedAt) || Date.now() - openedAt < 3000) {
        return res.status(200).json({ success: true });
    }

    const nom = cleanField(body.nom);
    const entreprise = cleanField(body.entreprise);
    const numero = cleanField(body.numero);
    const email = cleanField(body.email);
    const rawPack = cleanField(body.pack);
    const pack = VALID_PACKS.has(rawPack) ? rawPack : 'Contact général';

    if (!nom || !email) {
        return res.status(400).json({ error: 'Champs manquants' });
    }

    if (!EMAIL_RE.test(email)) {
        return res.status(400).json({ error: 'Email invalide' });
    }

    const safeNom = esc(nom);
    const safeEntreprise = esc(entreprise);
    const safeNumero = esc(numero);
    const safeEmail = esc(email);
    const safePack = esc(pack);

    try {
        // 1️⃣ Notification interne Wi'Tech
        const internal = await resend.emails.send({
            from: "Wi'Tech <contact@witechagency.com>",
            to: ['contact@witechagency.com'],
            replyTo: email,
            subject: `Nouvelle demande — ${pack} — ${entreprise || nom}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1a1a1a;">Nouvelle demande</h2>
                    <table style="width:100%; border-collapse: collapse;">
                        <tr><td style="padding: 8px; font-weight: bold;">Pack</td><td style="padding: 8px;">${safePack}</td></tr>
                        <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Nom</td><td style="padding: 8px;">${safeNom}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Entreprise</td><td style="padding: 8px;">${safeEntreprise}</td></tr>
                        <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold;">Téléphone</td><td style="padding: 8px;">${safeNumero}</td></tr>
                        <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${safeEmail}</td></tr>
                    </table>
                </div>
            `,
            text: `Nouvelle demande\nPack : ${pack}\nNom : ${nom}\nEntreprise : ${entreprise}\nTéléphone : ${numero}\nEmail : ${email}\n`,
        });

        if (internal.error) {
            console.error('Resend internal email error:', internal.error);
            return res.status(500).json({ error: `Resend: ${internal.error.message || internal.error.name}` });
        }

        // 2️⃣ Accusé de réception au prospect (aucun texte libre repris)
        const reply = await resend.emails.send({
            from: "Wi'Tech <contact@witechagency.com>",
            to: [email],
            subject: "Votre demande a bien été reçue — Wi'Tech",
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.6;">
                    <img src="https://www.witechagency.com/email-logo.png" alt="Wi'Tech" width="56" height="56" style="display: block; border-radius: 12px; margin-bottom: 20px;" />
                    <h2 style="color: #1a1a1a; margin: 0 0 12px;">Bonjour,</h2>
                    <p>Nous avons bien reçu votre demande concernant <strong>${safePack}</strong>.</p>
                    <p>Nous revenons vers vous sous 24 h ouvrées.</p>
                    <p>En attendant, vous pouvez consulter <a href="https://www.witechagency.com/realisations" style="color: #dc2626; font-weight: 600;">nos réalisations</a>.</p>
                    <br/>
                    <p style="color: #666; margin: 0;">L'équipe Wi'Tech<br/>
                    <a href="https://www.witechagency.com" style="color: #dc2626;">witechagency.com</a></p>
                </div>
            `,
            text: `Bonjour,\n\nNous avons bien reçu votre demande concernant ${pack}.\nNous revenons vers vous sous 24 h ouvrées.\n\nEn attendant, vous pouvez consulter nos réalisations : https://www.witechagency.com/realisations\n\nL'équipe Wi'Tech\nhttps://www.witechagency.com\n`,
        });

        if (reply.error) {
            console.error('Resend auto-reply error:', reply.error);
        }

        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Resend exception:', error);
        return res.status(500).json({ error: error?.message || "Erreur lors de l'envoi du mail" });
    }
}

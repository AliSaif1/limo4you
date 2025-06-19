import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.GMAIL_USER,
            subject: `Message from ${name}`,
            text: message,
        });

        return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (err) {
        return res.status(500).json({ success: false, error: err.message });
    }
}

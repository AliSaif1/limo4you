import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email content for admin
    const adminMailOptions = {
      from: `"Limo4All Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Message</h2>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p><strong style="color: #555;">Name:</strong> ${name}</p>
            <p><strong style="color: #555;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong style="color: #555;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong style="color: #555;">Message:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 3px; margin-top: 5px; border-left: 3px solid #4CAF50;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            This message was sent from the contact form on Limo4All website.
          </p>
        </div>
      `,
    };

    // Optional confirmation to user
    const customerMailOptions = {
      from: `"Limo4All" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We've received your message`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">Thank you for contacting Limo4All</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <div style="background-color: white; padding: 10px; border-radius: 3px; margin-top: 5px; border-left: 3px solid #4CAF50;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          
          <p>If you have any urgent inquiries, please feel free to call us directly.</p>
          <p style="margin-top: 30px;">Best regards,<br/><strong>The Limo4All Team</strong></p>
          
          <div style="margin-top: 40px; padding-top: 10px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
            <p>This is an automated message. Please do not reply directly to this email.</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      error: 'Failed to send message. Please try again later or contact us directly.'
    });
  }
}
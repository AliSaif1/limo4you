import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      pickup,
      destination,
      date,
      time,
      passengers,
    } = req.body;

    // Simple validation
    if (!name || !email || !pickup || !destination || !date || !time) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Email to Customer
    const customerMailOptions = {
      from: `"Limo 4 All" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Your Reservation Request Received`,
      html: `<!DOCTYPE html><html><body><h2>Thanks, ${name}!</h2><p>Your request is received for ${date} at ${time} from ${pickup} to ${destination}.</p><p>We'll contact you shortly.</p></body></html>`,
    };

    // Email to Admin
    const internalMailOptions = {
      from: `"Limo 4 All Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Reservation from ${name}`,
      html: `<!DOCTYPE html><html><body><h2>New Reservation Request</h2><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Phone: ${phone}</li><li>Pickup: ${pickup}</li><li>Destination: ${destination}</li><li>Date: ${date}</li><li>Time: ${time}</li><li>Passengers: ${passengers}</li></ul></body></html>`,
    };

    // Send both emails
    const customerResult = await transporter.sendMail(customerMailOptions);
    const adminResult = await transporter.sendMail(internalMailOptions);

    if (!customerResult.messageId || !adminResult.messageId) {
      throw new Error('One or both emails failed to send.');
    }

    return res.status(200).json({ success: true, message: 'Emails sent successfully' });

  } catch (err) {
    console.error('EMAIL ERROR:', err);
    return res.status(500).json({ success: false, error: err.message || 'Unknown error' });
  }
}

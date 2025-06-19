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
            from: `"Limo4All" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `Your Limo Service Reservation Request - Confirmation #${Date.now()}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; }
            .logo { max-width: 200px; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
            .details { background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://limo4all.ca/logo.png" alt="Limo4All" class="logo">
          </div>
          
          <p>Hey ${name},</p>
          
          <p>Thank you for choosing Limo4All for your transportation needs. We've received your reservation request and our team is processing it.</p>
          
          <div class="details">
            <h3>Reservation Details:</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Pickup Location:</strong> ${pickup}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            ${passengers ? `<p><strong>Passengers:</strong> ${passengers}</p>` : ''}
          </div>
          
          <p>A representative will contact you within 24 hours to confirm your booking and discuss any additional requirements you may have.</p>
          
          <p>If you have any immediate questions, please don't hesitate to contact us at <a href="mailto:info@limo4all.ca">info@limo4all.ca</a> or call us at [Your Business Phone Number].</p>
          
          <div class="footer">
            <p>This is an automated email. Please do not reply directly to this message.</p>
            <p>© ${new Date().getFullYear()} Limo4All. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
        };

        // Email to Admin
        const internalMailOptions = {
            from: `"Limo4All Reservations" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER,
            subject: `[ACTION REQUIRED] New Reservation Request from ${name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; }
            .logo { max-width: 200px; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
            .details { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
            .urgent { color: #d9534f; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://limo4all.ca/logo.png" alt="Limo4All" class="logo">
          </div>
          
          <p>Hey Team,</p>
          
          <p class="urgent">New reservation request received that requires your attention.</p>
          
          <div class="details">
            <h3>Customer Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            
            <h3>Trip Details:</h3>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Time:</strong> ${time}</p>
            <p><strong>Pickup:</strong> ${pickup}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            ${passengers ? `<p><strong>Passengers:</strong> ${passengers}</p>` : ''}
          </div>
          
          <p>Please contact the customer within 24 hours to confirm availability and finalize the booking.</p>
          
          <div class="footer">
            <p>This is an automated notification from the Limo4All reservation system.</p>
          </div>
        </body>
        </html>
      `,
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
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Customer confirmation email
  const customerMailOptions = {
    from: `"Limo 4 All" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Your Reservation Request Received`,
    html: `
        <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="UTF-8">
                    <title>Reservation Confirmation</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background-color: #2c3e50;
                            color: white;
                            padding: 20px;
                            text-align: center;
                            border-radius: 5px 5px 0 0;
                        }
                        .logo {
                            max-width: 200px;
                            height: auto;
                        }
                        .content {
                            padding: 20px;
                            border: 1px solid #ddd;
                            border-top: none;
                            border-radius: 0 0 5px 5px;
                        }
                        .detail-row {
                            margin-bottom: 15px;
                            padding-bottom: 15px;
                            border-bottom: 1px solid #eee;
                        }
                        .detail-row:last-child {
                            border-bottom: none;
                            margin-bottom: 0;
                            padding-bottom: 0;
                        }
                        .label {
                            font-weight: bold;
                            color: #2c3e50;
                            display: inline-block;
                            width: 150px;
                        }
                        .footer {
                            margin-top: 20px;
                            font-size: 12px;
                            color: #777;
                            text-align: center;
                        }
                        .signature {
                            margin-top: 30px;
                            border-top: 1px solid #eee;
                            padding-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <img src="https://limo4all/logo.png" alt="Limo 4 All" class="logo">
                    </div>
                    
                    <div class="content">
                        <h2>Thank you for your reservation request!</h2>
                        <p>We've received your booking details and our team will contact you shortly to confirm your reservation.</p>
                        
                        <h3>Your Request Details:</h3>
                        
                        <div class="detail-row">
                            <span class="label">Name:</span>
                            <span>${name}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="label">Phone:</span>
                            <span>${phone}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="label">Pickup Location:</span>
                            <span>${pickup}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="label">Destination:</span>
                            <span>${destination}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="label">Date:</span>
                            <span>${date}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="label">Time:</span>
                            <span>${time}</span>
                        </div>
                        
                        <div class="detail-row">
                            <span class="label">Passengers:</span>
                            <span>${passengers}</span>
                        </div>
                        
                        <div class="signature">
                            <p>Best regards,</p>
                            <p><strong>The Limo 4 All Team</strong></p>
                            <p>Phone: [Your Business Phone]</p>
                            <p>Email: ${process.env.GMAIL_USER}</p>
                            <p>Website: https://limo4all.com</p>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>This is an automated message. Please do not reply directly to this email.</p>
                    </div>
                </body>
            </html> `
  };

  // Internal notification email
  const internalMailOptions = {
    from: `"Limo 4 All Website" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `New Reservation Request from ${name}`,
    html: `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <title>New Reservation Request</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .header {
                        background-color: #2c3e50;
                        color: white;
                        padding: 20px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .logo {
                        max-width: 200px;
                        height: auto;
                    }
                    .content {
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-top: none;
                        border-radius: 0 0 5px 5px;
                    }
                    .detail-row {
                        margin-bottom: 15px;
                        padding-bottom: 15px;
                        border-bottom: 1px solid #eee;
                    }
                    .detail-row:last-child {
                        border-bottom: none;
                        margin-bottom: 0;
                        padding-bottom: 0;
                    }
                    .label {
                        font-weight: bold;
                        color: #2c3e50;
                        display: inline-block;
                        width: 150px;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #777;
                        text-align: center;
                    }
                    .urgent {
                        color: #e74c3c;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="header">
                    <img src="https://limo4all/logo.png" alt="Limo 4 All" class="logo">
                    <h2>New Reservation Request</h2>
                </div>
                
                <div class="content">
                    <p class="urgent">New reservation received! Please contact the client as soon as possible.</p>
                    
                    <div class="detail-row">
                        <span class="label">Name:</span>
                        <span>${name}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Email:</span>
                        <span><a href="mailto:${email}">${email}</a></span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Phone:</span>
                        <span><a href="tel:${phone}">${phone}</a></span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Pickup Location:</span>
                        <span>${pickup}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Destination:</span>
                        <span>${destination}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Date:</span>
                        <span>${date}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Time:</span>
                        <span>${time}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Passengers:</span>
                        <span>${passengers}</span>
                    </div>
                    
                    <div class="footer">
                        <p>This reservation was submitted through the Limo 4 All website.</p>
                    </div>
                </div>
            </body>
        </html>`
  };

  try {
    // Send email to customer
    await transporter.sendMail(customerMailOptions);
    
    // Send email to internal team
    await transporter.sendMail(internalMailOptions);
    
    return res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (err) {
    console.error('Email send failed:', err);
    return res.status(500).json({ success: false, error: err.message });
  }
}

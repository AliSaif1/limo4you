import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method Not Allowed',
      message: 'Only POST requests are accepted'
    });
  }

  try {
    const {
      name,
      email,
      phone,
      pickup,
      destination,
      date,
      slot,
      passengers,
      vehicleType,
    } = req.body;

    // Comprehensive validation
    const errors = [];
    
    if (!pickup || pickup.trim().length < 3) {
      errors.push('Pickup location must be at least 3 characters');
    }
    
    if (!destination || destination.trim().length < 3) {
      errors.push('Destination must be at least 3 characters');
    }
    
    if (!date || !Date.parse(date)) {
      errors.push('Valid date is required');
    } else if (new Date(date) < new Date()) {
      errors.push('Date cannot be in the past');
    }
    
    if (!slot) {
      errors.push('Time slot is required');
    }
    
    if (!email && !phone) {
      errors.push('Either email or phone number is required');
    }
    
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Valid email address is required');
    }
    
    if (phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone)) {
      errors.push('Valid phone number is required');
    }
    
    if (passengers && (isNaN(passengers) || passengers < 1)) {
      errors.push('Passenger count must be at least 1');
    }
    
    if (errors.length > 0) {
      return res.status(400).json({ 
        success: false,
        errors: errors,
        message: 'Validation failed'
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Format date for display
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Admin email template
    const adminMailOptions = {
      from: `"Limo4All Reservations" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `[URGENT] New ${vehicleType || 'Vehicle'} Reservation Request from ${name || 'Customer'}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 25px; }
            .logo { max-width: 200px; height: auto; }
            .content { background: #f9f9f9; padding: 25px; border-radius: 8px; }
            .section { margin-bottom: 20px; }
            .section-title { color: #2c3e50; font-size: 18px; margin-bottom: 10px; font-weight: bold; }
            .detail-item { margin-bottom: 8px; }
            .label { font-weight: bold; color: #555; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
            .urgent { color: #e74c3c; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://limo4all.ca/logo.png" alt="Limo4All" class="logo">
            <h2>New Reservation Request</h2>
          </div>
          
          <div class="content">
            <p class="urgent">Action Required: Please respond within 24 hours</p>
            
            <div class="section">
              <div class="section-title">Vehicle Information</div>
              <div class="detail-item"><span class="label">Vehicle Type:</span> ${vehicleType || 'Not specified'}</div>
            </div>
            
            <div class="section">
              <div class="section-title">Customer Details</div>
              ${name ? `<div class="detail-item"><span class="label">Name:</span> ${name}</div>` : ''}
              ${email ? `<div class="detail-item"><span class="label">Email:</span> <a href="mailto:${email}">${email}</a></div>` : ''}
              ${phone ? `<div class="detail-item"><span class="label">Phone:</span> <a href="tel:${phone}">${phone}</a></div>` : ''}
            </div>
            
            <div class="section">
              <div class="section-title">Trip Details</div>
              <div class="detail-item"><span class="label">Pickup Location:</span> ${pickup}</div>
              <div class="detail-item"><span class="label">Destination:</span> ${destination}</div>
              <div class="detail-item"><span class="label">Date:</span> ${formattedDate}</div>
              <div class="detail-item"><span class="label">Time Slot:</span> ${slot}</div>
              ${passengers ? `<div class="detail-item"><span class="label">Passengers:</span> ${passengers}</div>` : ''}
            </div>
          </div>
          
          <div class="footer">
            <p>This reservation request was automatically generated from the Limo4All website.</p>
            <p>© ${new Date().getFullYear()} Limo4All. All rights reserved.</p>
          </div>
        </body>
        </html>
      `
    };

    // Customer email template (only if email was provided)
    const customerMailOptions = email ? {
      from: `"Limo4All" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Your ${vehicleType || 'Limo Service'} Reservation Request - Confirmation`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 25px; }
            .logo { max-width: 200px; height: auto; }
            .content { background: #f9f9f9; padding: 25px; border-radius: 8px; }
            .section { margin-bottom: 20px; }
            .section-title { color: #2c3e50; font-size: 18px; margin-bottom: 10px; font-weight: bold; }
            .detail-item { margin-bottom: 8px; }
            .label { font-weight: bold; color: #555; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; }
            .highlight { background-color: #f1c40f; padding: 2px 5px; border-radius: 3px; }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://limo4all.ca/logo.png" alt="Limo4All" class="logo">
            <h2>Reservation Request Received</h2>
          </div>
          
          <div class="content">
            <p>Hey ${name || 'there'},</p>
            
            <p>Thank you for your reservation request for our <span class="highlight">${vehicleType || 'premium vehicle'}</span> service. We've received the following details:</p>
            
            <div class="section">
              <div class="section-title">Your Trip Details</div>
              <div class="detail-item"><span class="label">Vehicle:</span> ${vehicleType || 'Premium Limousine'}</div>
              <div class="detail-item"><span class="label">Pickup Location:</span> ${pickup}</div>
              <div class="detail-item"><span class="label">Destination:</span> ${destination}</div>
              <div class="detail-item"><span class="label">Date:</span> ${formattedDate}</div>
              <div class="detail-item"><span class="label">Time:</span> ${slot}</div>
              ${passengers ? `<div class="detail-item"><span class="label">Passengers:</span> ${passengers}</div>` : ''}
            </div>
            
            <p>Our team is reviewing your request and will contact you within 24 hours to confirm availability and provide pricing details.</p>
            
            <p>If you have any questions or need immediate assistance, please contact us at:</p>
            <ul>
              <li>Phone: [Your Business Phone]</li>
              <li>Email: <a href="mailto:info@limo4all.ca">info@limo4all.ca</a></li>
            </ul>
          </div>
          
          <div class="footer">
            <p>This is an automated confirmation. Please do not reply directly to this email.</p>
            <p>© ${new Date().getFullYear()} Limo4All. All rights reserved.</p>
          </div>
        </body>
        </html>
      `
    } : null;

    // Send emails
    await transporter.sendMail(adminMailOptions);
    if (customerMailOptions) {
      await transporter.sendMail(customerMailOptions);
    }

    return res.status(200).json({ 
      success: true,
      message: 'Emails sent successfully'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Internal Server Error',
      message: 'Failed to send emails. Please try again later.'
    });
  }
}
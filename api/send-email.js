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
      pickupTime,
      dropoffTime,
      passengers,
      vehicleType,
      vehicleName,
      vehiclePrice,
      vehicleOriginalPrice,
      isAirportPickup,
      flightNumber,
      airline,
      duration,
      price,
      originalPrice,
      discount,
      specialRequests,
      createdAt
    } = req.body;

    // Validation
    if (!name || !email || !pickup || !destination || !date || !pickupTime) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Format currency
    const formatCurrency = (amount) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
    };

    // Format date and time
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    // Generate confirmation number
    const confirmationNumber = `LIMO-${Date.now().toString().slice(-8)}`;

    // Airport pickup details if applicable
    const airportDetails = isAirportPickup ? `
      <div style="margin-top: 15px; padding: 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #2e7d32;">
        <p style="margin: 0 0 8px 0; font-weight: 600; color: #2e7d32;">✈️ Airport Pickup Details</p>
        ${flightNumber ? `<p style="margin: 4px 0;"><strong>Flight Number:</strong> ${flightNumber}</p>` : ''}
        ${airline ? `<p style="margin: 4px 0;"><strong>Airline:</strong> ${airline}</p>` : ''}
      </div>
    ` : '';

    // Special requests if provided
    const specialRequestsSection = specialRequests ? `
      <div style="margin-top: 15px; padding: 12px; background: #fff3e0; border-radius: 6px; border-left: 4px solid #fb8c00;">
        <p style="margin: 0 0 8px 0; font-weight: 600; color: #e65100;">🌟 Special Requests</p>
        <p style="margin: 0;">${specialRequests}</p>
      </div>
    ` : '';

    // Email to Customer
    const customerMailOptions = {
      from: `"Limo4All" <${process.env.GMAIL_USER}>`,
      to: email,
      bcc: process.env.BCC_EMAIL || '', // Optional BCC for customer emails
      subject: `Your Limo Service Reservation - Confirmation #${confirmationNumber}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 650px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
            .logo { max-width: 180px; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 15px; }
            .details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border: 1px solid #e9ecef; }
            .section-title { color: #2c3e50; font-size: 18px; margin-bottom: 15px; font-weight: 600; }
            .highlight-box { background: #e3f2fd; padding: 15px; border-radius: 6px; margin: 20px 0; }
            .price { font-size: 20px; font-weight: bold; color: #2e7d32; }
            .discount { color: #c62828; font-weight: 500; }
            .contact-info { margin-top: 25px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0; }
            @media (max-width: 500px) { .info-grid { grid-template-columns: 1fr; } }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://limo4all.ca/logo.png" alt="Limo4All" class="logo">
            <h2 style="margin-bottom: 5px; color: #2c3e50;">Reservation Request Received</h2>
            <p style="margin-top: 0; color: #7f8c8d;">Confirmation #${confirmationNumber}</p>
          </div>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for choosing <strong>Limo4All</strong> for your premium transportation needs. We've received your reservation request and our team is currently processing it.</p>
          
          <div class="highlight-box">
            <p style="margin: 0; font-weight: 500;">A confirmation specialist will contact you within <strong>2 business hours</strong> to finalize your booking details.</p>
          </div>
          
          <div class="details">
            <div class="section-title">Trip Summary</div>
            
            <div class="info-grid">
              <div>
                <p><strong>Vehicle:</strong> ${vehicleName || vehicleType || 'Not specified'}</p>
                <p><strong>Pickup Date:</strong> ${formatDate(date)}</p>
                <p><strong>Pickup Time:</strong> ${pickupTime}</p>
                ${dropoffTime ? `<p><strong>Drop-off Time:</strong> ${dropoffTime}</p>` : ''}
              </div>
              <div>
                ${passengers ? `<p><strong>Passengers:</strong> ${passengers}</p>` : ''}
                ${duration ? `<p><strong>Duration:</strong> ${duration} hours</p>` : ''}
              </div>
            </div>
            
            <p><strong>Pickup Location:</strong> ${pickup}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            
            ${airportDetails}
            ${specialRequestsSection}
            
            <div style="margin-top: 20px; border-top: 1px dashed #ddd; padding-top: 15px;">
              <p><strong>Base Price:</strong> ${formatCurrency(vehicleOriginalPrice || originalPrice)}</p>
              ${discount ? `<p><strong>Discount Applied:</strong> <span class="discount">${discount} CAD</span></p>` : ''}
              <p class="price">Estimated Total: ${formatCurrency(price)}</p>
              <p style="font-size: 13px; color: #666;">* Final price may vary based on actual trip details</p>
            </div>
          </div>
          
          <p>Please review the details above carefully. If any information is incorrect or if you need to make changes, please contact us immediately.</p>
          
          <div class="contact-info">
            <p><strong>Need immediate assistance?</strong></p>
            <p>Email: <a href="mailto:booking@limo4all.ca" style="color: #3498db;">info@limo4all.ca</a></p>
            <p>Phone: <a href="tel:+16473131786" style="color: #3498db;">1-888-555-1234</a></p>
            <p>Hours: 24/7 Customer Support</p>
          </div>
          
          <p>We appreciate your business and look forward to serving you!</p>
          
          <p>Sincerely,<br>The Limo4All Team</p>
          
          <div class="footer">
            <p>This is an automated message. Please do not reply directly to this email.</p>
            <p>© ${new Date().getFullYear()} Limo4All. All rights reserved.</p>
          </div>
        </body>
        </html>
      `,
    };

    // Email to Admin
    const internalMailOptions = {
      from: `"Limo4All Reservations" <${process.env.GMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      cc: process.env.CC_EMAIL || '', // Optional CC for admin notifications
      subject: `[NEW BOOKING] ${name} - ${vehicleName || vehicleType} - ${formatDate(date)} ${pickupTime} - ${confirmationNumber}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { text-align: center; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
            .logo { max-width: 160px; }
            .footer { margin-top: 30px; font-size: 12px; color: #777; text-align: center; border-top: 1px solid #eee; padding-top: 15px; }
            .details { background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e9ecef; }
            .section-title { color: #2c3e50; font-size: 18px; margin-bottom: 15px; font-weight: 600; }
            .urgent { background: #fff8e1; padding: 15px; border-radius: 6px; border-left: 4px solid #ffc107; margin: 20px 0; }
            .price { font-weight: bold; color: #2e7d32; }
            .customer-info { margin-bottom: 25px; }
            .action-btn { display: inline-block; background: #2196f3; color: white; padding: 10px 15px; text-decoration: none; border-radius: 4px; font-weight: 500; margin-top: 10px; }
            .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0; }
            .status-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-weight: 500; }
            @media (max-width: 500px) { .info-grid { grid-template-columns: 1fr; } }
          </style>
        </head>
        <body>
          <div class="header">
            <img src="https://limo4all.ca/logo.png" alt="Limo4All" class="logo">
            <h2 style="margin-bottom: 5px; color: #2c3e50;">New Reservation Request</h2>
            <p style="margin-top: 0; color: #7f8c8d;">Confirmation #${confirmationNumber}</p>
            <p style="margin: 5px 0; font-size: 15px; color: #666;">Received at: ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="urgent">
            <p style="margin: 0; font-weight: 500;">⚠️ <strong>Action Required:</strong> Please contact customer within 2 hours to confirm booking details.</p>
          </div>
          
          <div class="customer-info">
            <div class="section-title">Customer Information</div>
            <div class="info-grid">
              <div>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Phone:</strong> ${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</p>
              </div>
              <div>
                <p><strong>Status:</strong> <span class="status-badge" style="background: #fff3e0; color: #e65100;">Pending Confirmation</span></p>
                <p><strong>Booking Created:</strong> ${createdAt ? new Date(createdAt).toLocaleString() : 'Just now'}</p>
              </div>
            </div>
          </div>
          
          <div class="details">
            <div class="section-title">Trip Details</div>
            
            <div class="info-grid">
              <div>
                <p><strong>Vehicle:</strong> ${vehicleName || vehicleType || 'Not specified'}</p>
                <p><strong>Pickup Date:</strong> ${formatDate(date)}</p>
                <p><strong>Pickup Time:</strong> ${pickupTime}</p>
                ${dropoffTime ? `<p><strong>Drop-off Time:</strong> ${dropoffTime}</p>` : ''}
              </div>
              <div>
                ${passengers ? `<p><strong>Passengers:</strong> ${passengers}</p>` : ''}
                ${duration ? `<p><strong>Duration:</strong> ${duration} hours</p>` : ''}
                ${isAirportPickup ? `<p><strong>Airport Pickup:</strong> Yes</p>` : ''}
              </div>
            </div>
            
            <p><strong>Pickup Location:</strong> ${pickup}</p>
            <p><strong>Destination:</strong> ${destination}</p>
            
            ${airportDetails}
            ${specialRequestsSection}
            
            <div style="margin-top: 20px; border-top: 1px dashed #ddd; padding-top: 15px;">
              <div class="section-title">Pricing Information</div>
              <p><strong>Vehicle Base Price:</strong> ${formatCurrency(vehicleOriginalPrice || originalPrice)}</p>
              ${discount ? `<p><strong>Discount Applied:</strong> ${formatCurrency((vehicleOriginalPrice || originalPrice) - (vehiclePrice || price))}</p>` : ''}
              <p><strong>Adjusted Vehicle Price:</strong> ${formatCurrency(vehiclePrice || price)}</p>
              <p><strong>Estimated Total:</strong> <span class="price">${formatCurrency(price)}</span></p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 25px;">
            <a href="mailto:${email}?subject=Confirmation%20for%20Reservation%20${confirmationNumber}" class="action-btn">Respond to Customer</a>
            ${phone ? `<a href="tel:${phone}" class="action-btn" style="margin-left: 10px; background: #4caf50;">Call Customer</a>` : ''}
          </div>
          
          <p style="margin-top: 30px;"><strong>Next Steps:</strong></p>
          <ol>
            <li>Verify vehicle availability for requested date/time</li>
            <li>Contact customer to confirm details</li>
            <li>Check ${isAirportPickup ? 'flight status and ' : ''}special requests</li>
            <li>Send final confirmation with driver details</li>
          </ol>
          
          <div class="footer">
            <p>This is an automated notification from the Limo4All booking system.</p>
            <p>Booking ID: ${confirmationNumber} | ${new Date().toLocaleString()}</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send both emails
    const [customerResult, adminResult] = await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(internalMailOptions)
    ]);

    if (!customerResult.messageId || !adminResult.messageId) {
      throw new Error('Email delivery failed');
    }

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully',
      confirmationNumber: confirmationNumber
    });

  } catch (err) {
    console.error('EMAIL ERROR:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Failed to send confirmation emails',
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
}
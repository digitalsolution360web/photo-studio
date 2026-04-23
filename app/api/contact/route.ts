import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, phone, date, eventType, details } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      pool: true, // Use pooling for faster subsequent connections
      maxConnections: 1,
      maxMessages: Infinity,
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: `${process.env.CONTACT_EMAIL}, ${process.env.SECONDARY_CONTACT_EMAIL}`,
      subject: `New Inquiry from ${name} - Max Photo Studio`,
      text: `
        New Inquiry Details:
        
        Name: ${name}
        Phone: ${phone}
        Event Date: ${date || 'Not specified'}
        Event Type: ${eventType || 'Not specified'}
        Details: ${details}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #c9a050;">New Inquiry from Max Photo Studio</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Event Date:</strong> ${date || 'Not specified'}</p>
          <p><strong>Event Type:</strong> ${eventType || 'Not specified'}</p>
          <p><strong>Details/Venue:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #c9a050;">${details}</p>
        </div>
      `,
    };

    // Send email in the background without awaiting it to speed up the response
    transporter.sendMail(mailOptions).catch(err => console.error("Background Email Error:", err));

    // Return success immediately
    return NextResponse.json({ message: 'Inquiry received' }, { status: 200 });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name:      z.string().min(2),
  phone:     z.string().min(10),
  email:     z.string().email(),
  eventDate: z.string(),
  eventSize: z.string(),
  eventType: z.string(),
  message:   z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const owner  = process.env.OWNER_EMAIL ?? "owner@imanwestafrican.com";
    const from   = process.env.FROM_EMAIL  ?? "noreply@imanwestafrican.com";

    await resend.emails.send({
      from,
      to: owner,
      replyTo: data.email,
      subject: `🍽️ Catering Inquiry: ${data.eventType} — ${data.name} (${data.eventSize} guests)`,
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;color:#2a1a10">
          <div style="background:#5a3216;color:white;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:22px">New Catering Inquiry</h1>
            <p style="margin:4px 0 0;opacity:.7;font-size:13px">via imanwestafrican.com</p>
          </div>
          <div style="background:white;padding:32px;border:1px solid #dcc6b0;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:10px 0;border-bottom:1px solid #faefd9;font-weight:bold;width:130px">Name</td><td style="padding:10px 0;border-bottom:1px solid #faefd9">${data.name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #faefd9;font-weight:bold">Phone</td><td style="padding:10px 0;border-bottom:1px solid #faefd9"><a href="tel:${data.phone}" style="color:#c97f1e">${data.phone}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #faefd9;font-weight:bold">Email</td><td style="padding:10px 0;border-bottom:1px solid #faefd9"><a href="mailto:${data.email}" style="color:#c97f1e">${data.email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #faefd9;font-weight:bold">Event Date</td><td style="padding:10px 0;border-bottom:1px solid #faefd9">${data.eventDate}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #faefd9;font-weight:bold">Guests</td><td style="padding:10px 0;border-bottom:1px solid #faefd9">${data.eventSize}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #faefd9;font-weight:bold">Event Type</td><td style="padding:10px 0;border-bottom:1px solid #faefd9">${data.eventType}</td></tr>
            </table>
            <div style="margin-top:20px">
              <div style="font-weight:bold;margin-bottom:8px">Details:</div>
              <div style="background:#fdf8f0;padding:16px;border-radius:8px;font-size:14px;line-height:1.7">${data.message.replace(/\n/g, "<br>")}</div>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to customer
    await resend.emails.send({
      from,
      to: data.email,
      subject: "We received your catering inquiry — Iman West African Restaurant",
      html: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto">
          <div style="background:#5a3216;color:white;padding:24px 32px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px">Thank you, ${data.name}!</h1>
          </div>
          <div style="background:white;padding:32px;border:1px solid #dcc6b0;border-radius:0 0 12px 12px">
            <p>We received your catering inquiry for your <strong>${data.eventType}</strong> on <strong>${data.eventDate}</strong>.</p>
            <p>Our team will review and be in touch within <strong>24 hours</strong>.</p>
            <p>Need to reach us sooner? Call <a href="tel:6785550142" style="color:#c97f1e">(678) 555-0142</a>.</p>
            <p style="margin-top:24px;color:#9a6640;font-size:13px">— Iman West African Restaurant</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Catering email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

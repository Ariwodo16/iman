import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
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
      subject: `Contact: ${data.subject} — from ${data.name}`,
      html: `
        <p><strong>From:</strong> ${data.name} (${data.email})</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="background:#fdf8f0;padding:16px;border-radius:8px">${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

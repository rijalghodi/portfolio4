import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { contactEmail } from "@/data/contact";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // or 587 if using TLS
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_NAME, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !message || !name) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    const res = await transporter.sendMail({
      from: `"Contact Form - My Portfolio" <${contactEmail}>`,
      to: contactEmail, // message my self
      subject: "Message from My Portfolio Site",
      text: `Message: ${message}\n\n\nName: ${name}\n\nEmail: ${email}`,
    });

    return NextResponse.json({ success: true, data: res });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: err }, { status: 500 });
  }
}

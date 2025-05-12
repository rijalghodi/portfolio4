import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // or your domain
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // app password (not your main Gmail password)
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form - My Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // message my self
      subject: "Message from My Portfolio Site",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

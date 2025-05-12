import { contactEmail } from "@/data/contact";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
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

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL_USER, // your Gmail address
  //     pass: process.env.EMAIL_PASS, // app password (not your main Gmail password)
  //   },
  // });

  try {
    const res = await resend.emails.send({
      from: `"Contact Form - My Portfolio" <${contactEmail}>`,
      to: contactEmail, // message my self
      subject: "Message from My Portfolio Site",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, data: res });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

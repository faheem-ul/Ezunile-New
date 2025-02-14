import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, service, message } = await request.json();

    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "developer@innovativemojo.com",
        pass: "uqcy avif eqfa gcbd",
      },
    });
    // ${process.env.Email_Captive}
    const mailoptionsToAdmin = {
      from: email,
      to: `developer@innovativemojo.com `,
      subject: "Ezunile Response",
      text: `Following is the new message:
      Name: ${name}
      Email: ${email}
      Phone: ${service}
      Message: ${message}`,
    };

    const mailoptionsToUser = {
      from: "developer@innovativemojo.com",
      to: email,
      subject: "Thank You for reaching us!",
      html: `
      Dear Mr. ${name},
      Thank you for contacting Ezunile.  We will respond you shortly.
`,
    };

    await transport.sendMail(mailoptionsToAdmin);

    await transport.sendMail(mailoptionsToUser);
    return NextResponse.json({ error: "" });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json({ "Server error": error });
  }
}

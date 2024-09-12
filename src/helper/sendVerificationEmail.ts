import { ApiResponse } from "@/types/ApiResponse";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

export async function sendVerificationEmail(
  email: string,
  username: string,
  verificationCode: string
): Promise<ApiResponse> {
  const logoUrl =
    "https://github.com/vishalpawar26/assets/blob/main/Logo-1.png?raw=true";
  const htmlCode: string = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Verification Code</title>
    </head>
    <body
      style="background: #e4e4e4; width: 100%;"
    >
      <div
        class="container"
        style=" 
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: white;
        "
      >
        <div
          class="logo"
          style="text-align: center; padding: 16px; background-color: #1e1e1e"
        >
          <img src="${logoUrl}" alt="Logo" width="200"/>
        </div>
        <div class="content" style="padding: 16px">
          <h2 style="font-size: 24px">Verify your identity</h2>
          <p>Hello ${username},</p>
          <p>
            Welcome to PsychoCoders! Please use the verification code below to
            complete your registration:
          </p>
          <div
            class="code-block"
            style="
              padding: 16px;
              text-align: center;
              background-color: #f4f4f4;
              border-radius: 6px;
            "
          >
            <p style="font-weight: 600; font-size: 16px">Verification Code</p>
            <h2 style="padding: 8px; font-size: 24px">${verificationCode}</h2>
            <p style="font-size: 12px; font-weight: 500">
              (This code will expire 1 hour after it was sent.)
            </p>
          </div>
          <p>
            If this wasn't you, feel free to ignore this email. But if you're
            ready to get coding, let's get you set up!
          </p>
        </div>
        <div
          class="footer"
          style="
            padding: 16px;
            text-align: center;
            font-size: 14px;
            color: #808080;
          "
        >
          <p>Ready to solve problems? Get started now!</p>
        </div>
      </div>
    </body>
  </html>
  `;

  try {
    await transporter.sendMail({
      from: `"PsychoCoders" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: "PsychoCoders | Verification Code",
      html: htmlCode,
    });
    return { success: true, message: "Verification email sent successfully" };
  } catch (error) {
    console.error("Error while sending verification email", error);
    return { success: false, message: "Failed to send verification email" };
  }
}

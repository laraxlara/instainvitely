import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

const transporter = nodemailer.createTransport({
  host: "smt.mailgun.org",
  port: 587,
  secure: true,
  auth: {
    user: process.env.MAILGUN_SMTP_LOGIN,
    pass: process.env.MAILGUN_SMTP_PASSWORD,
  },
});

export async function sendVerificationEmail(email: string, userId: string) {
  const verificationLink = `https://yourwebsite.com/verify-email?token=${userId}`;

  const mailOptions: MailOptions = {
    from: "your@email.com",
    to: email,
    subject: "Verify Your Email",
    html: `Click <a href="${verificationLink}">here</a> to verify your email.`,
  };

  await transporter.sendMail(mailOptions);
}

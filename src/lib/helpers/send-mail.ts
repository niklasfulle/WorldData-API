import nodemailer from 'nodemailer';

function envCheck() {
  if (!process.env.NODEMAILER_EMAIL) {
    throw new Error('Please set NODEMAILER_EMAIL in .env file');
  } else if (!process.env.NODEMAILER_PW) {
    throw new Error('Please set NODEMAILER_PW in .env file');
  }
}

export async function sendConfirmMail(email: string, token: string) {
  try {
    envCheck();

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
      secure: true,
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Confirm Email for your account on Worlddata API",
      text: `Please click this link to confirm your email: ${process.env.NEXTAUTH_URL}/confirm-email/${token}`,
      html: `<div>Please click this link to confirm your email: <a href="${process.env.NEXTAUTH_URL}/confirm-email/${token}">Click</a> </div>`
    };

    transporter.sendMail(mailOptions, function (error: any) {
      if (error) {
        throw new Error(error);
      } else {
        return true;
      }
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function sendResetPasswordMail(email: string, token: string) {
  try {
    envCheck();

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
      secure: true,
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Reset your password for your account on Worlddata API",
      text: `Please click this link to reset your Password: ${process.env.NEXTAUTH_URL}/forgot-password/${token}`,
      html: `<div>Please click this link to reset your Password: <a href="${process.env.NEXTAUTH_URL}/forgot-password/${token}">Click</a> </div>`
    };

    transporter.sendMail(mailOptions, function (error: any) {
      if (error) {
        throw new Error(error);
      } else {
        return true;
      }
    });
  } catch (error: any) {
    throw new Error(error);
  }
}
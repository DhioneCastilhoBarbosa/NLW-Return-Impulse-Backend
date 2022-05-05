import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7e441e3eb129c1",
    pass: "420b90f5fb7d1c"
  }
});


export class NodemailMailAdapter implements MailAdapter {
  async sendMail({subject,body}: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Dhione Castilho <dhione.cb@gmail.com>',
      subject,
      html: body,
    })
  }
}
import { createTransport } from 'nodemailer'


class MailService {
  readonly transporter

  constructor() {
    this.transporter = createTransport({
      host: String(process.env.SMTP_HOST),
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    })
  }

  sandActivationLink = async (to: string, link: string) => {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: `Activate account on ${process.env.API_URL}`,
        text: '',
        html: `
        <div>
          <h1>Follow the link to activate account:</h1>
          <a href="${link}">${link}</a>
        </div>
      `
      }, (err, info) => console.log(info))
    } catch (e) {
      console.log(e)
    }g
  }
}

export default new MailService()
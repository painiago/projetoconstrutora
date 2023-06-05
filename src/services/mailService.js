require('dotenv').config();
const mailer = require('nodemailer');

module.exports = (nome, email, mensagem) => {
  const smtp = mailer.createTransport({
    // Configurações de transporte do email (SMTP, Gmail, etc.)
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY,
    }
  });

  const mail = {
    from: process.env.EMAIL_FROM,
    to: 'noreply@example.com',
    cc: process.env.EMAIL_CC,
    subject: `Enviado por ${nome}`,
    text: `
      Nome: ${nome}
      Email: ${email}
      Mensagem: ${mensagem}
    `
  };

  return new Promise((resolve, reject) => {
    smtp
      .sendMail(mail)
      .then(res => {
        smtp.close();
        return resolve(res);
      })
      .catch(erro => {
        smtp.close();
        return reject(erro);
      });
  });
};

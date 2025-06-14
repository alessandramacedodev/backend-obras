const nodemailer = require('nodemailer');

module.exports = async function sendEmail(obra) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nova Obra Criada: ${obra.nome}`,
    text: `Detalhes da obra:\n\n${JSON.stringify(obra, null, 2)}`
  });
};

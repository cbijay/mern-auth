const nodemailer = require("nodemailer");

async function sendEmail(email, subject, body) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "6ba2bc168dacf3", // generated ethereal user
      pass: "db9887e97bf2ea", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "<" + process.env.ADMIN_EMAIL + ">", // sender address
    to: email, // list of receivers
    subject: subject, // Subject line
    html: body, // html body
  });

  if (info.messageId) {
    return true;
  } else {
    return false;
  }
}

module.exports = { sendEmail };

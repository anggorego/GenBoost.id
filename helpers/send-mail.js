const nodemailer = require('nodemailer');

function sendMail(email) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'pairproject6@gmail.com',
        pass: 'Halahkintil6'
      }
    });
  
    let mailOptions = {
      from: 'pairproject6@gmail.com',
      to: email,
      subject: 'SELAMAT DATANG DI GENBOOST!',
      text: `TERIMAKASIH SUDAH REGISTRASI UNTUK INFO SELANJUTNYA TRAINER KAMU AKAN MENGUHUBUNGI !`
    };
  
    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) throw err;
      console.log('Email sent: ' + info.response);
    });
  }

module.exports = sendMail
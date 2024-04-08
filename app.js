const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.TESTLOGIN,
        pass: process.env.PASSWORD, //Password generated for app from google account
    },
});

// send mail with defined transport object
const mailOptions = {
    from: {
        name: 'Web Wizard',
        address: process.env.TESTLOGIN
    },
    to: ['andreyklimov.ver2@gmail.com'], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    } catch (error) {
        console.error(error);
    }
}

sendMail(transporter, mailOptions);
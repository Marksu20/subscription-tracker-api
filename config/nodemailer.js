import nodemailer from 'nodemailer';

import { EMAIL_PASSWORD } from './env.js'

export const accountEmail = 'markjoshuadlcrz@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD
  }
})

transporter.verify().then(() => {
  console.log('Nodemailer ready — SMTP connection OK');
}).catch((err) => {
  console.error('Nodemailer verify failed:', err);
});

export default transporter;
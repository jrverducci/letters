const email = item => {
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'recipient@example.org',
  from: 'Sender <sender@example.org>',
  subject: 'Hello world',
  text: 'Hello plain world!',
  html: '<p>Hello HTML world!</p>',
};
sgMail.send(msg);}

module.exports = {email}
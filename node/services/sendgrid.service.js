const email = item => {
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: item.parentEmail,
  from: 'Letters to Santa - Elf Jingles R. VonSweets <jingles@santaletters.org>',
  templateId: process.env.LETTER_SENT_TEMPLATE,
  dynamic_template_data: {
    child: item.childName,
    letter: item.letter,
  },
}

return new Promise(function(resolve, reject) {
  sgMail.send(msg, function(err, data){
    if(err !== null){reject(err)}
    else{resolve(data)}
  });
});
 
}

module.exports = {email}

const sendgridServices = require('../services/sendgrid.service');
const responses = require('../models/responses/index');

const email = (req, res) => {
  sendgridServices.email(req.body)
  .then(response => {
    const responseObj = new responses.SuccessResponse();
    res.status(200).json(responseObj);
})
.catch(err => {
    const responseObj = new responses.ErrorResponse();
    res.status(500).send(responseObj)
})
  };

  module.exports = {email}
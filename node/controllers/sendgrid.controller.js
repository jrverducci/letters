const sendgridServices = require('../services/sendgrid.service');
const responses = require('../models/responses/index');

const email = (req, res) => {
    sendgridServices.email(req.body)
  };

  module.exports = {email}
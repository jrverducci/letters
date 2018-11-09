const lettersServices = require('../services/letters.service');
const responses = require('../models/responses/index');

const create = (req, res) => {
    lettersServices.post(req.body)
    .then(response => {
        const responseObj = new responses.SuccessResponse();
        res.status(200).json(responseObj)
      })
      .catch(err => {
        const responseObj = new responses.ErrorResponse();
        responseObj.errors = err.stack;
        res.status(500).send(responseObj);
      })
  };

  const getAll = (req, res) => {
    lettersServices.getAll()
     .then(response => {
            const responseObj = new responses.ItemsResponse();
            responseObj.items = response;
            res.status(200).json(responseObj)
        })
        .catch(err => {
            const responseObj = new responses.ErrorResponse();
            responseObj.errors = err.stack;
            res.status(500).send(responseObj);
        })
}

module.exports = {create, getAll}
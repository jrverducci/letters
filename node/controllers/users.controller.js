const usersServices = require('../services/users.service');
const responses = require('../models/responses/index');

const create = (req, res) => {
    usersServices.post(req.body)
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

  const update = (req, res) => {
    usersServices.post(req.body)
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
    const promise = usersServices.getAll();
    promise
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

module.exports = {create, update, getAll}
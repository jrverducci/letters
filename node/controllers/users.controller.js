const usersServices = require('../services/users.service');
const responses = require('../models/responses/index');

const create = (req, res) => {
    usersServices.create(req.model)
    .then(response => {
        const responseObj = new responses.ItemResponse();
            responseObj.item = response;
            res.status(200).json(responseObj)
      })
      .catch(err => {
        const responseObj = new responses.ErrorResponse();
        responseObj.errors = err.stack;
        res.status(500).send(responseObj);
      })
  };

  const update = (req, res) => {
    const id = req.params.id
    usersServices.update(req.model, id)
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

const getById = (req, res) => {
    const id = req.params.id
    usersServices.getById(id)
      .then(response => {
        const responseObj = new responses.ItemResponse(response);
        responseObj.item = response;
        res.status(200).json(responseObj);
      })
    .catch(err => {
        const responseObj = new responses.ErrorResponse();
        responseObj.error = err.stack;
        res.status(500).send(responseObj);
      })
  }
const del = (req, res) => {
    const id = req.params.id
    usersServices.del(id)
    .then(response => {
        const responseObj = new responses.SuccessResponse();
        res.status(200).json(responseObj)
      })
      .catch(err => {
        const responseObj = new responses.ErrorResponse();
        responseObj.errors = err.stack;
        res.status(500).send(responseObj);
      })
}

module.exports = {create, update, getAll, getById, del}
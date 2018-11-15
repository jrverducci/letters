const lettersServices = require('../services/letters.service');
const responses = require('../models/responses/index');

const create = (req, res) => {
    lettersServices.create(req.body)
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

const readByParentId = (req, res) => {
    const id = req.params.id
    lettersServices.readByParentId(id)
     .then(response => {
        const responseObj = new responses.ItemsResponse(response);
        responseObj.items = response;
        res.status(200).json(responseObj);
      })
    .catch(err => {
        const responseObj = new responses.ErrorResponse();
        responseObj.error = err.stack;
        res.status(500).send(responseObj);
      })
  }

  const readById = (req, res) => {
    const id = req.params.id
    lettersServices.readById(id)
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
    lettersServices.del(id)
    .then(response => {
        const responseObj = new responses.SuccessResponse();
        res.status(200).json(responseObj);
    })
    .catch(err => {
        const responseObj = new responses.ErrorResponse();
        res.status(500).send(responseObj)
    })
  }

module.exports = {create, getAll, readByParentId, readById, del}
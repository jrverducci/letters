const mssql = require('../mssql')
const {TYPES} = require('tedious')

const create = item => {
    const promise = mssql.executeProc("LettersUsers_Insert", sqlRequest => {
        sqlRequest.addParameter("FirstName", TYPES.NVarChar, item.firstName, {
          length: 50
        });
        sqlRequest.addParameter("LastName", TYPES.NVarChar, item.lastName, {
            length: 50
          });
        sqlRequest.addParameter("Email", TYPES.NVarChar, item.email, {
            length: 255
          });
        sqlRequest.addParameter("Password", TYPES.NVarChar, item.password, {
            length: 200
          });
        sqlRequest.addOutputParameter("Id", TYPES.Int, null);
      })
      .then(response => {
        return response.outputParameters.Id;
      })
      .catch(responseErrorHandler);
    return promise;
  }

  const update = item => {
    const promise = mssql.executeProc("LettersUsers_Update_ById", sqlRequest => {
        sqlRequest.addParameter("FirstName", TYPES.NVarChar, item.firstName, {
          length: 50
        });
        sqlRequest.addParameter("LastName", TYPES.NVarChar, item.lastName, {
            length: 50
          });
        sqlRequest.addParameter("Email", TYPES.NVarChar, item.email, {
            length: 255
          });
        sqlRequest.addParameter("Id", TYPES.Int, item.id);
      })
      .then(response => {
        return response;
      })
      .catch(responseErrorHandler);
    return promise;
  }

  const getAll = () => {
    const promise = mssql.executeProc('LettersUsers_SelectAll')
        .then(response => {
            const items = response.resultSets[1]
            return items;
        })
        .catch(responseErrorHandler)
    return promise;
  }

  const responseErrorHandler = error => {
    console.log(error);
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.error(error.response.data.errors);
    }
    return Promise.reject(error);
  }
  
  module.exports = {
    create,
    update,
    getAll
  }
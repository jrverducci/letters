const mssql = require('../mssql')
const {TYPES} = require('tedious')

const create = item => {
    const promise = mssql.executeProc("LettersLetters_Insert", sqlRequest => {
        sqlRequest.addParameter("ParentId", TYPES.int, item.parentId);
        sqlRequest.addParameter("ChildName", TYPES.NVarChar, item.childName, {
            length: 50
          });
        sqlRequest.addParameter("Letter", TYPES.NVarChar, item.letter, {
            length: 4000
          });
        sqlRequest.addOutputParameter("Id", TYPES.Int, null);
      })
      .then(response => {
        return response.outputParameters.Id;
      })
      .catch(responseErrorHandler);
    return promise;
  }

  const getAll = () => {
    const promise = mssql.executeProc('LettersLetters_SelectAll')
        .then(response => {
            const items = response.resultSets[1];
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
    getAll
  }
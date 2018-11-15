const mssql = require('../mssql')
const {TYPES} = require('tedious')

const create = item => {
    const promise = mssql.executeProc("LettersLetters_Insert", sqlRequest => {
        sqlRequest.addParameter("ParentId", TYPES.Int, item.parentId);
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

const readByParentId = (id) => {
    const promise = mssql.executeProc("LettersLetters_Select_ByParentId", sqlRequest => {
      sqlRequest.addParameter("ParentId", TYPES.Int, id);
    })
      .then(response => {
        return response.resultSets[1]
      })
      .catch(responseErrorHandler);
  
    return promise;
  };

 const readById = (id) => {
    const promise = mssql.executeProc("LettersLetters_Select_ById", sqlRequest => {
      sqlRequest.addParameter("Id", TYPES.Int, id);
    })
      .then(response => {
        return response.resultSets[1]
      })
      .catch(responseErrorHandler);
  
    return promise;
  };

  const del = (id) => {
    const promise = mssql.executeProc("LettersLetters_Delete", sqlRequest => {
      sqlRequest.addParameter("Id", TYPES.Int, id);
    })
      .then(response => {
        return response
      })
      .catch(responseErrorHandler);
  
    return promise;
  };

  const responseErrorHandler = error => {
    console.log(error);
    if (error && error.response && error.response.data && error.response.data.errors) {
        console.error(error.response.data.errors);
    }
    return Promise.reject(error);
  }
  
  module.exports = {
    create,
    getAll,
    readByParentId,
    readById,
    del
  }
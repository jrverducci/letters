const { Connection, Request } = require("tedious");
const ConnectionPool = require("tedious-connection-pool");
const dotenv = require("dotenv");
const camelCase = require("camelcase");

dotenv.config();

const poolConfig = { min: 2, max: 4, log: false };

var connectionConfig = {
  server: process.env.SQL_SERVER_NAME,
  userName: process.env.SQL_USER_NAME,
  password: process.env.SQL_PASSWORD,
  options: {
    database: process.env.SQL_DATABASE_NAME,
    camelCaseColumns: true
  }
  /*
    ,options: {
      debug: {
        packet: true,
        data: true,
        payload: true,
        token: false,
        log: true
      },
      database: 'DBName',
      encrypt: true // for Azure users
    }
    */
};

const pool = new ConnectionPool(poolConfig, connectionConfig);
pool.on("error", err => {
  console.error(err);
});

function executeProc(procName, paramsCallback) {
  return new Promise((resolve, reject) => {
    pool.acquire((err, conn) => {
      if (err) {
        reject(err);
        return;
      }

      let setIndex = 0;
      const response = {};

      const request = new Request(procName, (err, rowcount) => {
        conn.release();
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
      // Get parameters from setParamsCallback callback
      if (paramsCallback) {
        paramsCallback(request);
      }

      request.on("row", columns => {
        response.resultSets = response.resultSets || [];
        response.resultSets[setIndex] = response.resultSets[setIndex] || [];
        const row = {};
        columns.map((cell, ordinal) => {
          const colName = cell.metadata.colName ? camelCase(cell.metadata.colName) : ordinal;
          if (cell.value === null) {
            row[colName] = null;
          } else {
            row[colName] = cell.value;
          }
        });
        response.resultSets[setIndex].push(row);
      });

      request.on("returnValue", (paramName, value, metadata) => {
        response.outputParameters = response.outputParameters || {};
        response.outputParameters[paramName] = value;
      });

      request.on("columnMetadata", function (columns) {
        setIndex++;
      });

      request.on("doneProc", function (rowCount, more, returnStatus, rows) {
        response.returnStatus = returnStatus;
      });

      conn.callProcedure(request);
    });
  });
}

module.exports = {
  executeProc
}; 
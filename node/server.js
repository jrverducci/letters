const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes')

const port = process.env.PORT || 8080;

app.use(bodyParser.json())

app.use('/node/server.js', routes);

app.use((req, res) => {
  debugger;
  res.status(404).send("<h2>The path is not valid</h2>");
});

app.listen(port, () => {
    console.log(`Magic happens on port ${port}`)
})
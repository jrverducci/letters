const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(function(req, res){
    res.send("testing")
})

app.listen(8181, () => {
    console.log('listening on port 8181')
})
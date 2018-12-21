const express = require('express');
const app = express();
const fs = require('fs');
const api = require('./api/api');
const bodyParser = require('body-parser');
app.use('/static',express.static('static'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/',  (req, res) => {
    const index = fs.readFileSync('./index.html', { encoding: "utf8" });
    res.send(index);
});

api(app);
app.listen('80');
console.log('运行成功');




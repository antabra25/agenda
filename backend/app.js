const express = require('express');
const taskRoute = require('./routes/task')
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next();
});

app.use(taskRoute)

app.listen(3000)






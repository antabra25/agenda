const express = require('express');
const sequelize = require('./database/database')
const taskRoute = require('./routes/task')
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(taskRoute)

app.listen(3000)






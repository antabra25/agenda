const express = require('express');
const sequelize = require('./database/database')
const taskModel = require('./models/Task')
const taskRoute = require('./routes/task')

const app = express();

app.use(taskRoute)

async function test () {
    try {

        console.log('Connection has been established successfully.');
        const result = await sequelize.sync()
        if(result){
            console.log(result)
        }
        app.listen(3000)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


test()






const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('tasks','postgres','larios',{
    dialect:'postgres',
    host:'localhost'
});

module.exports = sequelize;
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('tasks','postgres','larios33',{
    dialect:'postgres',
    host:'localhost'
});

module.exports = sequelize;
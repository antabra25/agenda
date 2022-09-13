const {DataTypes} = require('sequelize')

const sequelize = require('../database/database')

const Task = sequelize.define('activities',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,

    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},
    {timestamps:false})


module.exports = Task;
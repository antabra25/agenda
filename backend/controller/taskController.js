const task = require('../models/Task')

exports.createTask = async (req,res,next) =>{
    try {
        const result =  await task.create({
            title:'Titulo de Prueba',
            body:'Esto es un cuerpo de nota de prueba para la creacion de una entrada.'
        })
        if(result){
            console.log(result)
        }
    }catch (error){
        console.log(error)
    }

}


exports.getTak = (req,res,next)=>{

}

exports.listTask = (req,res,next) =>{

}

exports.updateTask = (req,res,next) =>{

}

exports.deleteTask =(req,res,next)=>{

}
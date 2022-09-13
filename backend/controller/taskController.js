const Task = require('../models/Task')

exports.createTask = async (req,res,next) =>{

    const {title,body} = req.body
    try {
        console.log(title,body)
        const task =  await Task.create({
            title:title,
            body:body
        })
        if(task){
            console.log(task)
            res.status(201).json({id:task.id,title:task.title,body:task.body})
        }
    }catch (error){
        console.log(error)
    }

}


exports.getTak =async (req,res,next)=>{

    try {
        const task = await Task.findAll({
            where:{
                id:req.params.id
            }
        })
        if(task){
            res.status(200).json(task)
        }else {
            res.status(404).json({message:"Task not found"})
        }
    }catch (error){
        console.log(error)
    }



}

exports.listTask = async (req,res,next) =>{
    try {
        const tasks = await Task.findAll()
        if(tasks){
            res.status(200).json(tasks)
        }else {
            res.status(404).json({message:"Task not found"})
        }

    }catch (error){
        console.log(error)
    }


}

exports.updateTask = async (req,res,next) =>{

    try {
        const task = await Task.update({
            title:req.body.title,
            body:req.body.body
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(task)
    }catch (error){
        console.log(error)
    }

}

exports.deleteTask = async (req,res,next)=>{
    try {
        const task = await Task.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json(task)
    }catch (error){
        console.log(error)
    }

}
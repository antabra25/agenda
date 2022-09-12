const express = require('express')
const taskController = require('../controller/taskController')


const router = express.Router()

router.post("/create/task",taskController.createTask)



module.exports = router


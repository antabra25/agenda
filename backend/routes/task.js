const express = require('express')
const taskController = require('../controller/taskController')


const router = express.Router()

router.post("/create/task",taskController.createTask)
router.get("/get/task/:id",taskController.getTak)
router.get("/list/task",taskController.listTask)
router.put("/update/task/:id",taskController.updateTask)
router.delete("/delete/task/:id",taskController.deleteTask)

module.exports = router


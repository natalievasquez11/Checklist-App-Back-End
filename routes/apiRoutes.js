//const path = require('path');
const express = require('express');
const controller = require('../controllers');
const router = express.Router();

//get all todos
router.get('/get-checklist', controller.getChecklist);

//edit task name
router.put('/update/:taskId', controller.editTask);

//delete a task
router.delete('/delete-task/:taskId', controller.deleteTask);

//add a task
router.post('/add-task', controller.addTask);

//delete all tasks
router.delete('/delete-all', controller.deleteAll);

module.exports = router;
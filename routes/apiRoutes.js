//const path = require('path');
const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.get('/getChecklist', controller.getChecklist);

router.post('/addTask', controller.addTask);

router.put('/updateTask/:taskId', controller.updateTask);

router.delete('/deleteTask/:taskId', controller.deleteTaskById);

router.delete('/deleteAll', controller.deleteAll);

module.exports = router;
const List = require('../models/list');

exports.getChecklist = (req, res, next) => {
    List.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
};

exports.addTask = (req, res, next) => {
    const taskName = req.body.task;
    console.log(taskName);
    List.create({
        task: taskName
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
}

exports.updateTask = (req, res, next) => {
    const taskId = req.params.taskId;
    const taskName = req.body.task;
    const taskCompleted = req.body.completed;
    List.update({
        task: taskName, 
        completed: taskCompleted
    }, {
        where: {
            id: taskId
        }
    }) 
        .then(data => {
            res.json(data);
        })
        .catch(err => res.json(err));
}

exports.deleteTaskById = (req, res, next) => {
    const taskId = req.params.taskId;
    List.destroy({
        where: {
            id: taskId
        }
    })
        .then(data => {
            res.json(data);
        })
        .catch((err) => {
            next(err);
        });
}

exports.deleteAll = (req, res, next) => {
    List.destroy({
        where: {},
        truncate: true
    })
        .then(data => {
            res.json(data)
        })
        .catch(err => console.log(err));
}


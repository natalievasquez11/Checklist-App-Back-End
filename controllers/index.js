const List = require('../models/list');

exports.getChecklist = (req, res, next) => {
    List.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
};

exports.addTask = (req, res, next) => {
    const taskName = req.body.taskName;
    console.log(taskName);
    List.create({
        taskName: taskName
    })
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
}

exports.updateTask = (req, res, next) => {
    const taskId = req.params.taskId;
    const taskName = req.body.taskName;
    const taskCompleted = req.body.taskCompleted;
    List.update({
        taskName: taskName, 
        taskCompleted: taskCompleted
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


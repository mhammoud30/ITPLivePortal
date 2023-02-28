const { Logform } = require('winston');
const Task = require('../models/task.model');

exports.create = (req, res) => {
    const { assigned_by, assigned_to, brief_id } = req.body;
    const task = new Task(assigned_by, assigned_to, brief_id);

    Task.create(task, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(201).send({
                status: "success",
            });
        }
    })
}

exports.getUnfinishedTasks = (req, res) => { 
    const { assigned_to } = req.body;

    Task.getUnfinishedTasks(assigned_to, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
            console.log(err.message);
        } else {
            res.status(200).send({
                status: "success",
                data: data[0]
            });
        }
    })
}

exports.getMyTasks = (req, res) => {
    
    const { assigned_to } = req.body;

    Task.getMyTasks(assigned_to, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
            console.log(err.message);
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    })
}

exports.updateStatus = (req, res) => {
    console.log(req.body);
    const { assigned_to } = req.body;
    Task.updateStatus(assigned_to, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
            console.log(err.message);
        } else {
            res.status(200).send({
                status: "success",
            });
        }
    })
}
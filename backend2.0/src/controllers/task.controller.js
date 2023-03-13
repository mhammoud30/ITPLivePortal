const model = require('../../models')
const Task = model.Task
const { Op } = require('sequelize');



exports.create = (req, res) => {
    Task.create(req.body)
        .then(data => {
            res.status(201).send({
                status: "success",
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Task."
            });
        });
}

exports.getUnfinishedTasks = (req, res) => {
    Task.count({
        where: {
            status: 'Not Viewed',
            assigned_to: req.params.id
        }
    }).then(numRows => {
        res.status(200).send({
            status: "success",
            data: numRows[0]
        });
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Tasks."
        });
    });
}

exports.getUserTasks = (req, res) => {
    Task.findAll({
        where: {
            assigned_to: req.params.id
        },
        include: [
            {
                model: model.SalesBrief,
                required: true,
                where : {
                    id: {
                        [Op.col]: 'task.brief_id'
                    }
                }
            }
        ]
    }).then(data => {
        res.status(200).send({
            status: "success",
            data: data
        });
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Tasks."
        });
    });
}

exports.updateStatus = (req, res) => {
    const { assigned_to , id} = req.body;
    Task.update(
        { status: 'In Progress' },
        { where: { assigned_to: assigned_to, status: 'Not Viewed', id: id } }
    ).then(data => {
        res.status(200).send({
            status: 'success',
        })
    })
}

exports.updateStatusToComplete = (req, res) => {
    const { assigned_to , id} = req.body;
    Task.update(
        { status: 'Completed' },
        { where: { assigned_to: assigned_to, status: 'In Progress', id: id } }
    ).then(data => {
        res.status(200).send({
            status: 'success',
        })
    })
}
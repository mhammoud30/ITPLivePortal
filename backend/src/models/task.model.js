const db = require('../config/db.config');
const { assignTask: assignTaskQuery, getUnfinishedTasks : getUnifinshedTasksQuery, updateStatus: updateStatusQuery} = require('../database/task.queries') 
const { getMyTasks : getMyTasksQuery } = require('../database/sales.queries')
const { logger } = require('../utils/logger');

class Task{
    constructor( assigned_by, assigned_to, brief_id, status){
        this.assigned_by = assigned_by;
        this.assigned_to = assigned_to;
        this.brief_id = brief_id;
        this.status = status;
    }

    static create(newTask, cb){
        db.query(assignTaskQuery, [newTask.assigned_by, newTask.assigned_to, newTask.brief_id], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, {id: res.insertId, ...newTask});
        })
    }

    static getUnfinishedTasks(assigned_to, cb){
        db.query(getUnifinshedTasksQuery, [assigned_to], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, res);
        })
    }

    static getMyTasks(assigned_to, cb){
        db.query(getMyTasksQuery, [assigned_to], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, res);
        })
    }

    static updateStatus(assigned_to, cb){
        db.query(updateStatusQuery, [assigned_to], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, res);
        })
    }
}

module.exports = Task;

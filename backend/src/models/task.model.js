const db = require('../config/db.config');
const { assignTask: assignTaskQuery, getUnfinishedTasks : getUnifinshedTasksQuery, updateStatus: updateStatusQuery} = require('../database/task.queries') 
const { getMyTasks : getMyTasksQuery } = require('../database/sales.queries')
const { logger } = require('../utils/logger');

class Task{
    constructor( assigned_by, assigned_to, brief_id, weight){
        this.assigned_by = assigned_by;
        this.assigned_to = assigned_to;
        this.brief_id = brief_id;
        this.weight = weight;
    }

    static create(newTask, cb){

        db.query(assignTaskQuery, [newTask.assigned_by, newTask.assigned_to, newTask.brief_id, newTask.weight], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, {id: res.insertId, ...newTask});
        })
    }

    static getUnfinishedTasks(id, cb){
        db.query(getUnifinshedTasksQuery, [id], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, res);
        })
    }

    static getMyTasks(id, cb){
        db.query(getMyTasksQuery, [id], (err, res) => {
            if(err){
                logger.error(err);
                cb(err, null);
                return;
            }
            cb(null, res);
        })
    }

    static updateStatus(assigned_to,id, cb){
        db.query(updateStatusQuery, [assigned_to,id], (err, res) => {
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

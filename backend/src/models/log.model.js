const db = require('../config/db.config');

const {createNewLog: createNewLogQuery} = require('../database/log.queries');

const {logger} = require('../utils/logger');

class Log{
    constructor(userID, influencerID, campaign){
        this.userID = userID;
        this.influencerID = influencerID;
        this.campaign = campaign;
    }

    static create(newLog, cb){
        db.query(createNewLogQuery,
            [
                newLog.userID,
                newLog.influencerID,
                newLog.campaign
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, { logID : res.insertID})
                
                
            })
    }

}
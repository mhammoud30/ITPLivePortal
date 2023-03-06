const db = require('../config/db.config');

const { getInfluencerLogs : getInfluencerLogsQuery , createNewLog: createNewLogQuery, getAllLogs : getAllLogsQuery} = require('../database/log.queries');

const {logger} = require('../utils/logger');

class Log{
    constructor(userID, influencerID,campaign, Currency, Rate){
        this.userID = userID;
        this.influencerID = influencerID;
        this.campaign = campaign;
        this.Currency = Currency;
        this.Rate = Rate;
    }

    static create(newLog, cb){
        db.query(createNewLogQuery,
            [
                newLog.userID,
                newLog.influencerID,
                newLog.campaign,
                newLog.Currency,
                newLog.Rate
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, { logID : res.insertId})
                
                
            })
    }

    static getAllLogs(cb){
        db.query(getAllLogsQuery, (err, res)=> {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res);
                return;
            }
            cb({ kind: 'no_results' }, null);
        })
    }

    static getInfluencerLogsByID(id, cb){
        db.query(getInfluencerLogsQuery, id, (err, res) => {
            if(err){
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if(res.length){
                cb(null, res);
                return;
            }
            cb({kind: "not_found"}, null);
        })
    }

}

module.exports = Log;
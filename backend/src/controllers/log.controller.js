const Log = require('../models/log.model');
const Package = require('../models/package.model');
const LogPackage = require('../models/log_package.model');

exports.create = (req, res) => {
    let logID;
    let packageID;


    const {UserID, InfluencerID, Campaign, Currency, Rate, Notes, Time_to_reply, length, fields} = req.body

    const log = new Log(UserID, InfluencerID, Campaign, Currency, Rate, Notes, Time_to_reply);

    Log.create(log, (err, data) =>{
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        }else {
            logID = data.logID ;
            
            for(let i = 0 ; i<length; i++){
                var package = new Package(fields[i].Platform, fields[i].Deliverable)
                Package.create(package, (err, data)=>{
                    if (err) {
                        res.status(500).send({
                            status: "error",
                            message: err.message
                        });
                    }else {
                        packageID = data.packageID;
                        var logPackage = new LogPackage(logID, packageID);
                        LogPackage.create(logPackage, (err, data)=>{
                            if (err) {
                                res.status(500).send({
                                    status: "error",
                                    message: err.message
                                });
                            }

                        })
                    }
                })
            }

        }
        res.status(201).send({
            status: "success",

        })
    })

}

exports.getLogs =  (req, res) => {
    Log.getAllLogs( (err, data) => {
        if(err){
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if(data){
           
            res.status(200).send(data);
            return;
        }
    })
}

exports.getInfluencerLogs = (req, res) => {
    const id = Number(req.params.id);
    Log.getInfluencerLogsByID(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `Logs with influencerID ${id} was not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if(data){
            res.status(200).send({data});
            
            return;
        }
        res.status(401).send({
            status: 'error',
            message: 'not found'
        });
    })
}
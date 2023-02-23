const db = require('../config/db.config');
const {createNewLogPackage: createNewLogPackageQuery} = require('../database/log.queries');

class logPackage {
    constructor( logID, packageID){
        this.logID = logID;
        this.packageID = packageID;
    }

    static create (newlogPackage, cb){
        db.query(createNewLogPackageQuery, [
            newlogPackage.logID,
            newlogPackage.packageID
        ], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            cb(null , {logPackageID : res.insertID})
            
        })
    }
}

module.exports = Package;
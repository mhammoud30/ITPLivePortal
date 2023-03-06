const db = require('../config/db.config');
const {createNewPackage: createNewPackageQuery} = require('../database/log.queries');

class Package {
    constructor( platform, deliverable){
        this.platform = platform;
        this.deliverable = deliverable;
    }

    static create (newPackage, cb){
        db.query(createNewPackageQuery, [
            newPackage.platform,
            newPackage.deliverable,
        ], (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            cb(null, {packageID : res.insertId})
            
            
        })
    }
}

module.exports = Package;
const db = require('../config/db.config');
const {createNewPackage: createNewPackageQuery} = require('../database/log.queries');

class Package {
    constructor( platform, deliverable, currency, rate){
        this.platform = platform;
        this.deliverable = deliverable;
        this.currency = currency;
        this.rate = rate;
    }

    static create (newPackage, cb){
        db.query(createNewPackageQuery, [
            newPackage.platform,
            newPackage.deliverable,
            newPackage.currency,
            newPackage.rate,
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
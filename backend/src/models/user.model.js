const db = require('../config/db.config');
const { createNewUser: createNewUserQuery, findUserByEmail: findUserByEmailQuery, findUserByID: findUserByIDQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class User {
    constructor(name, email, password, role, status, privilegeLevel){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
        this.privilegeLevel = privilegeLevel
    }

    static create(newUser, cb){
        db.query(createNewUserQuery,
            [
                newUser.name,
                newUser.email,
                newUser.password,
                newUser.role,
                newUser.status,
                newUser.privilegeLevel
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id : res.insertID,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role,
                    status: newUser.status,
                    privilegeLevel: newUser.privilegeLevel
                });
            }
            );
    }

    static findByEmail(email, cb) {
        db.query(findUserByEmailQuery, email, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }

    static findByID(id, cb){
        db.query(findUserByIDQuery, id, (err, res) =>{
            if(err){
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if(res.length){
                cb(null, res[0]);
                return;
            }
            cb({kind: "not_found"}, null);
        })
    }

}

module.exports = User; 
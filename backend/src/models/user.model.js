const db = require('../config/db.config');
const {createNewUserQuery,
    findUserByEmailQuery,
    findUserByIDQuery,
    getTalentUserNamesQuery,} = require('../database/auth.queries');
    
const { logger } = require('../utils/logger');

class User {
    constructor(name, email, password, role, status, privilege_level, parentId, hash){
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.status = status;
        this.privilege_level = privilege_level;
        this.parentId = parentId;
        this.hash = hash;
    }

    static create(newUser, cb){
        db.query(createNewUserQuery,
            [
                newUser.name,
                newUser.email,
                newUser.password,
                newUser.role,
                newUser.status,
                newUser.privilege_level,
                newUser.parentId,
                newUser.hash,

            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {id : res.insertId, role : newUser.role, privilege_level: newUser.privilege_level});
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
    static getTalentUserIdNames(cb){
        db.query(getTalentUserNamesQuery, (err, res) =>{
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

module.exports = User; 
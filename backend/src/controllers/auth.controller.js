const User = require('../models/user.model');
const { generate: generateToken } = require('../utils/token');
const crypto = require('crypto');
const cryptojs = require('crypto-js');
const comparePassword = require('../utils/password').compare;

exports.register = (req, res) => {
    const { name, email, password, status, role, privilege_level, parentId } = req.body;

    const hash = crypto.randomBytes(32).toString('hex');
    const encryptedPassword = cryptojs.AES.encrypt(password, hash).toString();

    const user = new User(name.trim(), email.trim(), encryptedPassword, status.trim(), role.trim(), privilege_level, parentId, hash);
  
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            }); 
        } else {
            const token = generateToken(data.id,data.name, data.role, data.privilege_level);
            res.status(201).send({
                status: "success",
                data: {token}
            });
        }
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    User.findByEmail(email.trim(), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `User with email ${email} was not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if (data) { 
            if (comparePassword(password.trim(), data.password, data.hash)) {
                const token = generateToken(data.id, data.name, data.role, data.privilege_level);
                res.status(200).send({
                    status: 'success',
                    data: {token, role: data.role}
                });
                return;
            }
            res.status(401).send({
                status: 'error',
                message: 'Incorrect password'
            });
        }
    });

}


exports.getUser = (req, res) => {
    const id = Number(req.params.id);
    User.findByID(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `User with id ${id} was not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if (data) {
                res.status(200).send({
                        id: data.id,
                        name: data.name,
                        email: data.email,
                        status: data.status,
                        role: data.role,
                        privilege_level: data.privilege_level,
                        parentId: data.parentId,
                });
                return;   
        }
        res.status(401).send({
            status: 'error',
            message: 'not found'
        });
    });

}

exports.getTalentUserIdNames = (req, res) => {
    User.getTalentUserIdNames((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    status: 'error',
                    message: `Users were not found`
                });
                return;
            }
            res.status(500).send({
                status: 'error',
                message: err.message
            });
            return;
        }
        if (data) {
                res.status(200).send({
                        data
                });
                return;   
        }
        res.status(401).send({
            status: 'error',
            message: 'not found'
        });
    });

}



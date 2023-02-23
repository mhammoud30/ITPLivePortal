const User = require('../models/user.model');
const { hash: hashPassword, compare: comparePassword } = require('../utils/password');
const { generate: generateToken } = require('../utils/token');

exports.signup = (req, res) => {
    const { name, email, password, status, role, privilegeLevel } = req.body;
    const hashedPassword = hashPassword(password.trim());

    const user = new User(name.trim(), email.trim(), hashedPassword, status.trim(), role.trim(), privilegeLevel);
  
    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            const token = generateToken(data.id);
            res.status(201).send({
                status: "success",
                data: {
                    token,
                    data
                }
            });
        }
    });
};

exports.signin = (req, res) => {
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
            if (comparePassword(password.trim(), data.password)) {
                const token = generateToken(data.id, data.privilegeLevel);
                res.status(200).send({
                    status: 'success',
                    data: {
                        token,
                        id: data.id,
                        name: data.name,
                        email: data.email,
                        status: data.status,
                        role: data.role,
                        privilegeLevel: data.privilegeLevel,
                        
                    }
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
                        privilegeLevel: data.privilegeLevel,
                });
                return;   
        }
        res.status(401).send({
            status: 'error',
            message: 'not found'
        });
    });

}



const Joi = require('joi');
const validatorHandler = require('../middlewares/validatorHandler');

const signup = (req, res, next) => {
    const schema = Joi.object().keys({
        name: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(100)
            .required(),
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .min(6)
            .max(30)
            .required(),
        status: Joi.string()
            .trim()
            .valid('active', 'inactive')
            .default('active')
            .required(),
        role: Joi.string()
            .trim()
            .valid('admin', 'user')
            .default('user')
            .required(),
        privilegeLevel: Joi.number()
            .min(1)
            .max(10)
            .default(1)
            .required()    
    });
    validatorHandler(req, res, next, schema);
};

const signin = (req, res, next) => {
    const schema = Joi.object().keys({
        email: Joi.string()
            .trim()
            .email()
            .required(),
        password: Joi.string()
            .trim()
            .min(6)
            .max(30)
            .required()
    });
    validatorHandler(req, res, next, schema);
};

module.exports = {
    signup,
    signin
};
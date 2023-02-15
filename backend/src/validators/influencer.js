const Joi = require('joi');
const validatorHandler = require('../middlewares/validatorHandler');

const addUser = (req, res, next) => {
    const schema = Joi.object().keys({
        Name: Joi.string()
            .trim()
            .alphanum()
            .min(3)
            .max(100)
            .required(),
        Gender: Joi.string()
             .trim()
             .alphanum(),
        Number: Joi.string()     
    })
    validatorHandler(req, res, next, schema);
    };
    
module.exports = addUser;


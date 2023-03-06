const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../utils/secrets');
const { logger } = require('./logger');

const generate = (id,name, role, privilege_level) => { 
    const token = jwt.sign({ id,name, role, privilege_level }, JWT_SECRET_KEY, { expiresIn: '1d'}); 
    return 'Bearer ' + token;
};

const decode = (token) => {
    try {
        /* Use this before method:  const token = req.headers.authorization.split(' ')[1]; */
        return jwt.verify(token, JWT_SECRET_KEY)
    } catch (error) {
        logger.error(error);
    }
};

module.exports = {
    generate,
    decode
} 
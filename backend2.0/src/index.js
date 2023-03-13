const { sequelize } = require('../models/index')
const app = require('./app');
const { logger } = require('./utils/logger');

const PORT = process.env.PORT || 3000;

app.listen( {port: PORT}, async () => {
    logger.info(`Running on PORT ${PORT}`);
    await sequelize.authenticate();
    logger.info("Database connected");
});


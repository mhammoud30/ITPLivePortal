const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const { httpLogStream } = require('./utils/logger');

const authHandler = require('./middlewares/authHandler');
const userRoutes = require('./routes/user.routes');
const influencerRoutes = require('./routes/influencer.routes');
const celebrityRoutes = require('./routes/celebrity.routes');
const logRoutes = require('./routes/log.routes');
const salesBriefRoutes = require('./routes/salesBrief.routes');
const TaskRoutes = require('./routes/task.routes'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(morgan('combined', { stream: httpLogStream }));

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PUT','PATCH'],
}
));


/* app.use(helmet.hsts({ maxAge: 31536000 })); */
app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 7.4.3'}));
app.use(helmet.xssFilter({ setOnOldIE: true }));
app.use(helmet.noSniff({ nosniff: true }));
app.use(helmet.frameguard({ action: 'DENY' }));
app.use(compression());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/influencers', authHandler, influencerRoutes);
app.use('/api/v1/celebrities', authHandler, celebrityRoutes);
app.use('/api/v1/logs', authHandler, logRoutes);
app.use('/api/v1/salesbriefs', authHandler, salesBriefRoutes);
app.use('/api/v1/tasks', authHandler, TaskRoutes); 



app.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        data: {
            message: "API working fine"
        }
    });
});


app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        status: "error",
        message: err.message
    });
    next();
});

module.exports = app;
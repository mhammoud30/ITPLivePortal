const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth.routes');
const influencerRoutes = require('./routes/influencer.routes');
const celebrityRoute = require('./routes/celebrity.route');
const logRoute = require('./routes/log.route');
const salesRoute = require('./routes/sales.route');
const taskRoute = require('./routes/task.route');

const { httpLogStream } = require('./utils/logger');

const app = express();

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100
})


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
app.use(limiter);



app.use('/api/v2/auth', authRoutes);
app.use('/api/v2/influencers', influencerRoutes);
app.use('/api/celebrities', celebrityRoute);
app.use('/api/logs', logRoute);
app.use('/api/sales', salesRoute)
app.use('/api/tasks', taskRoute)


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



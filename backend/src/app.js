const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoute = require('./routes/auth.route');
const influencerRoute = require('./routes/influencer.route');
const celebrityRoute = require('./routes/celebrity.route');
const logRoute = require('./routes/log.route');
const salesRoute = require('./routes/sales.route');
const taskRoute = require('./routes/task.route');

const { httpLogStream } = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(morgan('combined', { stream: httpLogStream }));
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PUT','PATCH'],
}
));





app.use('/api/auth', authRoute);
app.use('/api/influencers', influencerRoute);
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



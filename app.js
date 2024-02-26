const express = require('express');
const router = require('./src/routes/api');
const bodyParser = require('body-parser');

const app = express();


// const path = require('path');

// security middleware

const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database Lib import
// app.use(express.static('client/build'));


// security middleware
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(helmet());
app.use(hpp());


// body parser
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);


app.use('/api/v1', router);


// React Frontend routing
// app.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// })

module.exports = app;
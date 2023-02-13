const express = require('express');
const app = express();
const {indexRoutes} = require('./api/index');
const cors = require('cors');
const morgan = require('morgan');
const swaggerUI = require('swagger-ui-express');
const swaggerSetup = require('./docs/swagger');

//SWAGGER CONFIGURATION
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerSetup));

// app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

indexRoutes(app);

module.exports = app;
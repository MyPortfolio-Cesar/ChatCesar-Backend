const express = require('express');
const app = express();
const {indexRoutes} = require('./api/index');
const cors = require('cors');
const morgan = require('morgan');


// app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

indexRoutes(app);

module.exports = app;
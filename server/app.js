const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const routes = require('./routes');
const code = require('./utils/statusCodes');
require('./services/googlePassport');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

routes(app);

// Custom middleware for error handling
app.use((errMsg, req, res, next) => {
  res.status(code.STATUS_USER_ERROR).send({ error: errMsg });
});

module.exports = app;

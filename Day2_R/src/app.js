const express = require('express');
const indexRoutes = require('./routes/index.routes.js')
const app = express();

app.use()
app.use('/', indexRoutes);
module.exports = app;
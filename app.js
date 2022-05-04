const express = require('express');
const { globalErrorHandler } = require('./controllers/errors.controller');

const { usersRoter } = require('./routes/user.routes');
const { repairsRouter } = require('./routes/repair.routes');

const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoter);
app.use('/api/v1/repairs', repairsRouter);

app.use('*', globalErrorHandler);

module.exports = { app };
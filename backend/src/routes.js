const express = require('express');

const testController = require('./controllers/testecontroller')

const routes = express.Router();

routes.post('/test', testController.create);
routes.get('/test', testController.index);

module.exports = routes;
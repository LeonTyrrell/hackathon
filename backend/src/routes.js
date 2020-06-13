const express = require('express');

const caminhoneiroController = require('./controllers/caminhoneiroController');
const caminhaoController = require('./controllers/caminhaoController');
const loginController = require('./controllers/loginController');

const routes = express.Router();


routes.post('/caminhoneiro', caminhoneiroController.create);
routes.get('/caminhoneiro', caminhoneiroController.index);

routes.post('/caminhao', caminhaoController.create);
routes.get('/caminhao', caminhaoController.index);

routes.post('/login', loginController.create);

module.exports = routes;
const express = require('express');

const caminhoneiroController = require('./controllers/caminhoneiroController');
const caminhaoController = require('./controllers/caminhaoController');
const loginController = require('./controllers/loginController');
const paradasController = require('./controllers/paradasController');

const routes = express.Router();

// APIs de caminhoneiros
routes.post('/caminhoneiro', caminhoneiroController.create);
routes.get('/caminhoneiro', caminhoneiroController.index);

//API dos caminhões
routes.post('/caminhao', caminhaoController.create);
routes.get('/caminhao', caminhaoController.index);
routes.delete('/caminhao', caminhaoController.delete);

//API do Login // Ainda não terminado
routes.post('/login', loginController.create);

//API de criação das paradas
routes.post('/paradas', paradasController.create);

module.exports = routes;
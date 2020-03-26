const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create); 

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;

/**
 * Rota/Recurso ('/users')
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end (ex.: criar novo usuário)
 * PUT: alterar uma informação no bakc-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query params: parametros nomeados enviados na rota após o "?" (filtros, paginação, &, ) .query
  * Route params: utilizados para identificar recursos (/:id usuario com id=1) .params
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos  
  */
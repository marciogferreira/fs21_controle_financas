const express = require('express');
const MetasDesejosController = require('../controller/MetasDesejosController.js');

const MetasDesejosRoute = express.Router();
MetasDesejosRoute.get('/metas_desejos', MetasDesejosController.listar)
MetasDesejosRoute.get('/metas_desejos/:id', MetasDesejosController.consultarPorID)
MetasDesejosRoute.post('/metas_desejos', MetasDesejosController.criar)
MetasDesejosRoute.put('/metas_desejos/:id', MetasDesejosController.atualizar)
MetasDesejosRoute.delete('/metas_desejos/:id', MetasDesejosController.deletar);

module.exports = MetasDesejosRoute;

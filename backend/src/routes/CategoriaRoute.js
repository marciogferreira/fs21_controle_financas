const express = require('express');
const CategoriaController = require('../controller/CategoriaController.js');

const CategoriaRoute = express.Router();
CategoriaRoute.get('/categoria', CategoriaController.listar)
CategoriaRoute.get('/categoria/:id', CategoriaController.consultarPorID)
CategoriaRoute.post('/categoria', CategoriaController.criar)
CategoriaRoute.put('/categoria/:id', CategoriaController.atualizar)
CategoriaRoute.delete('/categoria/:id', CategoriaController.deletar);

module.exports = CategoriaRoute;

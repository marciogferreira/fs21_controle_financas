const express = require('express');
const CategoriaController = require('../controller/CategoriaController');

const CategoriaRoute = express.Router();
CategoriaRoute.get('/categorias', CategoriaController.listar);
CategoriaRoute.get('/categorias/:id', CategoriaController.consultarPorID);
CategoriaRoute.post('/categorias', CategoriaController.criar);
CategoriaRoute.put('/categorias/:id', CategoriaController.atualizar);
CategoriaRoute.delete('/categorias/:id', CategoriaController.deletar);

module.exports = CategoriaRoute;
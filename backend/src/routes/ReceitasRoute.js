const express = require('express');
const ReceitasController = require('../controller/ReceitasController');

const ReceitasRoute = express.Router();
ReceitasRoute.get('/receitas', ReceitasController.listar)
ReceitasRoute.get('/receitas/:id', ReceitasController.consultarPorID)
ReceitasRoute.post('/receitas', ReceitasController.criar)
ReceitasRoute.put('/receitas/:id', ReceitasController.atualizar)
ReceitasRoute.delete('/receitas/:id', ReceitasController.deletar);

module.exports = ReceitasRoute;
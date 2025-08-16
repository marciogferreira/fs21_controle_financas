const express = require('express');
const DespesaController = require('../controller/DespesasController');

const DespesasRoute = express.Router();
DespesasRoute.get('/despesas', DespesaController.listar);
DespesasRoute.get('/despesas/:id', DespesaController.consultarPorID);
DespesasRoute.post('/despesas', DespesaController.criar);
DespesasRoute.put('/despesas/:id', DespesaController.atualizar);
DespesasRoute.delete('/despesas/:id', DespesaController.deletar);

module.exports = DespesasRoute;
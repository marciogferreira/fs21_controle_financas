const express = require('express');
const BancoController = require('../controller/BancoController');

const BancoRoute = express.Router();
BancoRoute.get('/bancos', BancoController.listar);
BancoRoute.get('/bancos/:id', BancoController.consultarPorID);
BancoRoute.post('/bancos', BancoController.criar);
BancoRoute.put('/bancos/:id', BancoController.atualizar);
BancoRoute.delete('/bancos/:id', BancoController.deletar);

module.exports = BancoRoute;
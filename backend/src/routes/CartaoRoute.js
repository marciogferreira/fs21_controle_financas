const express = require('express');
const CartaoController = require('../controller/CartaoController');

const CartaoRoute = express.Router();
CartaoRoute.get('/cartoes', CartaoController.listar);
CartaoRoute.get('/cartoes/:id', CartaoController.consultarPorID);
CartaoRoute.post('/cartoes', CartaoController.criar);
CartaoRoute.put('/cartoes/:id', CartaoController.atualizar);
CartaoRoute.delete('/cartoes/:id', CartaoController.deletar);

module.exports = CartaoRoute;
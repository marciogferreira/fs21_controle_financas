const express = require('express');
const UsuarioController = require('../controller/UsuarioController.js');

const UsuariosRoute = express.Router();
UsuariosRoute.get('/usuarios', UsuarioController.listar)
UsuariosRoute.get('/usuarios/:id', UsuarioController.consultarPorID)
UsuariosRoute.post('/usuarios', UsuarioController.criar)
UsuariosRoute.put('/usuarios/:id', UsuarioController.atualizar)
UsuariosRoute.delete('/usuarios/:id', UsuarioController.deletar);

module.exports = UsuariosRoute;

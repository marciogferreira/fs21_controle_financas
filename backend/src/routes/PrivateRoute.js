const express = require('express')
const UsuariosRoute = require('./UsuariosRoute')
const CartaoRoute = require('./CartaoRoute')
const CategoriaRoute = require('./CategoriaRoute')
const AutenticacaoMiddleware = require('../middleware/AutenticacaoMiddleware')

const PrivateRoute = express.Router()
PrivateRoute.use(AutenticacaoMiddleware)
PrivateRoute.use(UsuariosRoute)
PrivateRoute.use(CartaoRoute)
PrivateRoute.use(CategoriaRoute)
module.exports = PrivateRoute
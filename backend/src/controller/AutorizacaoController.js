const jwt = require("jsonwebtoken");
const UsuarioModel = require("../model/UsuarioModel");
require('dotenv').config()
const Helpers = require('../config/Helpers.js');

const AutorizacaoController = {
    login: async (request, response) => {
        const body = request.body;
        console.log('Tentativa de login:', { email: body.email, senha: body.senha });
        
        const usuario = await UsuarioModel.findOne({
            where: {
            email: body.email,
            senha: Helpers.crypto(body.senha) 
            }
        })
        
        console.log('Usuário encontrado:', usuario ? 'Sim' : 'Não');
        if(usuario) {
            const dados = {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
            const token = await jwt.sign(dados, process.env.TOKEN);
            return response.json({
                token: token,
                message: 'Usuario Logado com Sucesso! Vamos botar esses dedos para trabalhar!!!'
            })
        } else {
            return response.status(401).json({
                message: 'Login ou senha incorreto, tente lembrar, se não, recupere sua senha!'
            })
        }
    },
    
    register: async (request, response) => {
        try {
            const body = request.body;
            console.log('Tentativa de registro:', { nome: body.nome, email: body.email });
            
            // Verificar se o email já existe
            const usuarioExistente = await UsuarioModel.findOne({
                where: { email: body.email }
            });
            
            if (usuarioExistente) {
                return response.status(400).json({
                    message: 'Esse email ai já ta sendo usado meu patrão!'
                });
            }
            
            // Criar novo usuário
            const novoUsuario = await UsuarioModel.create({
                nome: body.nome,
                email: body.email,
                senha: Helpers.crypto(body.senha),
                ativo: true
            });
            
            console.log('Usuário criado com sucesso:', novoUsuario.id);
            
            return response.status(201).json({
                message: 'Usuário criado com sucesso!'
            });
            
        } catch (error) {
            console.error('Erro no registro:', error);
            return response.status(500).json({
                message: 'Vixi, parece que o servidor está com problemas, tenta de novo mais tarde!'
            });
        }
    }
}

module.exports = AutorizacaoController;
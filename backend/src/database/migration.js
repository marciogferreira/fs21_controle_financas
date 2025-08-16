const Conexao = require('../config/conexao.js')
const UsuarioModel = require('../model/UsuarioModel.js')
const AutorModel = require('../model/AutorModel.js')
const EditorModel = require("../model/EditorModel.js")
const LivroModel = require('../model/LivroModel.js')
const Helpers = require('../config/Helpers.js')

async function criarUsuario() {
    const usuario = await UsuarioModel.findOne({ where: {
        nome: 'admin',
        email: 'admin@admin.com.br'
    } });

    if(!usuario) {
        UsuarioModel.create({
            nome: 'admin',
            email: 'admin@admin.com.br',
            senha: Helpers.crypto('123456'),
            ativo: true
        });
    }
}

async function asyncMigrations() {
    try {
        await Conexao.sync({ force: false, logging: false });
        await criarUsuario();
        console.log("Tabelas Criadas!");
    } catch(e) {
        throw new e;
    }
}

module.exports = asyncMigrations

// node migration.js
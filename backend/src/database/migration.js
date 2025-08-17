const Conexao = require('../config/conexao.js')
const Helpers = require('../config/Helpers.js')

// Importar todos os modelos para que sejam registrados no Sequelize
// Ordem: primeiro os modelos independentes, depois os que dependem de outros
const UsuarioModel = require('../model/UsuarioModel.js')
const CategoriaModel = require('../model/CategoriaModel.js')
const BancoModel = require('../model/BancoModel.js')
const CartaoModel = require('../model/CartaoModel.js')
const DespesasModel = require('../model/DespesasModel.js')
const ReceitasModel = require('../model/ReceitasModel.js')
const MetasDesejosModel = require('../model/MetasDesejosModel.js')

async function criarUsuario() {
    const usuario = await UsuarioModel.findOne({ where: {
        nome: 'admin',
        email: 'admin@admin.com.br'
    } });

    if(!usuario) {
        await UsuarioModel.create({
            nome: 'admin',
            email: 'admin@admin.com.br',
            senha: Helpers.crypto('123456'),
            ativo: true
        });
        console.log("Usuário admin criado com sucesso!");
    } else {
        console.log("Usuário admin já existe!");
    }
}

async function asyncMigrations() {
    try {
        // Sincronizar todas as tabelas (criar se não existirem)
        await Conexao.sync({ force: false, logging: false });
        await criarUsuario();
        console.log("Tabelas Criadas!");
    } catch(e) {
        throw e;
    }
}

module.exports = asyncMigrations

// node migration.js
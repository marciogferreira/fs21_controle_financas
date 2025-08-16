const BancoModel = require("../model/BancoModel.js");
const ErrorServices = require("../services/ErrorServices");
const BancoServices = require("../services/BancosServices");
const Helpers = require('../config/Helpers.js');
const BancoModel = {
    listar: async (request, response) => {
        const dados = await BancoModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await BancoModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            await BancoServices.validandoBanco(dados);
            await BancoModel.create(dados);
            return response.json({ 
                message: 'Banco adicionado com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar seu banco.', e, response);
           
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        dados.senha = Helpers.crypto(dados.senha);
        await BancoModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Banco atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await BancoModel.destroy({
            where: {
                id: id
            }
        })
        return response.json({
            message: "Banco deletado com sucesso!"
        })
    }
}

module.exports = BancoController;
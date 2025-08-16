const ReceitasModel = require("../model/ReceitasModel");
const ErrorServices = require("../services/ErrorServices");
const ReceitasServices = require("../services/ReceitasServices");
const Helpers = require('../config/Helpers.js');
const ReceitasController = {
    listar: async (request, response) => {
        const dados = await ReceitasModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await ReceitasModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;           
            await ReceitasModel.create(dados);
            return response.json({ 
                message: 'Receita criada com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar sua receita.', e, response);
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;        
        await ReceitasModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Receita atualizada com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await ReceitasModel.destroy({
            where: {
                id: id
            }
        })
        
        return response.json({
            message: "Receita deletada com sucesso!"
        })
    }
}

module.exports = ReceitasController;
const CategoriaModel = require("../model/UsuarioModel");
const ErrorServices = require("../services/ErrorServices");
const CategoriaServices = require("../services/UsuariosServices");
const Helpers = require('../config/Helpers.js');
const CategoriaController = {
    listar: async (request, response) => {
        const dados = await CategoriaModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await CategoriaModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            dados.senha = Helpers.crypto(dados.senha);
            await CategoriaServices.validandoUsuario(dados);
            await CategoriaModel.create(dados);
            return response.json({ 
                message: 'Categoria criada com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível encontrar a categoria.', e, response);
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        dados.senha = Helpers.crypto(dados.senha);
        await CategoriaModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Categoria atualizada com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await CategoriaModel.destroy({
            where: {
                id: id
            }
        })
      
        return response.json({
            message: "Categoria deletada com sucesso!"
        })
    }
}

module.exports = CategoriaController;
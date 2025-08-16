const MetasDesejosModel = require("../model/MetasDesejosModel");
const ErrorServices = require("../services/ErrorServices");
const Helpers = require('../config/Helpers.js');
const MetasDesejosController = {
    listar: async (request, response) => {
        const dados = await MetasDesejosModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await MetasDesejosModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            await MetasDesejosModel.create(dados);
            return response.json({ 
                message: 'Metas e desejos criado com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível criar metas e desejos.', e, response);
            // if(e.name ===  'SequelizeUniqueConstraintError') {
            //     return response.status(422).json({ 
            //         message: 'Não foi possível cadastrar seu usuário. ' + e.errors[0].message
            //     })
            // }
            
            // return response.status(500).json({ 
            //     message: 'Não foi possível cadastrar seu usuário. ' + e
            // })
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        dados.senha = Helpers.crypto(dados.senha);
        await MetasDesejosModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Metas e desejos atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await MetasDesejosModel.destroy({
            where: {
                id: id
            }
        })
        // DELETE FROM usuarios WHERE id = ;DELETE FROM usuarios;;
        return response.json({
            message: "Metas e desejos deletado com sucesso!"
        })
    }
}

module.exports = MetasDesejosController;
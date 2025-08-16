const DespesasModel = require("../model/DespesasModel.js");
const ErrorServices = require("../services/ErrorServices");
const DespesasServices = require("../services/DespesasServices");
const DespesasModel = {
    listar: async (request, response) => {
        const dados = await DespesasModel.findAll();
        return response.json(dados);
    },
    consultarPorID: async (request, response) => {
        const id = request.params.id;
        const dados = await DespesasModel.findByPk(id);
        return response.json(dados);
    },
    criar: async (request, response) => {

        try {
            const dados = request.body;
            await DespesasModel.create(dados);
            return response.json({ 
                message: 'Despesa adicionada com sucesso!',
                data: dados
            })  

        } catch(e) {
            return ErrorServices.validacaoErro('Não foi possível cadastrar sua despesa.', e, response);
           
        }
    },
    atualizar: async (request, response) => {
        const dados = request.body;
        const id = request.params.id;
        await DespesasModel.update(dados, {
            where: {
                id: id
            }
        });
        return response.json({
            message: "Despesa atualizado com sucesso!"
        })
    },
    deletar: async (request, response) => {
        const id = request.params.id;
        await DespesasModel.destroy({
            where: {
                id: id
            }
        })
        return response.json({
            message: "Despesa deletado com sucesso!"
        })
    }
}

module.exports = DespesaController;
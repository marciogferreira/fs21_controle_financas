const CategoriaServices = {
    validandoCategoria: async (dados) => {
        if (!dados.nome || !dados.numero || !dados.data_vencimento) {
            throw new Error('Dados inválidos para o cartão.');
        }
    }
}
module.exports = CategoriasServices;
const CartaoServices = {
    validandoCartao: async (dados) => {
        if (!dados.nome || !dados.data_vencimento) {
            throw new Error('Dados inválidos para o cartão.');
        }
        if (!dados.limite || isNaN(dados.limite) || dados.limite <= 0) {
            throw new Error('Limite do cartão deve ser um número positivo.');
        }
        if (dados.data_vencimento < new Date()) {
            throw new Error('Data de vencimento não pode ser no passado.');
        }

    }
}
module.exports = CartaoServices;
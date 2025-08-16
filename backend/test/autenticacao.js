const Api = require('./api.js');

async function getToken() {
    const response = await Api.post('login', {
        email: 'admin@admin.com.br',
        senha: '123456'
    });
    return response;
}

module.exports = getToken;
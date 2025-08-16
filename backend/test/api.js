const axios = require('axios');

const Api = axios.create({
    baseURL: 'https://fs21-dc-backend-z615.onrender.com/'
});

module.exports = Api;
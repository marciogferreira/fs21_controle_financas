import axios from 'axios';
import Message from '../config/Message'
const Api = axios.create({
    baseURL: 'http://localhost:3000/',
})


Api.interceptors.request.use((request) => {
    request.headers.token = localStorage.getItem('sis@controle_financas')
    return request;
}, () => {
    return Promise.reject(error)
});

Api.interceptors.response.use((response) => {

    return response; 
}, (error) => {

    console.log(error)
    if(error.status === 400) {
        Message.errorCallBack(`
            Você não tem autorização para acessar essa página. 
            Por favor, faça login novamente!
        `, () => {
            localStorage.removeItem('sis@controle_financas');
            window.location.href = '/login'
        })
    } else {
        if(error.response.data.message) {
            Message.error(error.response.data.message)
        } else {
            Message.error(error.response.data)
        }
      
    }
    return Promise.reject(error)
});

export default Api;
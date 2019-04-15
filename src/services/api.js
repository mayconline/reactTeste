import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3000',
    //headers: {'authorization':}
});

export default api;
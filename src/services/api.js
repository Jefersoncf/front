import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-jeferson.herokuapp.com",
});

export default api;

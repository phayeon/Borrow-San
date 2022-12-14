import axios from "axios";
const server = `http://127.0.0.1:8000`
export const umbrellaapi = req => axios.post(`${server}/장고때 할거`, req)
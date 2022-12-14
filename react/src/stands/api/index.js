import axios from 'axios'
const server = `http://localhost:8000`
export const AppSetMain = req => axios.get(`${server}/stands/mngbox`, req)
import axios from "axios";
const server = `http://localhost:8000`
export const noticing = req => axios.get(`${server}/admin/notice`, req)

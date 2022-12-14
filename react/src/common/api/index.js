import axios from "axios";
const server = `http://localhost:8000`
export const managing = req => axios.get(`${server}/admin/managing`, req)
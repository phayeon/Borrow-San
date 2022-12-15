import axios from 'axios'
const server = `http://localhost:8000`
export const AppSetMainGet = req => axios.post(`${server}/users/appsetmain`, req)
export const AppSignUpGet = req => axios.get(`${server}/users/appsignup`, req)
export const AppSetUModifyGet = req => axios.get(`${server}/users/appsetumodify`, req)
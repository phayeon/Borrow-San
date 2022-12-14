import axios from 'axios'
const server = `http://localhost:8000`
export const AppSetMain = req => axios.get(`${server}/users/appsetmain`, req)
export const AppSignUp = req => axios.get(`${server}/users/appsignup`, req)
export const AppSetUModify = req => axios.get(`${server}/users/appsetumodify`, req)
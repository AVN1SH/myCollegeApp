// axios configuration : : : : : 

import axios from "axios"

const api = axios.create({
  baseURL : `${import.meta.env.VITE_MY_API_URI}/api/users`,
  withCredentials : true
});
const stdApi = axios.create({
  baseURL : `${import.meta.env.VITE_MY_API_URI}/api/student`,
  withCredentials : true
});
const facultyApi = axios.create({
  baseURL : `${import.meta.env.VITE_MY_API_URI}/api/faculty`,
  withCredentials : true
});

export { api, stdApi, facultyApi }
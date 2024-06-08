// axios configuration : : : : : 

import axios from "axios"

const api = axios.create({
  baseURL : `/api/users`,
  withCredentials : true
});
const stdApi = axios.create({
  baseURL : `/api/student`,
  withCredentials : true
});
const facultyApi = axios.create({
  baseURL : `/api/faculty`,
  withCredentials : true
});

export { api, stdApi, facultyApi }
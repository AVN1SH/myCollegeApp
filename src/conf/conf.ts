// axios configuration : : : : : 

import axios from "axios"

const api = axios.create({
  baseURL : `/api/users`,
  withCredentials : true
});
const facultyApi = axios.create({
  baseURL : `/api/faculty`,
  withCredentials : true
});

export { api, facultyApi }
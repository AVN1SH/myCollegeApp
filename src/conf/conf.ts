// axios configuration : : : : : 

import axios from "axios"

const api = axios.create({
  baseURL : `/api/users`,
  withCredentials : true
});

export { api }
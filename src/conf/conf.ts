// axios configuration : : : : : 

import axios from "axios"

const api = axios.create({
  // baseURL : `/users`,
  withCredentials : true
});

export { api }
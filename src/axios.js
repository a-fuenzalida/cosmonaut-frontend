import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

instance.defaults.headers.common['access-token'] = localStorage.getItem('access-token') || "";
instance.defaults.headers.common['client'] = localStorage.getItem('client') || "";
instance.defaults.headers.common['uid'] = localStorage.getItem('uid') || "";

export default instance;
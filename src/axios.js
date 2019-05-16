import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cosmonautapi.herokuapp.com/',
});

instance.defaults.headers.common['access-token'] = localStorage.getItem('access-token') || "";
instance.defaults.headers.common['client'] = localStorage.getItem('client') || "";
instance.defaults.headers.common['uid'] = localStorage.getItem('uid') || "";

export default instance;
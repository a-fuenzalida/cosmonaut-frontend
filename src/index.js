import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/';
axios.defaults.headers.common['access-token'] = localStorage.getItem('access-token') || "";
axios.defaults.headers.common['client'] = localStorage.getItem('client') || "";
axios.defaults.headers.common['uid'] = localStorage.getItem('uid') || "";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/* To globally access axios interceptors put them on the outer most container */
axios.interceptors.request.use(requestConfig => {
	console.log(requestConfig);
	// Edit the requestConfig 
	return requestConfig;
/* This Error will only happen if there is a connection issue or */
/* something related to making the request */
}, error => {
	console.log(error);
	return Promise.reject(error);
});

axios.interceptors.response.use(responseConfig => {
	console.log(responseConfig);
	return responseConfig;
}, error => {
	console.log(error);
	return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

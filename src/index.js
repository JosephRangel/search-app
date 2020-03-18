import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css' // <- change './index.css' to './styles.css'
import App from './App';
import Header from './Header';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

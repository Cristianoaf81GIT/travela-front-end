import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker'
import AppRouter from './app/routes/app.routes'
import 'jquery-mask-plugin/dist/jquery.mask.min';

ReactDOM.render(
  
    <AppRouter />
  ,
  document.getElementById('root')
);

// remove <React.StrictMode>
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

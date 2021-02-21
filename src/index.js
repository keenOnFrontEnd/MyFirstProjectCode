import store from './redux/redux-store';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import App, { MainApp, AppContainer } from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';

WebFont.load({
   custom: {
     families: ['font-awesome'],
     urls: ['https://use.fontawesome.com/releases/v5.15.1/js/all.js']
   }
});
ReactDOM.render(
    <React.StrictMode>
       <MainApp/>
    </React.StrictMode>,
    document.getElementById('root'))

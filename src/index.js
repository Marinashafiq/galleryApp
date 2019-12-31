import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';
import store from './store';
import './index.css';

// optional cofiguration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 10000,
    offset: '30px',
    type: 'success',
    // you can also just use 'scale'
    transition: transitions.SCALE,
    containerStyle: {
        zIndex: 100
      }
  }

ReactDOM.render(
    <Provider store={store}>
           {/* <BrowserRouter basename={window.location.pathname || ''}> */}

        <AlertProvider template={AlertTemplate} {...options}>
        <App />
        </AlertProvider>
        {/* </BrowserRouter> */}
    </Provider>,
    document.getElementById('root')
);




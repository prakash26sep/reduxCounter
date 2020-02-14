import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./redux/store/store";
import { Provider } from "react-redux";

 //eslint-disable-next-line
import index from "./redux/index";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
 );
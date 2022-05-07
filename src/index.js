import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {combineReducers, createStore} from "redux"
import {bankingReducer} from "./reducer/bankingreducer"
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/combineReducer';

const store=createStore(rootReducer);


ReactDOM.render(
<Provider store={store}>
    <App/>
    </Provider>,

document.getElementById("root")
)

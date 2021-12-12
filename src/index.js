import React from 'react';
import ReactDOM from 'react-dom';
import creatSagaMiddleware from 'redux-saga'
import App from './App';
import './index.scss'
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./store/reducers/reducer";
import rootSaga from "./store/saga";

const saga = creatSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(saga)))
saga.run(rootSaga)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, document.getElementById('root'));

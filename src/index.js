import React from 'react';
import { render } from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware,compose} from 'redux'
import { default as thunk } from "redux-thunk";
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';
import { createLogger } from 'redux-logger';
import Routes from "./routes";
import { BrowserRouter } from 'react-router-dom'

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(thunk,logger)
);
const store = createStore(
  rootReducer,
  enhancer,
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

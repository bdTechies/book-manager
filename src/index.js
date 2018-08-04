import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -ms-overflow-style: scrollbar;
    -webkit-app-region:drag;
  }

  input,
  button,
  textarea,
  aside,
  ul,  p,  h1,
  h2,  h3,  h4,
  h5, h6 {
  	-webkit-app-region: no-drag;
  }

  ::-webkit-scrollbar-track
  {
  	background-color: rgba(92,31,124, 0.1);
  }

  ::-webkit-scrollbar
  {
  	width: 8px;
  	background-color: rgba(92,31,124, 0.1);
  }

  ::-webkit-scrollbar-thumb
  {
  	background-color: rgba(92,31,124, 0.5);
  }
`;

const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import { injectGlobal } from 'styled-components';

injectGlobal`
/* lato-regular - latin */
  @font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'),
       url('./assets/fonts/lato-v14-latin-regular.woff2') format('woff2');
  }

    /* arima-madurai-regular - latin */
  @font-face {
    font-family: 'Arima Madurai';
    font-style: normal;
    font-weight: 400;
    src: local('Arima Madurai'), local('ArimaMadurai-Regular'),
         url('./assets/fonts/arima-madurai-v3-latin-regular.woff2') format('woff2');
  }
  /* arima-madurai-700 - latin */
  @font-face {
    font-family: 'Arima Madurai';
    font-style: normal;
    font-weight: 700;
    src: local('Arima Madurai Bold'), local('ArimaMadurai-Bold'),
         url('./assets/fonts/arima-madurai-v3-latin-700.woff2') format('woff2');
  }

    /* ibm-plex-sans-regular - latin */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Sans'), local('IBMPlexSans'),
         url('./assets/fonts/ibm-plex-sans-v3-latin-regular.woff2') format('woff2');
  }
  /* ibm-plex-sans-700 - latin */
  @font-face {
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Sans Bold'), local('IBMPlexSans-Bold'),
         url('./assets/fonts/ibm-plex-sans-v3-latin-700.woff2') format('woff2');
  }

    /* archivo-narrow-regular - latin */
  @font-face {
    font-family: 'Archivo Narrow';
    font-style: normal;
    font-weight: 400;
    src: local('Archivo Narrow Regular'), local('ArchivoNarrow-Regular'),
         url('./assets/fonts/archivo-narrow-v8-latin-regular.woff2') format('woff2');
  }
  /* archivo-narrow-500 - latin */
  @font-face {
    font-family: 'Archivo Narrow';
    font-style: normal;
    font-weight: 500;
    src: local('Archivo Narrow Medium'), local('ArchivoNarrow-Medium'),
         url('./assets/fonts/archivo-narrow-v8-latin-500.woff2') format('woff2');
  }

  @font-face{
    font-family: 'Fira Code';
    src: url('./assets/fonts/FiraCode-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face{
    font-family: 'Fira Code';
    src: url('./assets/fonts/FiraCode-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face{
    font-family: 'Fira Code';
    src: url('./assets/fonts/FiraCode-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
  }

  @font-face{
    font-family: 'Fira Code';
    src: url('./assets/fonts/FiraCode-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

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
// registerServiceWorker();

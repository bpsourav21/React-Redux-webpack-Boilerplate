import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import App from './components/App';
const store = configureStore(window.__initialData__);

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );

render(App);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./components/App', () => render(App));
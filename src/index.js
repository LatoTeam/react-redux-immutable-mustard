import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './config/routes';

// if you want to active the Redux dev tools, make sure to include
// window.devToolsExtension && window.devToolsExtension() as a parameter of the
// configureStore function.
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

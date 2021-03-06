import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './config/routes';
import { loadBooks } from './actions/helloActions';

// if you want to active the Redux dev tools, make sure to include
// window.devToolsExtension && window.devToolsExtension() as a parameter of the
// configureStore function.
const store = configureStore(window.devToolsExtension && window.devToolsExtension());

// If you want to load data in a initial phase.
store.dispatch(loadBooks());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

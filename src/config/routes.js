import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import NotFound from '../components/NotFound';
import HelloWorld from '../components/HelloWorld';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);

export default routes;

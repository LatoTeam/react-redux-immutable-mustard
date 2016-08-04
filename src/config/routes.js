import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as paths from './routesConstants';
import App from '../components/App';
import NotFound from '../components/views/NotFound';
import HelloWorld from '../components/HelloWorld';

const routes = (
  <Route path={paths.home} component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path={paths.notFound} component={NotFound} status={404} />
  </Route>
);

export default routes;

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as paths from './routesConstants';
import App from '../views/App';
import NotFound from '../views/NotFound';
import HelloWorld from '../views/HelloWorld';

const routes = (
  <Route path={paths.home} component={App}>
    <IndexRoute component={HelloWorld} />
    <Route path={paths.notFound} component={NotFound} status={404} />
  </Route>
);

export default routes;

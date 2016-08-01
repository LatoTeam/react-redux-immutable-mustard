import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import NotFound from '../components/NotFound';
import HelloWorld from '../components/HelloWorld';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={HelloWorld} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);

export default routes;

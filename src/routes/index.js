import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Welcome } from '../ui/pages';

const Routes = () => (
  <Router>
    <Route exact path="/" component={Welcome} />
  </Router>
);

export default Routes;

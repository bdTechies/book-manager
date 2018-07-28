import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WelcomePage, AllBooksPage } from '../ui/pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/all-books" component={AllBooksPage} />
    </Switch>
  </Router>
);

export default Routes;

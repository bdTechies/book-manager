import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WelcomePage, AllBooksPage, AddNewBookPage } from '../ui/pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/all-books" component={AllBooksPage} />
      <Route path="/add-book" component={AddNewBookPage} />
    </Switch>
  </Router>
);

export default Routes;

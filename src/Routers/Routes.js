import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../Components/Landing/LandingPage';
import Test from '../Components/TestPage/Test';

const Routes = () => (<Switch>
  <Route path='/test' component={Test} />
  <Route path='/' component={LandingPage} />
</Switch>);

export default Routes;

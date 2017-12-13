import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render(){
    return(
      <div>
        <p>This is the landing page.</p>
        <p>You can visit the test page <Link to='/test'>here</Link>.</p>
      </div>
    );
  }
}

export default LandingPage;

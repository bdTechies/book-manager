import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Test extends Component {
  render(){
    return(
      <div>
        <p>This is a test page</p>
        <p>You can go back to the landing page <Link to='/'>here</Link>.</p>
      </div>
    );
  }
}

export default Test;

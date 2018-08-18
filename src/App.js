import React, { Component } from 'react';
import { connect } from 'react-redux';
import { honeyFlower } from './ui/themes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import { bookActions } from './actions';

const theme = createMuiTheme(honeyFlower);

class App extends Component {
  componentDidMount() {
    this.props.initMainProcessListeners();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    );
  }
}

const mapActionsToProps = {
  initMainProcessListeners: bookActions.initMainProcessListeners,
};

export default connect(
  null,
  mapActionsToProps
)(App);

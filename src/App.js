import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { honeyFlower } from './ui/themes';
import { createMuiTheme } from '@material-ui/core/styles';
import Routes from './routes';
import { bookActions } from './actions';

const theme = createMuiTheme(honeyFlower);

class App extends Component {
  componentDidMount() {
    this.props.initMainProcessListeners();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading</div>}>
          <Routes />
        </Suspense>
      </ThemeProvider>
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

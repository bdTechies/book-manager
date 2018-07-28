import React, { Component } from 'react';
import { honeyFlower } from './ui/themes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { todoActions } from './actions';
import Routes from './routes';

const theme = createMuiTheme(honeyFlower);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);

// class App extends Component {
// constructor(props) {
//   super(props);
//   this.handleSubmit = this.handleSubmit.bind(this);
//   this.handleInputChange = this.handleInputChange.bind(this);
// }
//
// componentDidMount() {
//   this.props.getData();
//   this.props.initMainProcessListeners();
// }
//
// handleSubmit(event) {
//   event.preventDefault();
//   this.props.handleSubmit(this.props.newTask);
//   document.getElementById('add-task').reset();
// }
//
// handleInputChange(event) {
//   this.props.handleInputChange(event.target.value);
// }

//   render() {
//     return (
//
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     todos: state.todoReducer.todos,
//     newTask: state.todoReducer.newTask,
//   };
// };
//
// const mapActionsToProps = {
//   getData: todoActions.getData,
//   initMainProcessListeners: todoActions.initMainProcessListeners,
//   handleInputChange: todoActions.createNewTask,
//   handleSubmit: todoActions.saveTask,
// };

// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(App);
export default App;

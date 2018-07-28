import React, { Component } from 'react';
import './App.css';
import { Button, List, ListItem } from './ui/base-kits/';
import { TextField, AppBar, Toolbar, Typography } from '@material-ui/core/';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { todoActions } from './actions';
import { honeyFlower } from './ui/themes';

const theme = createMuiTheme(honeyFlower);

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.getData();
    this.props.initMainProcessListeners();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.props.newTask);
    document.getElementById('add-task').reset();
  }

  handleInputChange(event) {
    this.props.handleInputChange(event.target.value);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="headline" color="inherit">
                Photos
              </Typography>
            </Toolbar>
          </AppBar>
          <header className="App-header">
            <h1 className="App-title">Welcome to Reactron</h1>
            <form onSubmit={this.handleSubmit} id="add-task">
              <TextField
                required
                label="New task"
                margin="normal"
                name="task"
                onChange={this.handleInputChange}
              />
              <Button type="submit">Add Task</Button>
            </form>
          </header>
          Button
          <p className="App-intro">All the things I need to do..</p>
          <List>
            {this.props.todos.map(todo => (
              <ListItem key={todo._id}>
                {todo.task}{' '}
                <span>Completed: {todo.isCompleted ? 'Y' : 'N'}</span>
              </ListItem>
            ))}
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos,
    newTask: state.todoReducer.newTask,
  };
};

const mapActionsToProps = {
  getData: todoActions.getData,
  initMainProcessListeners: todoActions.initMainProcessListeners,
  handleInputChange: todoActions.createNewTask,
  handleSubmit: todoActions.saveTask,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

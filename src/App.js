import React, { Component } from 'react';
import './App.css';
import { Button, List, ListItem } from './ui/base-kits/';
import { TextField } from '@material-ui/core/';
import { connect } from 'react-redux';
import { todoActions } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Reactron</h1>
          <form onSubmit={this.handleSubmit} id="add-task">
            <TextField
              label="New task"
              margin="normal"
              name="task"
              onChange={this.handleInputChange}
            />
            <Button type="submit">Add Task</Button>
          </form>
        </header>
        <p className="App-intro">All the things I need to do..</p>
        <List>
          {this.props.todos.map(todo => (
            <ListItem key={todo.id}>
              {todo.task} <span>Completed: {todo.isCompleted ? 'Y' : 'N'}</span>
            </ListItem>
          ))}
        </List>
      </div>
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
  handleInputChange: todoActions.createNewTask,
  handleSubmit: todoActions.addNewTask,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);

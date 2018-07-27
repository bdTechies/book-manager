import { ADD_TASK, CREATE_TASK } from '../actions/types';

const INITIAL_STATE = {
  todos: [],
  newTask: {},
};

export default function todoReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case CREATE_TASK:
      return {
        ...state,
        newTask: { id: state.todos.length, task: payload, isCompleted: false },
      };
    case ADD_TASK:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
}

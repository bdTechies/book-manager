import { ADD_TASK } from '../actions/types';

const INITIAL_STATE = {
  todos: [],
};

export default function todoReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        todos: state.todos.push(payload),
      };
    default:
      return state;
  }
}

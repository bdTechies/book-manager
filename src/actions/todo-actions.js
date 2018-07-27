import { ADD_TASK, CREATE_TASK } from './types';

export function createNewTask(value) {
  return {
    type: CREATE_TASK,
    payload: value,
  };
}

export function addNewTask(newTask) {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
}

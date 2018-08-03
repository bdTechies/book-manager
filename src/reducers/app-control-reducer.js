import { TOGGLE_MAXIMIZE } from '../actions/types';

const INITIAL_STATE = {
  isMaximized: false,
};

export default function appControlReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case TOGGLE_MAXIMIZE:
      return {
        ...state,
        isMaximized: payload,
      };
    default:
      return state;
  }
}

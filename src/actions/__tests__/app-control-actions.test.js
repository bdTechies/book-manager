import * as types from '../types';
import * as actions from '../app-control-actions';

describe('actions', () => {
  it('should create an action to minimize app', () => {
    const expectedAction = {
      type: types.MINIMIZE_APP,
    };
    expect(actions.minimizeApp()).toEqual(expectedAction);
  });

  it('should create an action to maximize app', () => {
    const expectedAction = {
      type: types.MAXIMIZE_APP,
    };
    expect(actions.maximizeApp()).toEqual(expectedAction);
  });

  it('should create an action to unMaximize app', () => {
    const expectedAction = {
      type: types.UN_MAXIMIZE_APP,
    };
    expect(actions.unMaximizeApp()).toEqual(expectedAction);
  });

  it('should create an action to toggle maximize app', () => {
    const expectedAction1 = {
      type: types.TOGGLE_MAXIMIZE,
      payload: true,
    };
    const expectedAction2 = {
      type: types.TOGGLE_MAXIMIZE,
      payload: false,
    };
    expect(actions.toggleMaximize(true)).toEqual(expectedAction1);
    expect(actions.toggleMaximize(false)).toEqual(expectedAction2);
  });

  it('should create an action to exit app', () => {
    const expectedAction = {
      type: types.EXIT_APP,
    };
    expect(actions.exitApp()).toEqual(expectedAction);
  });
});

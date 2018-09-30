import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import ControlMenu from '../control-menu';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<ControlMenu />', () => {
  it('renders 1 <ControlMenu /> component', () => {
    const component = shallow(<ControlMenu store={store} />);
    expect(component).toHaveLength(1);
  });
});

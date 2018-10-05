import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import MainMenu from '../main-menu';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<MainMenu />', () => {
  it('renders 1 <MainMenu /> component', () => {
    const component = shallow(<MainMenu store={store} />);
    expect(component).toHaveLength(1);
  });
});

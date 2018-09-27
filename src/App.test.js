import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
import App from './App';
import { shallow } from './enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<App />', () => {
  it('renders 1 <App /> component', () => {
    const component = shallow(<App store={store} />);
    expect(component).toHaveLength(1);
  });
});

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import WelcomePageMenu from '../welcome-page-menu';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<WelcomePageMenu />', () => {
  it('renders 1 <WelcomePageMenu /> component', () => {
    const component = shallow(<WelcomePageMenu store={store} />);
    expect(component).toHaveLength(1);
  });
});

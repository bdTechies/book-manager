import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import BookSearch from '../book-search';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<BookSearch />', () => {
  it('renders 1 <BookSearch /> component', () => {
    const component = shallow(<BookSearch store={store} />);
    expect(component).toHaveLength(1);
  });
});

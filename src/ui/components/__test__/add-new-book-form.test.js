import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import AddNewBookForm from '../add-new-book-form';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<AddNewBookForm />', () => {
  it('renders 1 <AddNewBookForm /> component', () => {
    const component = shallow(<AddNewBookForm store={store} />);
    expect(component).toHaveLength(1);
  });
});

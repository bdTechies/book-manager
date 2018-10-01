import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import SingleBookPreviewCard from '../single-book-preview-card';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<SingleBookPreviewCard />', () => {
  it('renders 1 <SingleBookPreviewCard /> component', () => {
    const component = shallow(<SingleBookPreviewCard store={store} />);
    expect(component).toHaveLength(1);
  });
});

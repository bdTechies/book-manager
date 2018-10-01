import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../../../reducers';
import QuillEditor from '../quill-editor';
import { shallow, mount } from '../../../enzyme';

const store = createStore(allReducers, applyMiddleware(thunk));

describe('<QuillEditor />', () => {
  it('renders 1 <QuillEditor /> component', () => {
    const component = shallow(<QuillEditor store={store} />);
    expect(component).toHaveLength(1);
  });
});

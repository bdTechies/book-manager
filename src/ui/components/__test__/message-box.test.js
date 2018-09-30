import React from 'react';
import MessageBox from '../message-box';
import { shallow, mount } from '../../../enzyme';

describe('<MessageBox />', () => {
  it('renders 1 <MessageBox /> component', () => {
    const component = shallow(<MessageBox />);
    expect(component).toHaveLength(1);
  });
});

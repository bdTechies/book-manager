import React from 'react';
import MessageDialog from '../message-dialog';
import { shallow, mount } from '../../../enzyme';

describe('<MessageDialog />', () => {
  it('renders 1 <MessageDialog /> component', () => {
    const component = shallow(<MessageDialog />);
    expect(component).toHaveLength(1);
  });
});

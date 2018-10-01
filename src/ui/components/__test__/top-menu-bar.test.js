import React from 'react';
import TopMenuBar from '../top-menu-bar';
import { shallow, mount } from '../../../enzyme';

describe('<TopMenuBar />', () => {
  it('renders 1 <TopMenuBar /> component', () => {
    const component = shallow(<TopMenuBar />);
    expect(component).toHaveLength(1);
  });
});

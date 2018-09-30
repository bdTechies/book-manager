import React from 'react';
import MainMenu from '../main-menu';
import { shallow, mount } from '../../../enzyme';

describe('<MainMenu />', () => {
  it('renders 1 <MainMenu /> component', () => {
    const component = shallow(<MainMenu />);
    expect(component).toHaveLength(1);
  });
});

import React from 'react';
import WelcomePageLogo from '../welcome-page-logo';
import { shallow, mount } from '../../../enzyme';

describe('<WelcomePageLogo />', () => {
  it('renders 1 <WelcomePageLogo /> component', () => {
    const component = shallow(<WelcomePageLogo />);
    expect(component).toHaveLength(1);
  });
});

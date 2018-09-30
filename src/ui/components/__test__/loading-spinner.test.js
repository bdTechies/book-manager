import React from 'react';
import LoadingSpinner from '../loading-spinner';
import { shallow, mount } from '../../../enzyme';

describe('<LoadingSpinner />', () => {
  it('renders 1 <LoadingSpinner /> component', () => {
    const component = shallow(<LoadingSpinner />);
    expect(component).toHaveLength(1);
  });
});

import React from 'react';
import AllBooksLink from '../all-books-link';
import { shallow, mount } from '../../../enzyme';

describe('<AllBooksLink />', () => {
  it('renders 1 <AllBooksLink /> component', () => {
    const component = shallow(<AllBooksLink />);
    expect(component).toHaveLength(1);
  });
});

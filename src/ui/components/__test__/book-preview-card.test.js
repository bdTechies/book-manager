import React from 'react';
import BookPreviewCard from '../book-preview-card';
import { shallow, mount } from '../../../enzyme';

const book = {
  title: 'Test Book',
  author: 'John Doe',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

describe('<BookPreviewCard />', () => {
  it('renders 1 <BookPreviewCard /> component', () => {
    const component = shallow(<BookPreviewCard {...book} />);
    expect(component).toHaveLength(1);
  });
});

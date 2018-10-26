import React from 'react';
import NotePreviewCard from '../note-preview-card';
import { shallow, mount } from '../../../enzyme';

const book = {
  title: 'Test book',
  author: 'John Doe',
  note:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

describe('<NotePreviewCard />', () => {
  it('renders 1 <NotePreviewCard /> component', () => {
    const component = shallow(<NotePreviewCard {...book} />);
    expect(component).toHaveLength(1);
  });
});

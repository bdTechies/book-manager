import React from 'react';
import NotePreviewCard from '../note-preview-card';
import { shallow, mount } from '../../../enzyme';

describe('<NotePreviewCard />', () => {
  it('renders 1 <NotePreviewCard /> component', () => {
    const component = shallow(<NotePreviewCard />);
    expect(component).toHaveLength(1);
  });
});

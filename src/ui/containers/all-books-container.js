import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { BookPreviewCard } from '../components';

class AllBooksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={16}>
        <BookPreviewCard />
        <BookPreviewCard />
        <BookPreviewCard />
        <BookPreviewCard />
        <BookPreviewCard />
        <BookPreviewCard />
        <BookPreviewCard />
        <BookPreviewCard />
      </Grid>
    );
  }
}

export default AllBooksContainer;

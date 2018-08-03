import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class AllBooksContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={32}>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At soluta
            deserunt maiores nobis fugiat vel laboriosam quas esse aperiam,
            veniam architecto corporis, ex. Ea nihil molestias, quisquam illo
            nulla consequatur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At soluta
            deserunt maiores nobis fugiat vel laboriosam quas esse aperiam,
            veniam architecto corporis, ex. Ea nihil molestias, quisquam illo
            nulla consequatur.
          </p>
        </Grid>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At soluta
            deserunt maiores nobis fugiat vel laboriosam quas esse aperiam,
            veniam architecto corporis, ex. Ea nihil molestias, quisquam illo
            nulla consequatur.
          </p>
        </Grid>
      </Grid>
    );
  }
}

export default AllBooksContainer;

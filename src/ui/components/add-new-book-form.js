import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Container, PaddedPaper, CustomButton } from '../base-kits';

class AddNewBookForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <PaddedPaper square>
            <Grid container direction="row">
              <Grid item xs={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Assumenda ratione non adipisci, magni necessitatibus doloribus
                  placeat minima quaerat quod explicabo! Cupiditate debitis
                  labore excepturi consequatur voluptate velit perferendis
                  tempora omnis.
                </p>
              </Grid>
              <Grid item xs={6}>
                <h1>Hello</h1>
              </Grid>
              <Grid item xs={12}>
                <Container align="right">
                  <CustomButton
                    variant="contained"
                    color="default"
                    size="small"
                    mr="16"
                  >
                    Cancel
                  </CustomButton>
                  <Button variant="contained" color="primary" size="small">
                    Save
                  </Button>
                </Container>
              </Grid>
            </Grid>
          </PaddedPaper>
        </Grid>
      </Grid>
    );
  }
}

export default AddNewBookForm;

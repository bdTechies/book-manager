import React, { Component } from 'react';
import {
  Grid,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core';
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
            <Grid container direction="row" spacing={32}>
              <Grid item xs={6}>
                <TextField
                  id="title"
                  label="Title"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="none"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="author"
                  label="Author"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="translator"
                  label="Translator"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="publisher"
                  label="Publisher"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="categories"
                  label="Categories"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="book-cover"
                  label="Book cover"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="book-description"
                  label="Book description"
                  // value={this.state.name}
                  // onChange={this.handleChange('name')}
                  margin="normal"
                  multiline={true}
                  rows={3}
                  rowsMax={5}
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormLabel component="label">Assign responsibility</FormLabel>
                <RadioGroup
                  aria-label="Reading Status"
                  name="reading-status"
                  // value={this.state.value}
                  // onChange={this.handleChange}
                >
                  <FormControlLabel
                    value="completed"
                    control={<Radio />}
                    label="Completed"
                  />
                  <FormControlLabel
                    value="reading"
                    control={<Radio />}
                    label="Reading"
                  />
                  <FormControlLabel
                    value="not-started"
                    control={<Radio />}
                    label="Not started"
                  />
                </RadioGroup>
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

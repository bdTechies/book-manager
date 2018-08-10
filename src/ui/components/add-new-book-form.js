import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core';
import {
  Container,
  PaddedPaper,
  CustomButton,
  CustomTextField,
  CustomFormLabel,
} from '../base-kits';

const AllBooksLink = props => <Link to="/all-books" {...props} />;

class AddNewBookForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <PaddedPaper square>
            <Container p={32}>
              <form>
                <Grid container direction="row" spacing={32}>
                  <Grid item xs={6}>
                    <CustomTextField
                      id="title"
                      label="Title"
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="none"
                      fullWidth
                      autoFocus
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CustomTextField
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
                    <CustomTextField
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
                    <CustomTextField
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
                    <CustomTextField
                      id="book-description"
                      label="Book description"
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      multiline={true}
                      rows={5}
                      rowsMax={5}
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CustomTextField
                      id="book-cover"
                      label="Book cover"
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="none"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CustomTextField
                      id="categories"
                      label="Categories"
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      margin="normal"
                      mb={16}
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <CustomFormLabel component="legend">
                      Reading Status
                    </CustomFormLabel>
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
                        component={AllBooksLink}
                      >
                        Cancel
                      </CustomButton>
                      <Button variant="contained" color="primary" size="small">
                        Save
                      </Button>
                    </Container>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </PaddedPaper>
        </Grid>
      </Grid>
    );
  }
}

export default AddNewBookForm;

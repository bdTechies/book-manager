import React from 'react';
import { Grid } from '@material-ui/core';
import { PaddedPaper } from '../base-kits';

const BookPreviewCard = props => (
  <Grid item xs={6}>
    <PaddedPaper square minheight="330">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quos,
        adipisci, accusantium aut veniam eligendi tenetur, a recusandae maxime
        eum in, tempora incidunt blanditiis corporis! Nemo, fugiat laboriosam
        ipsam accusamus.
      </p>
    </PaddedPaper>
  </Grid>
);

export default BookPreviewCard;

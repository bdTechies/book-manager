import React from 'react';
import { Dialog, DialogContent, Typography } from '@material-ui/core';
import { Container } from '../base-kits';

const MessageDialog = props => (
  <Dialog open={props.open} onClose={props.close}>
    <DialogContent>
      <Container align="center">
        <Typography variant="h4">{props.emoji}</Typography>
        <Typography>{props.message}</Typography>
      </Container>
    </DialogContent>
  </Dialog>
);

export default MessageDialog;

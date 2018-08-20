import React from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar, AddNewBookForm } from '../components';

const AddNewBookPage = props => (
  <Container main>
    <MainMenu />
    <TopMenuBar pageTitle="Add Book" />
    <AddNewBookForm id={props.match.params.id} />
  </Container>
);

export default AddNewBookPage;

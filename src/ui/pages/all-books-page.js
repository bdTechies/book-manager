import React from 'react';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar } from '../components';
import { AllBooksContainer } from '../containers';

const AllBooksPage = () => (
  <Container main>
    <MainMenu />
    <TopMenuBar pageTitle="All Books" />
    <AllBooksContainer />
  </Container>
);

export default AllBooksPage;

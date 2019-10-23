import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../base-kits';
import { MainMenu, TopMenuBar, AddNewBookForm } from '../components';

const AddNewBookPage = props => {
  const { t } = useTranslation();

  return (
    <Container main>
      <MainMenu />
      <TopMenuBar
        pageTitle={
          props.match.params.id ? t('headers.editBook') : t('headers.addBook')
        }
      />
      <AddNewBookForm id={props.match.params.id} />
    </Container>
  );
};

export default AddNewBookPage;

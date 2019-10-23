import React from 'react';
import { useTranslation } from 'react-i18next';
import { Image, CustomTypography, Container } from '../base-kits';
import bmLogo from '../../assets/img/bm-logo-white.svg';

const WelcomePageLogo = () => {
  const { t } = useTranslation();
  return (
    <Container align="center">
      <Image src={bmLogo} width="150px" />
      <CustomTypography
        variant="h5"
        align="center"
        customcolor="#ffffff"
        customfont="Arima"
        mt="16px"
      >
        {t('tagline')}
      </CustomTypography>
    </Container>
  );
};

export default WelcomePageLogo;

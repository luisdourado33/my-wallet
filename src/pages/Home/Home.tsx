import React from 'react';

import { Container } from './home.styles';

import Navbar from 'components/organisms/Navbar';
import HeroSection from 'components/molecules/HeroSection';

const Home: React.FC<any> = ({
  children
}) => {

  return (
    <Container>
      <Navbar />
      <HeroSection 
        title='Just a title'
        description='Lorem Ipsum sit amet dolor i don"t know what I should to write here'
      />
    </Container>
  );
};

export default Home;
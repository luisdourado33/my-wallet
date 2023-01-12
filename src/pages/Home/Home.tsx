import React from 'react';

import { Container } from './home.styles';

import Navbar from 'components/organisms/Navbar';

const Home: React.FC<any> = ({
  children
}) => {

  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Home;
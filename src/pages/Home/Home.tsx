import React from 'react';

import { Container } from './home.styles';

const Home: React.FC<any> = ({
  children
}) => {

  return (
    <Container>
      <h1>Hello World!</h1>
    </Container>
  );
};

export default Home;
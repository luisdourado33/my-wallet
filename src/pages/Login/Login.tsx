import { Box } from '@chakra-ui/react';
import React from 'react';

import { Container, Content, ContentBox } from './login.styles';

const Login = () => {
  return (
    <Container
      alignItems='center'
      justifyContent='center'
    >
      <Content
        borderRadius='md'
        w='90%'
        h='90%'
      >
        <ContentBox
          id='login-box'
        >
          Login form here
        </ContentBox>
        <ContentBox
          id='featured'
          bgColor='teal'
          w='40%'
          h='100%'
        >
          <h1>My Wallet</h1>
          <p>Lorem Ipsum sit amet dolor</p>
        </ContentBox>
      </Content>
    </Container>
  );
};

export default Login;
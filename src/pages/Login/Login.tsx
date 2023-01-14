import React from 'react';

import { Container, ContentBox } from './login.styles';
import { useColorMode, Button, Text } from '@chakra-ui/react';

import BrandText from 'components/atoms/BrandText';
import LoginForm from 'components/organisms/LoginForm';

import { fadeIn } from 'utils/animations/keyframes';

const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <ContentBox
        w='50%'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <BrandText />
        <LoginForm />
        <Text fontSize='xx-small'>
          © My Wallet - 2023
        </Text>
      </ContentBox>
      <ContentBox
        w='50%'
        backgroundColor={colorMode == 'light' ? 'green.400' : 'green.500'}
        style={{
          borderRadius: '20% 49% 10% 78% / 86% 65% 10% 32%',
          
        }}
      >
        <Button onClick={toggleColorMode}>
          Toggle Color mode
        </Button>
      </ContentBox>
    </Container>
  );
};

export default Login;
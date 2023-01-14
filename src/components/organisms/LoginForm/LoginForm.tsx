import React from 'react';

import { Button, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import { Form } from './styles.modules';

import HighlightText from 'components/atoms/HighlightText/HighlightText';

const LoginForm = () => {
  return (
    <Form>
      <HighlightText>
        Welcome back
      </HighlightText>
      <Text mb='4'>
        Please enter your details.
      </Text>
      <FormControl mb='4' w='100%'>
        <FormLabel>E-mail</FormLabel>
        <Input type='email' placeholder='Ex: john.doe@email.com' />
        <FormHelperText>We'll never share your informations.</FormHelperText>
      </FormControl>
      <FormControl mb='4' w='100%'>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder='Your password' />
      </FormControl>
      <FormControl w='100%'>
        <Button w='100%' colorScheme='green'>
          Sign-in
        </Button>
      </FormControl>
    </Form>
  )
};

export default LoginForm;
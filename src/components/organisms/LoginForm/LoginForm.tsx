import React, { useRef } from 'react';

import { Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import { Form } from './styles.modules';

import HighlightText from 'components/atoms/HighlightText/HighlightText';

const LoginForm = () => {
  const formElement = useRef<any>(null);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    
    for (const element of formElement.current.elements) {
      console.log(element.value);
    }
  };


  return (
    <Form ref={formElement} onSubmit={handleFormSubmit}>
      <HighlightText>
        Welcome back
      </HighlightText>
      <Text mb='4'>
        Please enter your details.
      </Text>
      <FormControl mb='4' w='100%'>
        <FormLabel>E-mail</FormLabel>
        <Input name='email' type='email' placeholder='Ex: john.doe@email.com' required/>
        <FormHelperText>We'll never share your informations.</FormHelperText>
      </FormControl>
      <FormControl mb='4' w='100%'>
        <FormLabel>Password</FormLabel>
        <Input name='password' type='password' placeholder='Your password' required/>
      </FormControl>
      <FormControl 
        mb='4' 
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Checkbox size='sm'>Remember for 30 days</Checkbox>
        <Button variant='link' size='xs'>Forgot password</Button>
      </FormControl>
      <FormControl mb='4'>
        <Button w='100%' colorScheme='green' type='submit'>
          Sign-in
        </Button>
      </FormControl>
      <Flex>
        <Button variant='link' size='sm'>
          Don't have an account? Sign up
        </Button>
      </Flex>
    </Form>
  )
};

export default LoginForm;
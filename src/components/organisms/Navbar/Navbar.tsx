import React from 'react';

import { Header, FlexContainer } from './styles.modules';
import { Button, HStack, Text, useColorMode } from '@chakra-ui/react';

import NavItem from 'components/atoms/NavItem';

const menuItems = [
  { label: 'Home', variant: 'nav' },
  { label: 'About', variant: 'nav' },
  { label: 'Pricing', variant: 'nav' },
];

const callToActions = [
  { label: 'For companies', variant: 'nav' },
  { label: 'Sign-in', variant: 'solid' }
];

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const renderMenuItems = menuItems.map((item, index) => (
    <NavItem variant={item.variant} key={index} fontSize='sm'>{item.label}</NavItem>
  ));
  
  const renderCallToActions = callToActions.map((item, index) => (
    <Button color='teal' variant={item.variant ?? 'solid'} key={index} fontSize='sm'>{item.label}</Button>
  ))

  return (
    <Header position='fixed'>
      <FlexContainer 
        alignItems='center'
        justifyContent='space-between'
        paddingBlock='3'
      >
        <Text
          as='span'
          fontWeight='extrabold'
          letterSpacing='widest'
        >
          My Wallet
        </Text>
        <HStack as='nav' alignItems='center'>
          {renderMenuItems}
        </HStack>
        <HStack
          as='nav'
        >
          {renderCallToActions}
        </HStack>
        <Button onClick={toggleColorMode}>
          {colorMode == 'light' ? 'Light' : 'Dark'}
        </Button>
      </FlexContainer>
    </Header>
  );
};

export default Navbar;
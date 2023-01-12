import React from 'react';

import { Nav } from './styles.modules';
import { Button, Flex, HStack } from '@chakra-ui/react';

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
  const renderMenuItems = menuItems.map((item, index) => (
    <Button variant={item.variant} key={index}>{item.label}</Button>
  ));
  
  const renderCallToActions = callToActions.map((item, index) => (
    <Button colorScheme={'teal'} variant={item.variant ?? 'solid'} key={index}>{item.label}</Button>
  ))

  return (
    <Nav>
      <Flex w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between">
          <h1>Logo</h1>
          <HStack as='nav' spacing='5'>
            {renderMenuItems}
          </HStack>
          <HStack as='nav' spacing='5'>
            {renderCallToActions}
          </HStack>
      </Flex>
    </Nav>
  );
};

export default Navbar;
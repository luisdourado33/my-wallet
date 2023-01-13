import React from 'react';

import { Header, FlexContainer } from './styles.modules';
import { Button, HStack, Text, useColorMode } from '@chakra-ui/react';

import NavItem from 'components/atoms/NavItem';

const menuItems = [
  { label: 'Home', variant: 'nav' },
  { label: 'About', variant: 'nav' },
  { label: 'Pricing', variant: 'nav' },
];

interface PropsCTA {
  label: string;
  variant: 'solid' | 'outline' | 'ghost' | 'link' | 'nav';
  onClick?: any;
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const callToActions: Array<PropsCTA> = [
    { label: 'For companies', variant: 'nav' },
    { label: 'Sign-in', variant: 'solid' },
    { label: colorMode == 'dark' ? '🌚' : '🌞', variant: 'outline', onClick: toggleColorMode }
  ];

  const renderMenuItems = menuItems.map((item, index) => (
    <NavItem 
      variant={item.variant} 
      key={index} 
      fontSize='sm'
    >
      {item.label}
    </NavItem>
  ));
  
  const renderCallToActions = callToActions.map((item, index) => (
    <Button 
      key={index}
      color='teal' 
      variant={item.variant ?? 'solid'}
      onClick={item.onClick ?? (() => {})} 
      fontSize='sm'
    >
      {item.label}
    </Button>
  ))

  return (
    <Header>
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
      </FlexContainer>
    </Header>
  );
};

export default Navbar;
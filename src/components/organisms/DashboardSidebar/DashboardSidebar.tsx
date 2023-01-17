import React from 'react';

import BrandText from 'components/atoms/BrandText';

import { PhoneIcon, HamburgerIcon,  } from '@chakra-ui/icons';

import { Button, useColorMode, VStack } from '@chakra-ui/react';
import { Items, Sidebar } from './styles.modules';

const ITEMS = [
  { label: 'Statistics', icon: <HamburgerIcon mr='2'/> }
];

const DashboardSidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const renderItems = ITEMS.map(item => (
    <Button 
      w='100%'
      fontSize='sm'
    >
      {item.icon}
      {item.label}
    </Button>
  ));

  return (
    <Sidebar
      paddingBlock='4'
      paddingInline='3'
      justifyContent='space-between'
    >
      <VStack>
        <BrandText mb='8' />
        <Items
          w='100%'
          paddingInline='0'
        >
          {renderItems}
        </Items>
      </VStack>
      <Button 
        variant='link'
        fontSize='2xs'
        onClick={toggleColorMode}>Switch theme</Button>
    </Sidebar>
  );
};

export default DashboardSidebar;
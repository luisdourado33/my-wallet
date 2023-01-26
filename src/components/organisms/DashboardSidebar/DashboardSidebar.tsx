import React, { useEffect } from 'react';

import BrandText from 'components/atoms/BrandText';

import { EditIcon, HamburgerIcon, } from '@chakra-ui/icons';

import { Button, useColorMode, VStack } from '@chakra-ui/react';
import { Items, Sidebar } from './styles.modules';
import { useLocation } from 'react-router-dom';

const ITEMS = [
  { label: 'Dashboard', icon: <HamburgerIcon mr='2' /> },
  { label: 'Settings', icon: <EditIcon mr='2' /> },
];

const DashboardSidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  const currentPageLabel = (): string => {
    const currentLocation: string = location.pathname;

    const locations: any = {
      '/dashboard': 'Dashboard',
      '/settings': 'Settings'
    };

    return locations[currentLocation];
  };

  const renderItems = ITEMS.map((item, index) => (
    <Button
      key={index}
      w='100%'
      fontSize='sm'
      variant={currentPageLabel() == item.label ? 'solid' : 'outline'}
    >
      {item.icon}
      {item.label}
    </Button>
  ));

  useEffect(() => {
    console.log(location);
  });

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
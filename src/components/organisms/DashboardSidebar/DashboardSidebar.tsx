import React from 'react';

import BrandText from 'components/atoms/BrandText';

import { Button, useColorMode } from '@chakra-ui/react';
import { Items, Sidebar } from './styles.modules';

const ITEMS = [
  { label: 'Expenses' },
  { label: 'Billings' },
  { label: 'Calendar' }
];

const DashboardSidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const renderItems = ITEMS.map(item => (
    <Button 
      w='100%'
      fontSize='sm'
    >{item.label}</Button>
  ));

  return (
    <Sidebar
      paddingBlock='4'
      paddingInline='3'
      justifyContent='space-between'
    >
      <div>
      <BrandText mb='8' />
      <Items
        w='100%'
        paddingInline='0'
      >
        {renderItems}
      </Items>
      </div>
      <Button 
        variant='link'
        fontSize='2xs'
        onClick={toggleColorMode}>Switch theme</Button>
    </Sidebar>
  );
};

export default DashboardSidebar;
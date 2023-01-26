import React from 'react';

import { Flex } from '@chakra-ui/react';
import { Container, Content } from './styles.modules';

import { EdgeNavbarType } from 'components/organisms/DashboardEdgeNavbar/dashboardEdgeNavbar.types';
import { AddIcon, SearchIcon } from '@chakra-ui/icons';

import HeadingWithDescription from 'components/molecules/HeadingWithDescription';
import DashboardEdgeNavbar from 'components/organisms/DashboardEdgeNavbar';
import DashboardGridCard from 'components/organisms/DashboardGridCard/DashboardGridCard';

const DashboardHome = () => {
  const menuItems: EdgeNavbarType[] = [
    { label: 'Search', icon: <SearchIcon fontSize='2xs' />, color: 'teal', variant: 'outline', href: '/search', showLabel: false },
    { label: 'Add new', icon: <AddIcon marginRight={2} fontSize='2xs' />, color: 'teal', href: '/add-new', showLabel: true }
  ];

  return (
    <Container
      flexDirection='column'
    >
      <Flex
        w='100%'
        justifyContent='space-between'
      >
        <HeadingWithDescription
          title='Dashboard'
          description='Welcome, John!'
        />
        <DashboardEdgeNavbar
          items={menuItems}
        />
      </Flex>
      <Content>
        <DashboardGridCard />
      </Content>
    </Container>
  );
};

export default DashboardHome;
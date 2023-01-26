import React from 'react';

import DashboardSidebar from 'components/organisms/DashboardSidebar';

import { Outlet } from 'react-router-dom';
import { Container, Content } from './dashboard.styles';

const Dashboard = () => {
  return (
    <Container
      w='100%'
      h='100%'
    >
      <DashboardSidebar />
      <Content 
        id='content'
        w='100%'
        paddingBlock='15'
        paddingInline='7'
      >
        <Outlet />
      </Content>
    </Container>
  );
};

export default Dashboard;
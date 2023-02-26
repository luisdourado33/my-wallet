import React from "react";

import { Outlet } from "react-router-dom";
import { Container, Content } from "./dashboard.styles";

import DashboardSidebar from "components/organisms/DashboardSidebar";
import EventsTable from "components/organisms/EventsTable";

const Dashboard = () => {
  return (
    <Container w="100%" h="100%" p={"15px"}>
      <DashboardSidebar />
      <Content id="content" w="100%" paddingBlock="15" paddingInline="7">
        <Outlet />
      </Content>
      <EventsTable />
    </Container>
  );
};

export default Dashboard;

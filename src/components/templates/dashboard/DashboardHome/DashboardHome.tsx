import React from "react";

import {useAppSelector} from "../../../../hooks/context";

import {Flex} from "@chakra-ui/react";
import {Container, Content} from "./styles.modules";

import {EdgeNavbarType} from "components/organisms/DashboardEdgeNavbar/dashboardEdgeNavbar.types";
import {AddIcon, SearchIcon} from "@chakra-ui/icons";

import HeadingWithDescription from "components/molecules/HeadingWithDescription";
import DashboardEdgeNavbar from "components/organisms/DashboardEdgeNavbar";
import DashboardGridCard from "components/organisms/DashboardGridCard/DashboardGridCard";
import AddNewButton from "../../../molecules/AddNewButton";
import ListByCategory from "../../../organisms/ListByCategory";

const DashboardHome = () => {
  const authenticatedUser = useAppSelector(
    (state) => state.authenticatedUser.user
  );

  const menuItems: EdgeNavbarType[] = [
    {
      label: "Search",
      icon: <SearchIcon fontSize="2xs" />,
      color: "green",
      variant: "outline",
      href: "/search",
      showLabel: false,
    },
    {
      label: "Add new",
      icon: <AddIcon marginRight={2} fontSize="2xs" />,
      color: "green",
      href: "/add-new",
      showLabel: true,
      hasOwnComponent: true,
      ownComponent: <AddNewButton />,
    },
  ];

  return (
    <Container flexDirection="column">
      <Flex w="100%" justifyContent="space-between">
        <HeadingWithDescription
          title="Dashboard"
          description={`Welcome, ${authenticatedUser?.firstName}`}
        />
        <DashboardEdgeNavbar items={menuItems} />
      </Flex>
      <Content>
        <DashboardGridCard
          salary={authenticatedUser?.salary}
          walletRecords={authenticatedUser?.walletRecords}
        />
        <HeadingWithDescription
          title="Recent activities"
          description="List of recent expenses and incomes"
        />
        <ListByCategory walletRecords={authenticatedUser?.walletRecords}/>
      </Content>
    </Container>
  );
};

export default DashboardHome;

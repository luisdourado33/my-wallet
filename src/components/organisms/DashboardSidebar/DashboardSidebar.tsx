import React, { useEffect } from "react";

import BrandText from "components/atoms/BrandText";

import { HamburgerIcon } from "@chakra-ui/icons";

import { Button, useColorMode, VStack, Text } from "@chakra-ui/react";
import { Items, Sidebar } from "./styles.modules";
import { useLocation, useNavigate } from "react-router-dom";

const ITEMS = [
  {
    label: "Dashboard",
    destination: "/dashboard",
    icon: <HamburgerIcon mr="2" />,
  },
  {
    label: "Transactions",
    destination: "/dashboard/transactions",
    icon: <HamburgerIcon mr="2" />,
  },
  // { label: "Credit Cards", icon: <HamburgerIcon mr="2" /> },
  // { label: "Planning", icon: <HamburgerIcon mr="2" /> },
  // { label: "Accounts", icon: <HamburgerIcon mr="2" /> },
  // { label: "Reports", icon: <HamburgerIcon mr="2" /> },
  // { label: "More options", icon: <HamburgerIcon mr="2" /> },
  // { label: "Settings", icon: <EditIcon mr="2" /> },
];

const DashboardSidebar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const location = useLocation();
  const navigate = useNavigate();

  const currentPageLabel = (): string => {
    const currentLocation: string = location.pathname;

    const locations: any = {
      "/dashboard": "Dashboard",
      "/settings": "Settings",
      "/dashboard/transactions": "Transactions",
    };

    return locations[currentLocation];
  };

  const renderItems = ITEMS.map((item, index) => (
    <Button
      w="100%"
      key={index}
      fontSize="sm"
      size="sm"
      colorScheme="green"
      justifyContent="start"
      variant={currentPageLabel() == item.label ? "solid" : "link"}
      onClick={() => navigate(item.destination!)}
    >
      {item.icon}
      {item.label}
    </Button>
  ));

  useEffect(() => {
    console.log("Rendered");
  }, []);

  return (
    <Sidebar
      w="200px"
      paddingBlock="4"
      paddingInline="3"
      justifyContent="space-between"
    >
      <VStack>
        <BrandText mb="8" />
        <Items paddingInline="0">{renderItems}</Items>
      </VStack>
      <Button fontSize="xs" onClick={toggleColorMode}>
        Switch theme
      </Button>
    </Sidebar>
  );
};

export default DashboardSidebar;

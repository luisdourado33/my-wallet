import React, { useEffect } from "react";

import BrandText from "components/atoms/BrandText";

import { EditIcon, HamburgerIcon } from "@chakra-ui/icons";

import { Button, useColorMode, VStack } from "@chakra-ui/react";
import { Items, Sidebar } from "./styles.modules";
import { useLocation } from "react-router-dom";

const ITEMS = [
  { label: "Dashboard", icon: <HamburgerIcon mr="2" /> },
  // { label: "Transactions", icon: <HamburgerIcon mr="2" /> },
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

  const currentPageLabel = (): string => {
    const currentLocation: string = location.pathname;

    const locations: any = {
      "/dashboard": "Dashboard",
      "/settings": "Settings",
    };

    return locations[currentLocation];
  };

  const renderItems = ITEMS.map((item, index) => (
    <Button
      w="100%"
      key={index}
      fontSize="sm"
      size="sm"
      colorScheme="teal"
      justifyContent="start"
      variant={currentPageLabel() == item.label ? "solid" : "outline"}
    >
      {item.icon}
      {item.label}
    </Button>
  ));

  useEffect(() => {
    console.log('Rendered')
  }, []);

  return (
    <Sidebar paddingBlock="4" paddingInline="3" justifyContent="space-between">
      <VStack>
        <BrandText mb="8" />
        <Items w="100%" paddingInline="0">
          {renderItems}
        </Items>
      </VStack>
      <Button 
        fontSize='xs'
        onClick={toggleColorMode}
      >
        Switch theme
      </Button>
    </Sidebar>
  );
};

export default DashboardSidebar;

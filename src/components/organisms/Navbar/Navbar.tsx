import React from "react";
import { useNavigate } from "react-router-dom";

import { Header, FlexContainer } from "./styles.modules";
import { Button, HStack, useColorMode } from "@chakra-ui/react";

import NavItem from "components/atoms/NavItem";
import BrandText from "components/atoms/BrandText";

const menuItems = [
  { label: "Home", variant: "nav" },
  { label: "About", variant: "nav" },
  { label: "Pricing", variant: "nav" },
];

interface PropsCTA {
  label: string;
  variant: "solid" | "outline" | "ghost" | "link" | "nav";
  onClick?: any;
}

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const callToActions: Array<PropsCTA> = [
    { label: "For companies", variant: "nav" },
    { label: "Sign-in", variant: "solid", onClick: () => navigate("/login") },
    {
      label: colorMode == "dark" ? "🌚" : "🌞",
      variant: "outline",
      onClick: toggleColorMode,
    },
  ];

  const renderMenuItems = menuItems.map((item, index) => (
    <NavItem variant={item.variant} key={index} fontSize="sm">
      {item.label}
    </NavItem>
  ));

  const renderCallToActions = callToActions.map((item, index) => (
    <Button
      key={index}
      color="orange"
      variant={item.variant ?? "solid"}
      onClick={item.onClick ?? (() => {})}
      fontSize="sm"
    >
      {item.label}
    </Button>
  ));

  return (
    <Header>
      <FlexContainer
        alignItems="center"
        justifyContent="space-between"
        paddingBlock="3"
      >
        <BrandText />
        <HStack as="nav" alignItems="center">
          {renderMenuItems}
        </HStack>
        <HStack as="nav">{renderCallToActions}</HStack>
      </FlexContainer>
    </Header>
  );
};

export default Navbar;

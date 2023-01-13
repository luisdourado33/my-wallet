import React from "react";
import styled from "styled-components";

import { Button, ButtonProps } from "@chakra-ui/react";

const CustomButton = styled(Button)`
  &:hover {
    border-bottom: 1px ridge ${(props) => props.theme.colors.solid};
    border-radius: unset;
  }
`;

const NavItem: React.FC<ButtonProps> = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default NavItem;

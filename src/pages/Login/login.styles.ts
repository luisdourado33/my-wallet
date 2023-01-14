import styled from "styled-components";

import { Box, Flex, HStack } from "@chakra-ui/react";
import { theme } from "config/theme";
const { breakpoints } = theme;

export const Container = styled(Flex)`
  height: 100%;
`;

export const Content = styled(Flex)`
  background: ${({theme}) => theme.colors.light};

  @media (max-width: ${breakpoints.laptop}) {
    flex-direction: column;

    #login-box {}
    #featured {
      background-color: red;
      width: 100%;
    }
  }
  `;

export const ContentBox = styled(Box)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  padding: 30px;
`;
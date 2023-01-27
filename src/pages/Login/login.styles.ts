import styled from "styled-components";

import BrandText from "components/atoms/BrandText";
import { Box, Flex } from "@chakra-ui/react";
import { theme } from "config/theme";
import { fadeIn } from "utils/animations/keyframes";

const { breakpoints } = theme;

export const ContentBox = styled(Box)`
  animation: ${fadeIn} 1s linear;
`;

export const Container = styled(Flex)`
  height: 100%;

  ${ContentBox} {
    padding-inline: ${({ theme }) => theme.spacing.inline};
    padding-block: 20px;
  }

  @media (max-width: ${breakpoints.mobileL}) {
    ${ContentBox}:nth-child(1) {
      width: 100%;
      align-items: center;
    }
    ${ContentBox}:nth-child(2) {
      display: none;
    }
  } ;
`;

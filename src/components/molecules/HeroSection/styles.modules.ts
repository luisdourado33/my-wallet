import styled from "styled-components";

import { Container as ChakraContainer, Text, Flex } from "@chakra-ui/react";
import { fadeIn } from "utils/animations/keyframes";

export const Container = styled(Flex)`
  padding-inline: ${({ theme }) => theme.spacing.inline};
  // background-image: url("https://www.transparenttextures.com/patterns/blizzard.png");
`;

export const Title = styled(Text)`
  margin-bottom: 5px;
  transition: all 0.5s;
  border: 3px solid transparent;
  animation: ${fadeIn} 1s linear;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    line-height: 0.7;
    cursor: pointer;
    border-bottom: 3px solid ${({ theme }) => theme.colors.solid};
  }
`;

export const Description = styled(Text)`
  width: 50%;
`;

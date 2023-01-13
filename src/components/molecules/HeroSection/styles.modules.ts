import styled from "styled-components";

import { Container as ChakraContainer, Text, Flex } from "@chakra-ui/react";

export const Container = styled(Flex)`
  padding-inline: ${({ theme }) => theme.spacing.inline};
`;

export const Title = styled(Text)`
  margin-bottom: 5px;
  transition: all 0.5s;
  border: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.solid};
  }
`;

export const Description = styled(Text)`
  width: 50%;
`;

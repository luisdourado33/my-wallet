import styled from "styled-components";

import { Container as ChakraContainer, Text } from '@chakra-ui/react';

export const Container = styled.div`
  // background: ${({theme}) => theme.colors.solid};
  // color: #fff;
  padding-inline: 199px;
  align-items: center;
  justify-content: center;
  padding-block: 150px;
`;

export const Title = styled(Text)`
  margin-bottom: 5px;
`;

export const Description = styled(Text)`
  width: 50%;
`;
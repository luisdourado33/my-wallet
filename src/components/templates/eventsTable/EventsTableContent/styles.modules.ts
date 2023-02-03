import styled from "styled-components";

import { Flex } from "@chakra-ui/react";

export const Container = styled(Flex)`
  background: ${props => props.colorMode == 'light' ? 
  '#eee' :
  '#333'};
`;
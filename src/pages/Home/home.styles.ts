import styled from 'styled-components';

import * as ChakraUI from '@chakra-ui/react';

export const Container = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;

  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.solid};
`;
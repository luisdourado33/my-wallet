import styled from 'styled-components';

import { chakra, Flex } from '@chakra-ui/react';

export const Header = styled(chakra.header)`
  padding-inline: ${({theme}) => theme.spacing.inline};
  width: 100%;

  // background-color: rgba(255,255,255,0.9);
`;

export const FlexContainer = styled(Flex)`
`;
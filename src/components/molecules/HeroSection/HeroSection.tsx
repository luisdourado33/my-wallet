import { Box, HStack } from '@chakra-ui/react';
import React from 'react';

import { Container, Description, Title } from './styles.modules';

interface HeroProps {
  title: string;
  description: string;
};

const HeroSection: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <Container>
      <HStack
        justifyContent='space-between'
      >
        <Box>
          <Title 
            fontSize='5xl'
            fontWeight='bold'
          >
            {title}
          </Title>
          <Description
            fontSize='sm'
          >
            {description}
          </Description>
        </Box>
        <Box>
          <p>test</p>
        </Box>
      </HStack>
    </Container>
  );
};

export default HeroSection;
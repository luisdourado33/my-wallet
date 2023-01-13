import React from 'react';

import { Container, Description, Title } from './styles.modules';
import { Box, Button, HStack, Image } from '@chakra-ui/react';

import PersonalFinanceSVG from '../../../assets/personal-finance.svg';

interface HeroProps {
  title: string;
  description: string;
};

const HeroSection: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <Container
      w='100%'
    >
      <HStack
        w='100%'
        justifyContent='space-between'
      >
        <Box>
          <Title 
            fontSize='5xl'
            fontWeight='bold'
            w='70%'
            lineHeight='0.8'
          >
            {title}
          </Title>
          <Description
            fontSize='sm'
            mb='5'
          >
            {description}
          </Description>
          <Button variant='solid' colorScheme='teal'>Get started</Button>
        </Box>
        <Box boxSize='lg' alignItems='center' justifyContent='center' display='flex'>
          <Image 
            src={PersonalFinanceSVG}
            alt='Personal finance'
            w='100%'
            h='70%'
            style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
        </Box>
      </HStack>
    </Container>
  );
};

export default HeroSection;
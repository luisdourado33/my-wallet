import React from 'react';

import { Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  description: string;
}

const HeadingWithDescription: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <Heading 
        fontSize='2xl'
        fontWeight='extrabold'
      >{title}</Heading>
      <Text 
        fontWeight='thin'
        colorScheme='cyan'
      >{description}</Text>
    </div>
  );
};

export default HeadingWithDescription;
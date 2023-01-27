import React from "react";

import { Text } from "@chakra-ui/react";

const HighlightText: React.FC<any> = ({ children }) => {
  return (
    <Text as="h1" fontWeight="bold" fontSize="xl">
      {children}
    </Text>
  );
};

export default HighlightText;

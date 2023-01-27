import React from "react";

import { CardBody, CardHeader, Text, Heading } from "@chakra-ui/react";
import { CardContainer } from "./styles.modules";

const ValuesInfoCard = () => {
  return (
    <CardContainer>
      <CardHeader>
        <Heading size="sm" fontWeight="light">
          Balance
        </Heading>
        <Heading size="md">R$ 6.431,00</Heading>
      </CardHeader>

      <CardBody>
        <Text>There's not updates about your balance.</Text>
      </CardBody>
    </CardContainer>
  );
};

export default ValuesInfoCard;

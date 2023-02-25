import React from "react";

import { CardBody, CardHeader, Text, Heading } from "@chakra-ui/react";
import { CardContainer } from "./styles.modules";

const ValuesInfoCard = () => {
  return (
    <CardContainer cursor="pointer">
      <CardHeader>
        <Heading size="sm" fontWeight="light">
          Balance
        </Heading>
        <Heading size="md">R$ 2.000,00</Heading>
      </CardHeader>

      <CardBody>
        <Text>There's no updates about your balance.</Text>
      </CardBody>
    </CardContainer>
  );
};

export default ValuesInfoCard;

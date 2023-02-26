import React from "react";

import { CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { CardContainer } from "./styles.modules";

import { getFormattedCurrencyByCountry } from "../../../utils/currency/get-formatted-currency-by-country";

interface Props {
  salary: number;
}

const ValuesInfoCard = ({ salary = 0.0 }: Props) => {
  return (
    <CardContainer cursor="pointer">
      <CardHeader>
        <Heading size="sm" fontWeight="light">
          Balance
        </Heading>
        <Heading size="md">
          R$ {getFormattedCurrencyByCountry(salary, "BRA")}
        </Heading>
      </CardHeader>

      <CardBody>
        <Text>There's no updates about your balance.</Text>
      </CardBody>
    </CardContainer>
  );
};

export default ValuesInfoCard;

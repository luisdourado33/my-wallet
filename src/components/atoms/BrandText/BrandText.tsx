import React from "react";

import { Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BrandText = (props: any) => {
  const navigate = useNavigate();

  return (
    <Heading
      as="button"
      w="fit-content"
      size="md"
      letterSpacing="lowest"
      cursor="pointer"
      onClick={() => navigate("/")}
      {...props}
    >
      My Wallet
    </Heading>
  );
};

export default BrandText;

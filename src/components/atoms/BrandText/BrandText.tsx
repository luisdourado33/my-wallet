import React from "react";

import { Box, Heading, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { FaWallet } from "react-icons/fa";

const BrandText = (props: any) => {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      w={"100%"}
      alignItems={"center"}
      justifyContent={"start"}
      mb={5}
    >
      <Icon as={FaWallet} />
      <Heading
        as="h1"
        ml={2}
        size="sm"
        letterSpacing="lowest"
        cursor="pointer"
        onClick={() => navigate("/")}
        {...props}
      >
        My Wallet
      </Heading>
    </Box>
  );
};

export default BrandText;

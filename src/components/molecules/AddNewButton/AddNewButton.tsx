import React, { useCallback, useState } from "react";

import { Box, Button } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, Icon } from "@chakra-ui/icons";

import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch } from "../../../hooks/context";
import { addNewRecord } from "../../../context/public/authenticatedUserSlice";

import { RecordType } from "../../../lib/types/wallet-record.types";

const Container = styled(Box)``;
const CollapseContent = styled(Box)`
  z-index: 3;
  left: 10px;
`;

const AddNewButton = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleCollapse = useCallback(() => {
    setIsCollapsed((current) => !current);
  }, [isCollapsed]);

  const collapseOptions = [
    {
      label: "Expense",
      icon: FaMinus,
      onClick: () => {
        dispatch(
          addNewRecord({
            place: "Shopping Pantanal",
            description: "TV 55' Samsung",
            dateOfOccurrence: new Date(Date.now()),
            category: "Clothes and Dresses",
            value: 2400.0,
            type: RecordType.EXPENSE,
          })
        );
      },
      color: "",
      props: {},
    },
    {
      label: "Income",
      icon: FaPlus,
      onClick: () => {
        dispatch(
          addNewRecord({
            place: "Nubank",
            description: "Pix recebido",
            dateOfOccurrence: new Date(Date.now()),
            category: "Clothes and Dresses",
            value: 1000.0,
            type: RecordType.INCOME,
          })
        );
      },
      color: "",
      props: {},
    },
  ];

  const renderCollapseOptions = collapseOptions?.map((option, index) => (
    <Button
      key={index}
      backgroundColor={option.color ?? "green.400"}
      w="100%"
      mb={1}
      size="sm"
      leftIcon={<Icon as={option.icon} {...option.props} />}
      onClick={option.onClick}
    >
      {option.label}
    </Button>
  ));

  return (
    <Container position="relative">
      <Button
        colorScheme="whatsapp"
        alignItems="center"
        onClick={handleCollapse}
      >
        {isCollapsed ? <ChevronUpIcon /> : <ChevronDownIcon />}
        <span style={{ marginLeft: 5 }}>Add New</span>
      </Button>
      {isCollapsed && (
        <CollapseContent
          position="absolute"
          mt="2"
          borderRadius="5"
          colorScheme="whatsapp.100"
        >
          {renderCollapseOptions}
        </CollapseContent>
      )}
    </Container>
  );
};

export default AddNewButton;

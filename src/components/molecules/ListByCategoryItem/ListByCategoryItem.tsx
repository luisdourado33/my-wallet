import React from "react";
import { Info, Item } from "./styles.modules";

import {
  Avatar,
  AvatarBadge,
  Box,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";

import {
  RecordType,
  WalletRecord,
} from "../../../lib/types/wallet-record.types";
import { FaMinus, FaPlus } from "react-icons/fa";
import { getOccurenceDate } from "../../../utils/dates/handle-date";
import { getWalletRecordIcon } from "utils/wallet-item/get-item-info";

interface Props {
  walletRecord: WalletRecord;
}

const ListByCategoryItem: React.FC<Props> = (props: Props) => {
  return (
    <Item
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"}
      px={"5px"}
      py={"10px"}
      mb={2}
      cursor={"pointer"}
    >
      <Box display={"flex"} alignItems={"center"} w={"50%"}>
        <Avatar
          size={"sm"}
          bg={"gray"}
          icon={<Icon as={getWalletRecordIcon(props.walletRecord.type)} />}
          mr={2}
        >
          <AvatarBadge
            boxSize="1.25em"
            bg={props.walletRecord.type === RecordType.INCOME ? "green" : "red"}
          />
        </Avatar>

        <Info>
          <Heading size={"sm"}>{props.walletRecord.place}</Heading>
          <Text fontSize={"12px"} color={"blackAlpha"}>
            {props.walletRecord.description}
          </Text>
        </Info>
      </Box>

      <Box w="100px">
        <Text color={"gray"} fontSize={"12"}>
          {getOccurenceDate(props.walletRecord.dateOfOccurrence)}
        </Text>
      </Box>

      <Box w="100px" display="flex" justifyContent={"flex-start"}>
        <Text color={"blackAlpha"} fontSize={"12"} fontWeight={"bold"}>
          {props.walletRecord.category}
        </Text>
      </Box>

      <Box w="100px" display={"flex"} justifyContent={"flex-end"}>
        <Text
          color={
            props.walletRecord.type === RecordType.INCOME ? "green" : "red"
          }
          fontWeight={"bold"}
        >
          {props.walletRecord.type === RecordType.INCOME ? "+" : "-"} R${" "}
          {props.walletRecord.value}
        </Text>
      </Box>
    </Item>
  );
};

export default ListByCategoryItem;

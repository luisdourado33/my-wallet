import React from "react";

import ListByCategoryItem from "../../molecules/ListByCategoryItem";

import { List } from "./styles.modules";
import { WalletRecord } from "../../../lib/types/wallet-record.types";

interface Props {
  walletRecords: WalletRecord[];
}

const ListByCategory = (data: Props) => {
  const renderListItems = data.walletRecords?.map((item, index) => (
    <ListByCategoryItem key={index} walletRecord={item} />
  ));

  return <List display="block">{renderListItems}</List>;
};

export default ListByCategory;

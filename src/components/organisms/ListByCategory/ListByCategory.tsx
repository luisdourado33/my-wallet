import React from "react";

import ListByCategoryItem from "../../molecules/ListByCategoryItem";

import { List } from "./styles.modules";
import { RecordType, WalletRecord } from "../../../types/wallet-record.types";

const ListByCategory = () => {
  const walletRecordsMock: WalletRecord[] = [
    {
      place: "Comper",
      description: "Pão de queijo e suco",
      dateOfOccurrence: new Date(Date.now()),
      category: "Food and Drinks",
      value: 150.0,
      type: RecordType.EXPENSE,
    },
    {
      place: "Shopping Pantanal (Aramis)",
      description: "Roupas na Aramis",
      dateOfOccurrence: new Date(Date.now()),
      category: "Clothes",
      value: 1500.0,
      type: RecordType.EXPENSE,
    },
    {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
        {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
        {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
        {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
        {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
        {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
        {
      place: "Paytrack",
      description: "Reembolso cadeira",
      dateOfOccurrence: new Date(Date.now()),
      category: "Income",
      value: 500.0,
      type: RecordType.INCOME,
    },
  ];

  const renderListItems = walletRecordsMock.map((item, index) => (
    <ListByCategoryItem key={index} walletRecord={item} />
  ));

  return <List display="block">{renderListItems}</List>;
};

export default ListByCategory;

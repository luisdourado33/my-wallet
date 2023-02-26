import React from "react";

import { Container } from "./styles.modules";

import ValuesInfoCard from "components/molecules/ValuesInfoCard/ValuesInfoCard";
import {WalletRecord} from "../../../lib/types/wallet-record.types";

interface Props {
  salary: number;
  walletRecords: WalletRecord[];
}
const DashboardGridCard = (financialData: Props) => {
  return (
    <Container marginBottom="4">
      <ValuesInfoCard salary={financialData.salary}/>
    </Container>
  );
};

export default DashboardGridCard;

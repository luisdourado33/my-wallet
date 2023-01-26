import React from "react";

import { Container } from "./styles.modules";

import ValuesInfoCard from "components/molecules/ValuesInfoCard/ValuesInfoCard";

const DashboardGridCard = () => {
  return (
    <Container marginBottom='4'>
      <ValuesInfoCard />
      <ValuesInfoCard />
      <ValuesInfoCard />
    </Container>
  );
};

export default DashboardGridCard;
import React from "react";

import { EdgeNavbarType } from "./dashboardEdgeNavbar.types";
import { Button, Container } from "./styles.modules";
import { HStack } from "@chakra-ui/react";

interface Props {
  items: EdgeNavbarType[];
}

const DashboardEdgeNavbar: React.FC<Props> = ({ items }) => {
  const renderItems = items.map((item, index) => {
    if (item.hasOwnComponent) {
      return <div key={index}>{item.ownComponent}</div>;
    }

    return (
      <Button
        key={index}
        colorScheme={item.color}
        variant={item.variant ?? "solid"}
      >
        {item.icon ?? ""}
        {item.showLabel ? item.label : ""}
      </Button>
    );
  });

  return (
    <Container alignItems="center">
      <HStack>{renderItems}</HStack>
    </Container>
  );
};

export default DashboardEdgeNavbar;

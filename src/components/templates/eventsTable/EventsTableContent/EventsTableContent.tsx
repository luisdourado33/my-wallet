import React from "react";

import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ColorMode,
  Card,
  Heading,
  Text,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const EventsTableContent = () => {
  return (
    <Card p="15px">
      <Tabs w="230px" variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab fontSize="xs">Expenses</Tab>
          <Tab fontSize="xs">Incomes</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>A expense list here</p>
          </TabPanel>
          <TabPanel>
            <p>An income list here</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Card>
  );
};

export default EventsTableContent;

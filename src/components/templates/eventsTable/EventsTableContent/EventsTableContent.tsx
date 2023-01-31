import React from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Container } from "./styles.modules";

const EventsTableContent = () => {
    return (
        <Container>
            <Tabs 
                variant='soft-rounded' 
                colorScheme='green'
            >
                <TabList>
                    <Tab fontSize='xs'>Expenses</Tab>
                    <Tab fontSize='xs'>Incomes</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    );
};

export default EventsTableContent;
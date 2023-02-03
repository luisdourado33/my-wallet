import React from 'react';

import { Tabs, TabList, Tab, TabPanels, TabPanel, ColorMode, Card, Heading, Text } from "@chakra-ui/react";

const EventsTableContent = () => {
    return (
        <Card p='15px'>
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
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Card>
    );
};

export default EventsTableContent;
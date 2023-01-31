import React from 'react';

import { Container } from './styles.modules';

import EventsTableContent from 'components/templates/eventsTable/EventsTableContent';

const EventsTable = () => {
    return (
        <Container
            p='15px'
        >
            <EventsTableContent />
        </Container>
    );
};

export default EventsTable;
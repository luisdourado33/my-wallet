import React, {useCallback, useState} from 'react';

import {Box, Button} from '@chakra-ui/react';
import {AddIcon} from "@chakra-ui/icons";

import styled from "styled-components";

const Container = styled(Box)``;
const CollapseContent = styled(Box)`
  z-index: 3;
`;

const AddNewButton = () => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const handleCollapse = useCallback(() => {
		setIsCollapsed(current => !current)
	}, [isCollapsed]);

	return (
		<Container position='relative'>
			<Button
				colorScheme='whatsapp'
				alignItems='center'
				onClick={handleCollapse}
			>
				<AddIcon/>
				<span style={{marginLeft: 5}}>
					Add New
				</span>
			</Button>
			{isCollapsed && (
				<CollapseContent
					position='absolute'
					p='15'
					mt='2'
					borderRadius='5'
					colorScheme='whatsapp'
					backgroundColor='green.100'
				>
					<h1>Collapse is open</h1>
				</CollapseContent>
			)}
		</Container>
	);
};

export default AddNewButton
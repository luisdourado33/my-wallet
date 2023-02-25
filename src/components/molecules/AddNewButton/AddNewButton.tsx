import React, {useCallback, useState} from 'react';

import {Box, Button} from '@chakra-ui/react';
import {AddIcon, Icon} from "@chakra-ui/icons";

import styled from "styled-components";
import {FaMinus, FaPlus} from "react-icons/fa";

const Container = styled(Box)``;
const CollapseContent = styled(Box)`
  z-index: 3;
  left: 10px;
`;

const AddNewButton = () => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const handleCollapse = useCallback(() => {
		setIsCollapsed(current => !current)
	}, [isCollapsed]);

	const collapseOptions = [
		{
			label: 'Expense',
			icon: FaMinus,
			onClick: () => {
				console.log('Expense add')
			},
			color: '',
			props: {}
		},
		{
			label: 'Income',
			icon: FaPlus,
			onClick: () => {
			},
			color: '',
			props: {}
		},
	];

	const renderCollapseOptions = collapseOptions?.map((option, index) => (
		<Button key={index} backgroundColor={option.color ?? 'green.400'} w='100%' mb={1} size='sm'
		        leftIcon={<Icon as={option.icon} {...option.props} />}
		onClick={option.onClick}
		>
			{option.label}
		</Button>
	));

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
					mt='2'
					borderRadius='5'
					colorScheme='whatsapp.100'
				>
					{renderCollapseOptions}
				</CollapseContent>
			)}
		</Container>
	);
};

export default AddNewButton
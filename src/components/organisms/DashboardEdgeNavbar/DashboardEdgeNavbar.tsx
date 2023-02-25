import React from "react";

import {EdgeNavbarType} from "./dashboardEdgeNavbar.types";
import {Button, Container} from "./styles.modules";
import {HStack} from "@chakra-ui/react";

interface Props {
	items: EdgeNavbarType[];
}

const DashboardEdgeNavbar: React.FC<Props> = ({items}) => {
	const renderItems = items.map((item, index) => {
		return (
			<>
				{item.hasOwnComponent ? (
					<>
						{item.ownComponent}
					</>
				) : (
					<Button
						key={index}
						colorScheme={item.color}
						variant={item.variant ?? "solid"}
					>
						{item.icon ?? ""}
						{item.showLabel ? item.label : ""}
					</Button>
				)}
			</>
		);
	});

	return (
		<Container alignItems="center">
			<HStack>{renderItems}</HStack>
		</Container>
	);
};

export default DashboardEdgeNavbar;

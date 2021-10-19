import React from "react";
import { Badge, Skeleton } from "@chakra-ui/react"
import { Text, HStack } from "@chakra-ui/layout";

const RoverCardData = ({label, value, loading}) => {
	return (
		<HStack>
			<Text fontSize="sm"> {label}:</Text>
			<Skeleton isLoaded={!loading} startColor="red.500" endColor="blue.500" minW={100}>
				<Badge>{value}</Badge>
			</Skeleton>
		</HStack>
	)
}

export default RoverCardData;
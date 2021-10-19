import React from 'react';
import { Center, Text } from '@chakra-ui/react';

const NoResults = () => {
	return (
		<Center h={400} w="100%">
			<Text color="gray.500" fontSize={["20px", "30px"]} align="center"> No matches for this search </Text>
		</Center>
	)
}

export default NoResults;
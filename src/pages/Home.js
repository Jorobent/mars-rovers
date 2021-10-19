import React from 'react';
import { Flex, Text  } from '@chakra-ui/react';
import RoverCard from '../components/RoversCards';
import { ROVER_VERSIONS } from '../configs';

const Home = () => {
	return (
		<>
			<Text align={"center"}> Click on a ROVER </Text>
			<Flex direction={["column", "row"]} justify={"space-around"} align={"center"}>
				{ROVER_VERSIONS.map(rover => {
					return (
						<RoverCard key={rover} rover={rover} />
					)
				})}
			</Flex>
		</>
	)
};

export default Home;
import React, { useEffect } from "react";
import { Image } from "@chakra-ui/image";
import { Link } from "react-router-dom";

import { Spinner, Divider, Center, Badge, Skeleton } from "@chakra-ui/react"
import { Box, Stack, Text, Heading, HStack } from "@chakra-ui/layout";
import useFetch from '../hooks/useFetch';
import Opportunity from '../images/Opportunity.jpg';
import Spirit from '../images/Spirit.jpg';
import Curiosity from '../images/Curiosity.jpg'
import { NASA_API_URL, NASA_API_KEY } from '../configs';
import RoverCardData from "./RoverCardData";

const images = {
	'Opportunity': Opportunity,
	'Spirit': Spirit,
	'Curiosity': Curiosity
}

const RoversCard = ({ rover }) => {
	const url = `${NASA_API_URL}/manifests/${rover}/?api_key=${NASA_API_KEY}`;
	const {data, loading, error} = useFetch({url});
	
	return (
		<Box w={[260, 400]} m={2} rounded="20px" bgGradient="linear(to-r, teal.50, red.100)" overflow="hidden" cursor="pointer">
			<Link to={`/search/${rover}/`}>
				<Image w={"100%"} src={images[rover]} alt={rover} />
			</Link>
			<Heading color="black" align="center" as="h4" fontSize={"16px"} p={2}>{rover}</Heading>
			<Stack p={2}>
				<RoverCardData label={"Launch date"} value={data?.photo_manifest.launch_date} loading={loading}/>
				<Divider/>
				<RoverCardData label={"Landing date"} value={data?.photo_manifest.landing_date} loading={loading}/>
				<Divider/>
				<RoverCardData label={"Status"} value={data?.photo_manifest.status} loading={loading}/>
				<Divider/>
				<RoverCardData label={"Total photos"} value={data?.photo_manifest.total_photos} loading={loading}/>
			</Stack>
		</Box>
	)
}

export default RoversCard;
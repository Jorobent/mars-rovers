import React from "react";
import { Image } from "@chakra-ui/image";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react"
import { Box, Stack, Heading } from "@chakra-ui/layout";
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
	const {data, loading} = useFetch({url});
	
	return (
		<Box 
			w={260}
			m={2}
			rounded="10px"
			cursor="pointer"
			boxShadow="2xl"
			overflow="hidden"
			transition="box-shadow .2s"
			_hover={{
				boxShadow: "md"
			}}>
			<Link to={`/search/${rover}/`}>
				<Image w={"100%"} src={images[rover]} alt={rover} />
			<Heading align="left" as="h4" fontSize={"16px"} p={3}>{rover}</Heading>
			<Stack p={3}>
				<RoverCardData h={10} label={"Launch date"} value={data?.photo_manifest.launch_date} loading={loading}/>
				<Divider/>
				<RoverCardData label={"Landing date"} value={data?.photo_manifest.landing_date} loading={loading}/>
				<Divider/>
				<RoverCardData label={"Status"} value={data?.photo_manifest.status} loading={loading}/>
				<Divider/>
				<RoverCardData label={"Total photos"} value={data?.photo_manifest.total_photos} loading={loading}/>
			</Stack>
			</Link>
		</Box>
	)
}

export default RoversCard;
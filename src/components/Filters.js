import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import CustomSelect from './CustomSelect';
import { CURIOSITY_CAMERAS, SPIRIT_OPPORTUNITY_CAMERAS, ROVER_VERSIONS } from '../configs';
import { useLocation, useHistory, useParams } from 'react-router';
import DateFilter from './DateFilter'

const Filters = ({onSubmit}) => {
	const { rover } = useParams();
	const { search } = useLocation();
	const history = useHistory();

	const camerasByRover = rover === 'Curiosity' ? CURIOSITY_CAMERAS : SPIRIT_OPPORTUNITY_CAMERAS;

	const updateSearch = ({name, value}) => {
		const params = new URLSearchParams(search);
		params.set(name, value);
		if(name === "earth_date") {
			params.delete("sol")
		} else if(name === "sol") {
			params.delete("earth_date")
		}
		params.set("page", 1); // return to page 1 for new searches
		history.push({search: params.toString()})
		onSubmit && onSubmit();
	}
	
	const updateRoute = ({value}) => {
		history.push(`/search/${value}`)
		onSubmit && onSubmit();
	}

	return(
		<VStack minW={250} p={2} spacing={5} align="start">
			<Text fontSize={["25px", null]}>Filter by:</Text>

			<CustomSelect
				type={"Rovers"}
				options={ROVER_VERSIONS}
				onChange={ ({target}) => updateRoute({value: target.value || "Curiosity"})}
			/>

			<CustomSelect
				type={"Cameras"}
				options={camerasByRover}
				onChange={ ({target}) => updateSearch({value: target.value.toLowerCase(), name: "camera"})}
			/>
			
			<DateFilter onDateApply={({date, type}) => updateSearch({value: date, name: type })}/>

		</VStack>
	)
}

export default Filters;
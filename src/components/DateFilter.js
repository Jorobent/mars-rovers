import React, {useRef, useState} from 'react';
import { Stack, VStack, RadioGroup, Input, Radio, Button, Text } from '@chakra-ui/react';

const DateFilter = ({onDateApply}) => {
	const [dateType, setDateType] = useState("earth_date");
	
	const solRef = useRef();
	const dateRef = useRef();

	
	const handleSearch = () => {
		const dateValue = dateType === "earth_date" ? dateRef.current.value : solRef.current.value;
		console.log(dateValue);
		if(dateValue.trim() === '') {
			alert("You need to add a value");
		} else {
			onDateApply({date: dateValue, type: dateType});
		}
	}

	const handleRadioChange = (e) => {
		setDateType(e)
	}

	return (
		<VStack spacing={2} m={10}>
			
			<Text> Select and filter by date </Text>
			
			<RadioGroup onChange={handleRadioChange} defaultValue={dateType}>
				<Stack spacing={5} direction="row">
					<Radio colorScheme="blue" value="sol">
						by Sol
					</Radio>
					<Radio colorScheme="blue" value="earth_date">
						by Date
					</Radio>
				</Stack>
			</RadioGroup>

			{dateType === "earth_date"
				? <Input ref={dateRef} type="date" placeholder="Enter date" />
				: <Input ref={solRef} type="num" placeholder="Enter Sol year"/>
			}

			<Button onClick={handleSearch}>Search</Button>

		</VStack>
	)
}

export default DateFilter;
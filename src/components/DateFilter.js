import React, {useRef, useState, useEffect} from 'react';
import { Stack, VStack, Input, Button, Text } from '@chakra-ui/react';

const radioStyles = {
	width: "20px",
	height: "20px"
}
const labelStyles = {
	fontSize: "12px"
}

const DateFilter = ({onDateApply}) => {
	const [dateType, setDateType] = useState("earth_date");
	const [invalid, setInvalid] = useState("");
	const solRef = useRef();
	const dateRef = useRef();

	useEffect(() => {
		dateType === 'sol' ? solRef.current?.focus(): dateRef.current?.focus();
	}, [dateType])
	
	const handleSearch = () => {
		const dateValue = dateType === "earth_date" ? dateRef.current.value : solRef.current.value;
		if(dateValue.trim() === '' || (dateType === "sol" && isNaN(dateValue))) {
			setInvalid(dateType);
			alert("You must enter a valid date");
		} else {
			onDateApply({date: dateValue, type: dateType});
		}
	}

	const handleRadioChange = (e) => {
		setDateType(e.target.value);
	}

	return (
		<VStack p={2} spacing={2} m={40} align="start" justify="start">
			
			<Text> Select and filter by date </Text>
			
			{dateType === "earth_date"
				? <Input isInvalid={invalid === dateType} ref={dateRef} type="date" placeholder="Enter date" />
				: <Input isInvalid={invalid === dateType} ref={solRef} type="num" placeholder="Enter Sol year"/>
			}
			
			<Stack spacing={5} direction="row">
				<VStack>
					<input style={radioStyles} type="radio" id="sol" name={'date'} value="sol" onChange={handleRadioChange}/>
					<label style={labelStyles} htmlFor="sol">By Sol</label>
				</VStack>
				<VStack>
					<input style={radioStyles} type="radio" id="earth_date" name={'date'} value="earth_date" onChange={handleRadioChange}/>
					<label style={labelStyles} htmlFor="earth_date">By Earth Date</label>
				</VStack>
			</Stack>

			<Button colorScheme="blue" onClick={handleSearch}>Apply date</Button>

		</VStack>
	)
}

export default DateFilter;
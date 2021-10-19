import React from 'react';
import { Select } from "@chakra-ui/react"

const CustomSelect = ({options, onChange, type}) => {
	return (
		<Select m={2} placeholder={`Select ${type}`} onChange={ onChange }>
			{options.map((option) => {
				return <option key={option} value={option}>{option}</option>
			})}
		</Select>
	)
};

export default CustomSelect;
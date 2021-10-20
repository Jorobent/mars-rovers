import React from 'react';
import { Button, useDisclosure, SlideFade, Box } from "@chakra-ui/react";
import { FaFilter, FaAngleDown } from 'react-icons/fa';
import Filters from '../components/Filters';

const MobileFiltersButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button
				size="lg"
				leftIcon={<FaFilter fontSize={"18px"}/>}
				position="fixed"
				p={2}
				bottom={20}
				right={10}
				zIndex={2}
				color="white"
				bg="green.500"
				onClick={onOpen}
			> Filter </Button>

			{isOpen &&
				<SlideFade in={isOpen} offsetY="20px" style={{ zIndex: 10, position: "fixed", bottom: 0,left: 0,  width: "100%"}}>
					<Box
						bg="gray.100"
						color="black"
						positoin="relative"
						rounded="md">
						<Filters onSubmit={onClose}/>
					</Box>
					<FaAngleDown
						onClick={onClose}
						style={{
							color:"black",
							position: "absolute",
							top: "10px",
							right: "10px",
							fontSize: "30px",
							width: "30px",
							height: "30px"
						}}/>
				</SlideFade>
			}
		</>
	)
};

export default MobileFiltersButton;
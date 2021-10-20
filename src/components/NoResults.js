import React from 'react';
import { Center, Text, Button, Stack, HStack, TagLabel, TagCloseButton, Tag } from '@chakra-ui/react';
import { useHistory } from 'react-router';
import useSearch from '../hooks/useSearch';

const NoResults = () => {
	const history = useHistory();
	const { rover, searchData } = useSearch();

	return (
		<Center h={600} w="100%" direction="column">
			<Stack>
				<Text color="gray.500" fontSize={["20px", "30px"]} align="center"> No matches for this search </Text>

				<HStack spacing={4}>
						<Tag
							size={ "md"}
							borderRadius="full"
							variant="solid"
							colorScheme="blue"
							>
							<TagLabel>{rover}</TagLabel>
						</Tag>
						{searchData.sol &&
							<Tag
								size={ "md"}
								borderRadius="full"
								variant="solid"
								colorScheme="blue"
								>
								<TagLabel>Sol date: {searchData.sol}</TagLabel>
							</Tag>
						}
						{searchData.earth_date &&
							<Tag
								size={ "md"}
								borderRadius="full"
								variant="solid"
								colorScheme="blue"
								>
								<TagLabel>Earth date: {searchData.earth_date}</TagLabel>
							</Tag>
						}
						{searchData.page &&
							<Tag
								size={ "md"}
								borderRadius="full"
								variant="solid"
								colorScheme="blue"
								>
								<TagLabel>Page: {searchData.page}</TagLabel>
							</Tag>
						}
				</HStack>

				<Button onClick={history.goBack}>Go Back</Button>
			</Stack>
		</Center>
	)
}

export default NoResults;
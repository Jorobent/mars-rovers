import React, {useEffect, useState} from 'react';
import { Flex, useMediaQuery, Center, Spinner, Text, Stack } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';
import NoResults from '../components/NoResults';
import PhotosList from '../components/PhotosList';
import Filters from '../components/Filters';
import MobileFiltersButton from '../components/MobileFiltersButton';

const Search = () => {
	const [isSmallView] = useMediaQuery("(max-width: 720px)")
	const { url, rover } = useSearch();
	const {data, loading, error} = useFetch({url});
	const [photosList, setPhotosList] = useState([]);

	useEffect(() => {
		data?.photos && setPhotosList(data.photos);
	}, [data]);

	return (
		<>
			<Text align="center" fontSize="20px">{`${rover} photos`}</Text>
			<Flex direction={["column", "row" ]} justify={"flex-start"} p={2}>
				{ isSmallView
					? <MobileFiltersButton/>
					: <Filters/>
				}
				
				<Stack flexGrow="1" position="relative">
					{ loading &&
						<Center p={2} h={[600, "100%"]} width="100%" position="absolute" bg="gray.200" opacity=".4">
							<Spinner
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="blue.500"
								size="xl"
							/>
						</Center>
					}
					
					{ photosList && data &&
						<>
							{ photosList.length > 0
								? <PhotosList photos={photosList} loading={loading} />
								: !loading && <NoResults/>
							}
						</>
					}

					{error &&
						<Center h={400} w="100%">
							<Text color="red.500" fontSize={["25px", "40px"]} align="center">
								Something went wrong
							</Text>
							<Text color="red.500" fontSize={["20px", "30px"]} align="center">
								{error.code}
								{error.message}
							</Text>	
						</Center>
					}
				</Stack>
			</Flex>
		</>
	)
};

export default Search;
import React, {useEffect, useState} from 'react';
import { Flex, useMediaQuery, Center, Spinner, Text } from '@chakra-ui/react';

import useFetch from '../hooks/useFetch';
import useSearch from '../hooks/useSearch';
import NoResults from '../components/NoResults';
import PhotosList from '../components/PhotosList';
import Filters from '../components/Filters';

const Search = () => {
	const [isSmallView] = useMediaQuery("(max-width: 720px)")
	const { url, rover, page } = useSearch();
	const {data, loading, error} = useFetch({url});
	const [photosList, setPhotosList] = useState([]);

	useEffect(() => {
		// alert(page)
		data?.photos && setPhotosList(prevPhotosList => !page ? [...prevPhotosList, ...data.photos] : data.photos);
	}, [data, page]);

	return (
		<>
			<Text align="center" fontSize="20px">{`${rover} photos`}</Text>
			<Flex direction="row" justify={"flex-start"} p={2}>
				{ !isSmallView && 
					<Filters/>
				}
				
				{ loading && !data &&
					<Center p={2} h={400} width={"100%"}>
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="blue.500"
							size="xl"
							m="auto"
						/>
					</Center>
				}
				
				{ photosList && data &&
					<>
						{ photosList.length > 0
							? <PhotosList photos={photosList} loading={loading} />
							: <NoResults/>
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
			</Flex>
		</>
	)
};

export default Search;
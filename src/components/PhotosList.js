import React from 'react';
import { Wrap, WrapItem, Center, Spinner } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { FaPlus } from 'react-icons/fa'
import { useLocation, useHistory } from 'react-router';

const PhotosList = ({photos, loading}) => {
	const { search } = useLocation();
	const history = useHistory();

	const handleMorePhotos = () => {
		const params = new URLSearchParams(search);
		const currentPage = params.get("page");
		const newPage = currentPage ? Number(currentPage) + 1 : 2;
		params.set("page", newPage);
		history.push({search: params.toString()})
	};

	return (
		<Wrap overflow={"hidden"} justify="center" align="center" spacing="12px" p={2}>
			{photos.map((photo) => {
				return (
					<WrapItem key={photo.id}>
						<Image 
							src={photo.img_src}
							alt={photo.title}
							objectFit="cover"
							boxSize={[300, 200]}
							borderRadius={10}
						/>
					</WrapItem>
				)
			})}
			{photos.length > 0 &&
				<WrapItem
					key={"morePhotos"}
					onClick={ handleMorePhotos }
					background="gray.200"
					borderRadius={10}
					cursor="pointer"
					_hover={{background: "gray.300"}}
				>
					<Center
						boxSize={[300, 200]}
						borderRadius={10}
						color="gray.500"
					>
						{loading
							? <Spinner
								thickness="4px"
								speed="0.65s"
								emptyColor="gray.200"
								color="blue.500"
								size="md"
							/>
							: <FaPlus fontSize={"40px"}/>
						}
					</Center>
				</WrapItem>
			}
		</Wrap>
	)
};

export default PhotosList;
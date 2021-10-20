import React, { useState } from 'react';
import { Wrap, WrapItem, useDisclosure, Button } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { useLocation, useHistory } from 'react-router';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const PhotosList = ({photos, loading}) => {
	const { search } = useLocation();
	const history = useHistory();
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedPhoto, setSelectedPhoto] = useState(null);

	const handleMorePhotos = () => {
		const params = new URLSearchParams(search);
		const currentPage = params.get("page");
		const newPage = currentPage ? Number(currentPage) + 1 : 2;
		params.set("page", newPage);
		history.push({search: params.toString()})
	};

	const handleFullScreen = (id) => {
		setSelectedPhoto(id);
		onOpen();
	}

	
	return (
		<>	
			{isOpen &&
				<Lightbox
					images={photos.map(({img_src}) => ({url: img_src}))}
					startIndex={photos.findIndex(({id}) => id === selectedPhoto)}
					onClose={onClose}
					allowZoom
					/>
			}
			<Wrap overflow={"hidden"} justify="center" align="center" spacing="12px" p={[null,"2"]} paddingBottom={["60px", "60px"]}>
				{photos.map((photo, i) => {
					return (
						<WrapItem key={photo.id}>
							<Image 
								src={photo.img_src}
								alt={photo.title}
								objectFit="contain"
								borderRadius={10}
								boxSize={["100%", 150]}
								cursor="pointer"
								onClick={ () => handleFullScreen(photo.id)}
							/>
						</WrapItem>
					)
				})}
				{photos.length > 0 &&
					<Button
						colorScheme="blue"
						size="lg"
						width={["100%", 150]}
						position="absolute"
						bottom={0}
						color="white"
						isLoading={loading}
    					loadingText="Loading..."
						onClick={handleMorePhotos}>
						Load more!
					</Button>
				}
			</Wrap>
		</>
	)
};

export default PhotosList;
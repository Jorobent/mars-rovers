import {Flex, Heading} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<Flex justify="space-between" p={2}>
			<Link to="/">
				<Heading as="h1" size="lg" letterSpacing={"tighter"}>
					Mars Rover Photos
				</Heading>
			</Link>
         	<ColorModeSwitcher justifySelf="flex-end" />
		</Flex>
	)
}

export default Header;
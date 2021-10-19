import {Flex, Heading} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Header = (props) => {
	return (
		<Flex justify="space-between" p={2}>
			<Heading as="h1" size="lg" letterSpacing={"tighter"}>
				Mars Rover Photos
			</Heading>
         	<ColorModeSwitcher justifySelf="flex-end" />
		</Flex>
	)
}

export default Header;
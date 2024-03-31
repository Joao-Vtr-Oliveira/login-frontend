import Home from '@/PagesComponents/Home';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
	return (
		<Box
			h='100vh'
			bg={'black'}
			textColor={'white'}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Home />
		</Box>
	);
}

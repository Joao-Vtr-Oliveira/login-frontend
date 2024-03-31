'use client';

import { Card, CardBody, CardHeader, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Home = () => {
	return (
		<Flex align='center' justify='center' height='100vh' w='80%'>
			<Card
				w={['83.333333%', '83.333333%', '83.333333%', '83.333333%', '40%']}
				h={['40%']}
			>
				<CardHeader
					display='flex'
					flexDirection='column'
					alignItems='center'
					justifyContent='center'
				>
					<Heading>Home</Heading>
				</CardHeader>
				<CardBody display='flex' alignItems='center' justifyContent='center'>
					<Link href={'/sign-in'}>
						<Heading
							fontSize={'25'}
							mr={10}
							textColor={'#570FA0'}
							_hover={{ textDecorationLine: 'underline' }}
						>
							Login
						</Heading>
					</Link>
					<Link href={'/sign-up'}>
						<Heading
							fontSize={'25'}
							textColor={'#570FA0'}
							_hover={{ textDecorationLine: 'underline' }}
						>
							Register
						</Heading>
					</Link>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default Home;

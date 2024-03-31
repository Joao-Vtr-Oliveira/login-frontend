'use client';

import { Button, Card, CardBody, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const handleSignIn = () => {
		console.log('SignIn');
	};

	return (
		<Flex align='center' justifyContent='center' height='full' width='full'>
			<Card
				bg={'black'}
				textColor={'white'}
				w={['80%', '80%', '80%', '80%', '40%']}
			>
				<CardBody>
					<Flex flexDirection='column' gap='10' padding='5'>
						<Input
							value={email}
							placeholder='Email'
							type='email'
							required
							onChange={handleEmailChange}
						/>
						<Input
							value={password}
							placeholder='Password'
							required
							onChange={handlePasswordChange}
							type='password'
						/>
						<Button
							onClick={handleSignIn}
							colorScheme='teal'
							isDisabled={!(!!email && !!password)}
						>
							Sign In
						</Button>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default SignIn;

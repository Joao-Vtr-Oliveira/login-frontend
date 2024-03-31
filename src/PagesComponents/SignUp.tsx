'use client';

import { Button, Card, CardBody, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const handleSignUp = () => {
		console.log('SignUp');
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
							onClick={handleSignUp}
							colorScheme='yellow'
							isDisabled={!(!!email && !!password)}
						>
							Sign Up
						</Button>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default SignUp;

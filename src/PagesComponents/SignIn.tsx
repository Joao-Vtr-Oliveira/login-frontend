'use client';

import { login } from '@/requests/script';
import { emailTester, passwordTester } from '@/utils/regexTester';
import {
	Button,
	Card,
	CardBody,
	Flex,
	Input,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const toast = useToast();

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const handleSignIn = async () => {
		if (email === '' || password === '')
			return alert('Please, fill all the camps');
		let errorToast;
		let infoToast;
		if (!emailTester(email)) {
			return (errorToast = toast({
				title: 'Invalid Email',
				description: 'Please, write a valid email',
				status: 'warning',
				duration: 5000,
				isClosable: true,
			}));
		}
		if (!passwordTester(password)) {
			return (errorToast = toast({
				title: 'Invalid password',
				description:
					'The password must have: 8 characters, one lowercase letter, one uppercase letter and one digit',
				status: 'warning',
				duration: 5000,
				isClosable: true,
			}));
		}
		console.log('SignIn');
		try {
			const data = await login({ email, password });
			if (data.status === 'ok') {
				return toast({
					title: 'Login success',
					description: 'OK!',
					status: 'success',
					duration: 3000,
					isClosable: true,
				});
			}
			toast({
				title: 'User not found',
				description: 'please, check the email and password',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
			console.log(data);
		} catch (error) {
			console.log('fudeu');
			if (errorToast) {
				toast.close(errorToast);
			}
			toast({
				title: 'Error',
				description: 'An error have ocurred!',
				status: 'error',
				duration: 5000,
				isClosable: true,
			});
		}
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
							placeholder='example@example.com'
							type='email'
							required
							onChange={handleEmailChange}
						/>
						<Input
							value={password}
							placeholder='Example1'
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

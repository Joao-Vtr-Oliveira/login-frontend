'use client';

import { login } from '@/requests/script';
import { emailTester, passwordTester } from '@/utils/regexTester';
import toastHelper from '@/utils/toastHelper';
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

	const handleSignIn = async () => {
		if (email === '' || password === '') return alert('Please, fill all the camps');
		if (!emailTester(email)) return toast(toastHelper('email'));
		if (!passwordTester(password)) return toast(toastHelper('password'));
		
		try {
			const data = await login({ email, password });
			if (data.status === 'ok') return toast(toastHelper('success'));
			toast(toastHelper('404'));
			console.log(data);
		} catch (error) {
			console.log('fudeu');
			toast(toastHelper('error'));
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
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							value={password}
							placeholder='Example1'
							required
							type='password'
							onChange={(e) => setPassword(e.target.value)}
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

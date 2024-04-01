'use client';

import { request } from '@/requests/script';
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

type paramsType = { type: 'login' | 'register' };

const Auth = ({ type }: paramsType) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const toast = useToast();

	const handleBtnClick = async () => {
		if (email === '' || password === '')
			return alert('Please, fill all the camps');
		if (!emailTester(email)) return toast(toastHelper('email'));
		if (!passwordTester(password)) return toast(toastHelper('password'));
		try {
			const data = type === 'login' ? await request({ requestType: 'login', email, password }) : await request({ requestType: 'register', email, password });
			if (data.status === 'ok') return type === 'login' ? toast(toastHelper('loginSuccess')) : toast(toastHelper('registerSuccess'));
			type === 'login' ? toast(toastHelper('404')) : toast(toastHelper('409'));
			console.log(data);
		} catch (error) {
			toast(toastHelper('error'));
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') handleBtnClick();
	}

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
							onKeyDown={handleKeyPress}
						/>
						<Input
							value={password}
							placeholder='Example1'
							required
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							onKeyDown={handleKeyPress}
						/>
						<Button
							onClick={handleBtnClick}
							colorScheme={(type === 'login' ? 'teal': 'yellow')}
							isDisabled={!(!!email && !!password)}
						>
							{type === 'login' ? 'Sign in' : 'Sign up'}
						</Button>
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
};

export default Auth;

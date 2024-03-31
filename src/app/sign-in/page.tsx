import SignIn from '@/PagesComponents/SignIn';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sign In',
	description: 'Login Page',
};

const SignInPage = () => {
	return (
		<Box
			h='100vh'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<SignIn />
		</Box>
	);
};

export default SignInPage;

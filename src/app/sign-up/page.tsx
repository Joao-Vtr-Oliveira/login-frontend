import SignUp from '@/PagesComponents/SignUp';
import { Box } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sign Up',
	description: 'Register Page',
};

const SignUpPage = () => {
	return (
		<Box
			h='100vh'
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<SignUp />
		</Box>
	);
};

export default SignUpPage;

type info = 'email' | 'password' | 'success' | 'error' | '404';

type toastType = {
  title: string;
  description: string;
  status: 'warning' | 'success' | 'error';
  duration: number;
  isClosable: boolean;
}

const toastHelper = (info: info): toastType => {
	if (info === 'email') {
		return {
			title: 'Invalid Email',
			description: 'Please, write a valid email',
			status: 'warning',
			duration: 5000,
			isClosable: true,
		};
	} else if (info === 'password') {
		return {
			title: 'Invalid password',
			description:
				'The password must have: 8 characters, one lowercase letter, one uppercase letter and one digit',
			status: 'warning',
			duration: 5000,
			isClosable: true,
		};
	} else if (info === 'success') {
		return {
			title: 'Login success',
			description: 'OK!',
			status: 'success',
			duration: 3000,
			isClosable: true,
		};
	} else if (info === '404') {
		return {
			title: 'User not found',
			description: 'please, check the email and password',
			status: 'error',
			duration: 3000,
			isClosable: true,
		};
	} else {
		return {
			title: 'Error',
			description: 'An error have ocurred!',
			status: 'error',
			duration: 5000,
			isClosable: true,
		};
	}
};

export default toastHelper;

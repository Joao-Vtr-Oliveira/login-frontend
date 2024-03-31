import { loginReturn } from '@/types/loginReturn';

export const ping = async () => {
	try {
		const response = await fetch('http://localhost:80/ping/');
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(`Error: `, error);
		return null;
	}
};

export const login = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	const formData = new URLSearchParams();
	formData.append('email', email);
	formData.append('password', password);
	try {
		const response = await fetch('http://localhost:80/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		});
		const data = await response.json();
		return data as loginReturn;
	} catch (error) {
		console.log(`Error: `, error);
    throw new Error('Ocorreu um erro durante a solicitação');
	}
};

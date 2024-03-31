import { AuthReturn } from '@/types/AuthReturn';

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

export const request = async ({
  requestType,
	email,
	password,
}: {
  requestType: 'login' | 'register';
	email: string;
	password: string;
}): Promise<AuthReturn> => {
	const formData = new URLSearchParams();
	formData.append('email', email);
	formData.append('password', password);
	try {
		const response = await fetch(`http://localhost:80/user/${requestType}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		});
		const data: AuthReturn = await response.json();
		return data
	} catch (error) {
		console.log(`Error: `, error);
		throw new Error('Ocorreu um erro durante a solicitação');
	}
};
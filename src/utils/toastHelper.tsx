type info = 'email' | 'password' | 'loginSuccess' | 'registerSuccess' | 'error' | '404' | '409';

type toastType = {
  title: string;
  description: string;
  status: 'warning' | 'success' | 'error';
  duration: number;
  isClosable: boolean;
}

const toastHelper = (info: info): toastType => {
  let finalToast: toastType = {
    title: 'Title',
    description: 'Description',
    status: 'success',
    duration: 5000,
    isClosable: true
  };

  switch (info) {
    case 'email':
      finalToast.title = 'Invalid Email';
      finalToast.description = 'Please, write a valid email';
      finalToast.status = 'warning';
      break;
    case 'password':
      finalToast.title = 'Invalid password';
      finalToast.description = 'The password must have: 8 characters, one lowercase letter, one uppercase letter and one digit';
      finalToast.status = 'warning';
      break;
    case 'loginSuccess':
      finalToast.title = 'Login success';
      finalToast.description = 'OK!';
      finalToast.status = 'success';
      finalToast.duration = 3000;
      break;
    case 'registerSuccess':
      finalToast.title = 'Register success';
      finalToast.description = 'New user created!';
      finalToast.status = 'success';
      finalToast.duration = 3000;
      break;
    case '404':
      finalToast.title = 'User not found';
      finalToast.description = 'please, check the email and password';
      finalToast.status = 'error';
      break;
    case '409':
      finalToast.title = 'User already exists';
      finalToast.description = 'please, check the email and password';
      finalToast.status = 'error';
      finalToast.duration = 3000;
      break;
    default:
      finalToast.title = 'Error!';
      finalToast.description = 'An error have ocurred';
      finalToast.status = 'error';
  }

	return finalToast;
};

export default toastHelper;

import regexInfo from './regex'

export const emailTester = (email: string) => {
  return regexInfo.email.test(email);
}

export const passwordTester = (password: string) => {
  return regexInfo.password.test(password);
}
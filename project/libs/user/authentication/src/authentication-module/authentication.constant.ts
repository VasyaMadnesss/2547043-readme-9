export const AUTH_USER_EXISTS = 'User with exact email already exists.';
export const AUTH_USER_NOT_FOUND = 'User not found';
export const AUTH_USER_PASSWORD_WRONG = 'User password is incorrect';

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  LoggedError: 'Password or login is incorrect.',
  UserFound: 'User found.',
  UserNotFound: 'User not found.',
  UserExist: 'User with exact email already exists.',
  UserCreated: 'User has been successfully created.',
} as const;

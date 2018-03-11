import {USER_AUTH, USER_UNAUTH} from './user-const';

export const userAuth = (user: any) => ({
  type: USER_AUTH,
  payload: user
});
export const userUnAuth = () => ({
  type: USER_UNAUTH
});

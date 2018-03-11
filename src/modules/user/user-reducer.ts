import {USER_AUTH, USER_UNAUTH} from './user-const';
import {IUserAction, IUserState} from './user-types';

const userInitialState: IUserState = {
  isAuth: false
};

export const user = (state: IUserState = userInitialState, action: IUserAction) => {
  switch (action.type) {
    case USER_AUTH:
      return {
        isAuth: true,
      };

    case USER_UNAUTH:
      return {
        isAuth: false,
      };

    default:
      return state;
  }
};
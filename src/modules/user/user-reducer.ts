import {IUserAction, IUserState} from './user-types';

const userInitialState: IUserState = {
  isAuth: false
};

export const user = (state: IUserState = userInitialState, action: IUserAction) => {
  switch (action.type) {

    default:
      return state;
  }
};
import {Action} from 'redux';

export interface IUserState {
  isAuth: boolean;
}

export interface IUserAction extends Action {
  payload: any;
}
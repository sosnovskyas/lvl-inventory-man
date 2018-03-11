import {Action} from 'redux';

export interface IGoodsItem {
  name: string;
  key: string;
}

export interface IGoodsState {
  isLoading: boolean;
  list: IGoodsItem[];
}

export interface IGoodsAction extends Action {
  payload: any;
}
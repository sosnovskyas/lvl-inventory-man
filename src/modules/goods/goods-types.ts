import {Action} from 'redux';

export interface IGoodsItem {
  name: string;
  key: string;
  images: {
    [key: string]: string;
  },
  description: string;
}

export interface IGoodsState {
  isLoading: boolean;
  list: IGoodsItem[];
  new: IGoodsItem;
}

export interface IGoodsAction extends Action {
  payload: any;
}
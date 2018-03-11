import {GOODS_FEATCH} from './goods-constants';
import {IGoodsAction, IGoodsItem, IGoodsState} from './goods-types';
import {toArray, forIn} from 'lodash';

const goodsInitialState: IGoodsState = {
  list: [],
  isLoading: true
};

export const goods = (state: IGoodsState = goodsInitialState, action: IGoodsAction) => {
  switch (action.type) {

    case GOODS_FEATCH: {
      let list: IGoodsItem[] = [];

      forIn(action.payload, (item, index) => {
        list.push({
          ...item,
          key: index
        })
      });

      return {
        ...state,
        isLoading: false,
        list
      };
    }

    default:
      return state;
  }
};
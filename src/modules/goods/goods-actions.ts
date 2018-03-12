import {GOODS_FEATCH, GOODS_NEW_CHANGE} from './goods-constants';
import {IGoodsItem} from './goods-types';

export const goodsFeatch = (goods: { [key: string]: IGoodsItem }) => ({
  type: GOODS_FEATCH,
  payload: goods
});

export const goodsNewChange = (good: Partial<IGoodsItem>) => ({
  type: GOODS_NEW_CHANGE,
  payload: good
});

import {GOODS_FEATCH} from './goods-constants';

export const goodsFeatch = (goods: any) => ({
  type: GOODS_FEATCH,
  payload: goods
});

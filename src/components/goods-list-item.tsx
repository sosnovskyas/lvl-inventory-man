import * as React from 'react';
import {IGoodsItem} from '../modules/goods/goods-types';

export const GoodsListItem = (props: { item: IGoodsItem }) => {
  const {item} = props;
  return (
    <li>
      <h3>{item.name}</h3>
      <div>key: {item.key}</div>
    </li>
  )
};
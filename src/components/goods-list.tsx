import * as React from 'react';
import {IGoodsItem} from '../modules/goods/goods-types';
import {GoodsListItem} from './goods-list-item';

export const GoodsList = (props: any) => {
  const {isLoading, list} = props.goods;

  if (isLoading !== undefined && isLoading) {
    return (
      <ul>
        <span>loading...</span>
      </ul>
    );
  } else if (list !== undefined && list) {
    return (
      <ul>
        {list.map((item: IGoodsItem, index: string) => <GoodsListItem key={item.key} item={item}/>)}
      </ul>
    );
  } else {
    return (<span>%(</span>)
  }

};
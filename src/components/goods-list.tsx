import * as React from 'react';
import {IGoodsItem} from '../modules/goods/goods-types';
import {GoodsListItem} from './goods-list-item';

export const GoodsList = (props: any) => {
  const {isLoading, list} = props.goods;

  if (isLoading !== undefined && isLoading) {
    return (
      <div>loading...</div>
    );
  } else if (list !== undefined && list) {
    return (list.map((item: IGoodsItem) => <GoodsListItem key={item.key} item={item}/>))
  } else {
    return (<span>%(</span>)
  }

};
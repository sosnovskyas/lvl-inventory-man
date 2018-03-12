import * as React from 'react';
import {IGoodsItem, IGoodsState} from '../modules/goods/goods-types';
import {GoodsListItem} from './goods-list-item';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Checkbox,
  Tooltip
} from 'material-ui';

interface IGoodsListPros {
  goods: IGoodsState;
  onItemClick(key: string): void;
}

export const GoodsList = (props: IGoodsListPros) => {
  const {isLoading, list} = props.goods;

  if (isLoading !== undefined && isLoading) {
    return (
      <div>loading...</div>
    );
  } else if (list !== undefined && list) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Наименование</TableCell>
            <TableCell>Описание</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((item: IGoodsItem) => <GoodsListItem key={item.key} item={item} click={props.onItemClick}/>)}
        </TableBody>
      </Table>
    );
  } else {
    return (<span>%(</span>)
  }
};
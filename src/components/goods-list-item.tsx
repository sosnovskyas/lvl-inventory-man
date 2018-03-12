import * as React from 'react';
import {values} from 'lodash';
import {IGoodsItem} from '../modules/goods/goods-types';
import {
  TableCell,
  TableRow
} from 'material-ui';

const ImagesList = (props: { list: { [key: string]: string } }) => {
  const {list} = props;
  const style: React.CSSProperties = {
    height: 150,
    padding: 10
  };

  return (
    <React.Fragment>
      {values(list).map((url: string, index: number) => <img key={index} src={url} alt={url} style={style}/>)}
    </React.Fragment>
  );
};

interface IGoodsListItemProps {
  item: IGoodsItem;
  click(key: string): void;
}

export const GoodsListItem = (props: IGoodsListItemProps): React.ReactElement<IGoodsListItemProps> => {
  const {key, description, name} = props.item;

  return (
    <TableRow onClick={() => props.click(key)}>
      <TableCell>{key}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
    </TableRow>
  );
};
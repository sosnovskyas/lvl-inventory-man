import * as React from 'react';
import {values} from 'lodash';
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from 'material-ui';
import {IGoodsItem} from '../modules/goods/goods-types';

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

export const GoodsListItem = (props: { item: IGoodsItem }) => {
  const {item} = props;

  return (
    <Card>
      <CardContent>
        <Typography variant="headline" component="h2">{item.name}</Typography>
        <Typography component="p">{item.desctiption}</Typography>
      </CardContent>
      {/*<CardMedia
        src={item.imageUrl}
        title={item.imageUrl}
      >qwe</CardMedia>*/}
      <ImagesList list={item.images}/>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
};
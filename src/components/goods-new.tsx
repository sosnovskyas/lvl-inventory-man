import * as React from 'react';
import {IAppState} from '../app';
import {connect, DispatchProp, Dispatch} from 'react-redux';
import {
  Button,
  TextField
} from 'material-ui';
import {Goods} from '../modules/db';
import {random} from 'lodash';
import {goodsNewChange} from '../modules/goods/goods-actions';
import {ChangeEvent} from 'react';
import {IGoodsItem} from '../modules/goods/goods-types';

type TGoodsNewProps = IGoodsItem & { history: any; dispatch: Dispatch<void> };

class GoodsNew extends React.Component<TGoodsNewProps> {
  constructor(props: any) {
    super(props);
    console.log('GoodsNew', props);
  }

  private sendNew = (): void => {
    Goods.push({
      name: this.props.name,
      description: this.props.description
    })
      .then(() => this.props.history.push({pathname: '/'}));
  };

  private _onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    this.props.dispatch(goodsNewChange({
      [event.target.id]: event.target.value
    }));
  };

  public render() {
    return (
      <React.Fragment>

        <Button onClick={this.sendNew}>create</Button>
        <TextField
          id="name"
          label="Намиенование"
          value={this.props.name}
          onChange={this._onChange}
          margin="normal"
        />
        <TextField
          id="description"
          label="Описание"
          value={this.props.description}
          onChange={this._onChange}
          margin="normal"
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({...state.goods.new});

export const ConnsectedGoodsNew = connect(mapStateToProps)(GoodsNew);

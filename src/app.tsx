import * as React from 'react';
import {random} from 'lodash'
import {connect, Dispatch, Store, DispatchProp} from 'react-redux'
import {GoodsList} from './components/goods-list';
import {Goods} from './modules/db';
import {goodsFeatch} from './modules/goods/goods-actions';
import {Button} from 'material-ui';
import {IGoodsState} from './modules/goods/goods-types';
import {IUserState} from './modules/user/user-types';

export interface IAppState {
  goods: IGoodsState;
  user: IUserState;
}

interface IAppProps extends DispatchProp<any> {
  goods: IGoodsState;
  user: IUserState;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    console.log('AppPops', props);
  }

  private create() {
    Goods.push({name: `${random(1, 10)}`});
  }

  public componentWillMount() {
    Goods.on('value', (snapshot: any) => {
      this.props.dispatch(goodsFeatch(snapshot.val()));
    })
  }

  public render() {
    return (
      <React.Fragment>
        <Button onClick={() => this.create()}>create</Button>
        <GoodsList goods={this.props.goods} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: IAppState) => state;

export const ConnectedApp = connect(mapStateToProps)(App);
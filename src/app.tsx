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
  history: any;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    console.log('AppPops', props);
  }

  private onItemClick = (key: string): void => {
    this.props.history.push({pathname: `/goods/${key}`});
  };

  public componentWillMount() {
    Goods.on('value', (snapshot: any) => {
      this.props.dispatch(goodsFeatch(snapshot.val()));
    })
  }

  public render() {
    return (
      <React.Fragment>
        <GoodsList goods={this.props.goods} onItemClick={this.onItemClick}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: IAppState) => state;

export const ConnectedApp = connect(mapStateToProps)(App);
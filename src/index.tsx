import * as React from 'react';
import {render} from 'react-dom';
import {ConnectedApp} from './app';
import {ConnectedGoodsItem} from './components/goods-item';
import {ConnsectedGoodsNew} from './components/goods-new';
import {store} from './modules/store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import {Button} from 'material-ui';

export const root = document.querySelector('#lvl-inventory-man');

render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <Button>
          <NavLink to="/">Home</NavLink>
        </Button>
        <Button>
          <NavLink to="/new">[NEW]</NavLink>
        </Button>

        <Route exact path="/" component={ConnectedApp}/>
        <Route exact path="/new" component={ConnsectedGoodsNew}/>
        <Route exact path="/goods/:key" component={ConnectedGoodsItem}/>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  root
);

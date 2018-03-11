import * as React from 'react';
import {render} from 'react-dom';
import {ConnectedApp} from './app';
import {configureStore} from './modules/store';
import {Provider} from 'react-redux';

const store = configureStore();
const root = document.querySelector('#lvl-inventory-man');

render(
  <Provider store={store}><ConnectedApp /></Provider>,
  root
);

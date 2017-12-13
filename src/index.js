// Polyfill for window.fetch() from Github
import 'whatwg-fetch'
import 'babel-polyfill';

import '../node_modules/semantic-ui-css/semantic.css';
import choo from 'choo';
import {isFunction} from 'jquery';

import setupState from './setupState';
import setupEmitter from './setupEmitter';

import viewManager from './viewManager';

const cart = choo();

cart.use((state, emitter) => {
  state = setupState(state);

  emitter.on('DOMContentLoaded', () => {
    setupEmitter(state, emitter);
  });
});

cart.route('*', viewManager);

cart.mount('#cart');

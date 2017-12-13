import html from 'choo/html';
import onload from 'on-load';

import Cart from '../controllers/Cart';

export default (state, emit) => {
  const controller = new Cart(state);

  const view = html`<div class="cart">
    test example!
  </div>`

  // Demo of onload
  onload(view, () => console.log('opened example view screen'), () => console.log('closed example view screen'));

  return view;
}
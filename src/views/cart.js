import html from 'choo/html';
import onload from 'on-load';

import Cart from '../controllers/Cart';

export default (state, emit) => {
  const controller = new Cart(state);

  const view = html`<div class="cart">
    Cart
  </div>`

  // Demo of onload
  onload(view, () => console.log('opened cart screen'), () => console.log('closed cart screen'));

  return view;
}
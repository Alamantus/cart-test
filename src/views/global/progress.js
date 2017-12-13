import html from 'choo/html';
import onload from 'on-load';

import Progress from '../../controllers/global/Progress';

export default (state, emit) => {
  const controller = new Progress(state);

  const view = html`<div class="ui stackable steps">
    <div class="step">
      Review Cart
    </div>
    <div class="step">
      Choose Shipping
    </div>
    <div class="step">
      Add Payment
    </div>
    <div class="step">
      Confirm Order
    </div>
  </div>`

  return view;
}
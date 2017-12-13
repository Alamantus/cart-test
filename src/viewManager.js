import html from 'choo/html';

import progressView from './views/global/progress';
import cartView from './views/cart';

export default (state, emit) => {
  // In viewManager all we are doing is checking the app's state
  // and passing the state and emit to the relevant view.
  let htmlContent = html`<div>loading</div>`;
  switch (state.currentView) {
    case 'cart':
    default: {
      htmlContent = cartView(state, emit);
      break;
    }
  }

  return html`<div id="cart">

    ${ progressView(state, emit) }

    <div class="main-section">
      ${ htmlContent }
    </div>

  </div>`;
}
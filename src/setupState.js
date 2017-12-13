export default (state) => {
  state.currentView = 'cart';
  state.cartContents = [];

  // As long as a controller correctly extends controllers/view.js
  // it will add its view's state to this object.
  state.viewStates = {};

  return state;
}
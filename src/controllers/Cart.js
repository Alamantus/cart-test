import View from './View';

export default class Cart extends View {
  constructor (state) {
    // Super passes state, view name, and default state to ViewController,
    // which stores state in this.appState and the view controller's state to this.state
    super(state, 'cart', {});

    // If using controller methods in an input's onchange or onclick instance like this one's is,
    // either bind the class's 'this' instance to the method first...
    // or use `onclick=${() => controller.submit()}` to maintain the 'this' of the class instead.
  }
}
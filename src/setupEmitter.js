export default (state, emitter) => {
  emitter.on('render', callback => {
    // This is a dirty hack to get the callback to call *after* re-rendering.
    if (callback && isFunction(callback)){
      setTimeout(() => {
        callback();
      }, 50);
    }
  });

  emitter.on('change view', newView => {
    state.currentView = newView;
    emitter.emit('render'); // This is how you update the display after changing state!
  });
}
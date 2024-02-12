
import { init } from 'snabbdom';


function createComponent(template, initialState, mountedCallback) {
  const patch = init([]);

  let state = initialState;

  function updateState(newState) {
    state = { ...state, ...newState };
    render();
  }

  function render() {
    const newVNode = template(state);
    patch(oldVNode, newVNode);
    oldVNode = newVNode;
  }

  let oldVNode = template(state);
  mountedCallback();
  render();

  return {
    updateState
  };
}

export { createComponent };

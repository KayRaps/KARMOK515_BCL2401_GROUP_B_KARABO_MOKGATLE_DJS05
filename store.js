// Reducer function that takes the current state and an action and returns the new state
const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'ADD':
        return { count: state.count + 1 };
      case 'SUBTRACT':
        return { count: state.count - 1 };
      case 'RESET':
        return { count: 0 };
      default:
        return state;
    }
  };

  // Defining the store object that hass three methods: getState, dispatch, and subscribe.
  const store = {

    // The getState nethid returns the current state.
    getState: () => state,

    // The dispatch method takes an action and updates the state
    dispatch: (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    },

    // The subscribe method to take a listener function and add.
    subscribe: (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter((l) => l !== listeners);
        };
    },
  };

  // Initialize the state and the array of listeners.
  let state = {};
  const listeners = [];

  // Dispatched two ADD actions to increment the count to 2.store.dispatch({ type: 'ADD '};
    store.dispatch({ type: 'ADD '});
    store.dispatch({ type: 'ADD '});
    console.log(store.getState());

 // Subscribed to the store and log a message whenever the state changes.
 store.subscribe(() => {
    console.log('State')
 });
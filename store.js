// Store class to manage state
class Store {
    // Constructor init the store with a reducer and an initial state
    constructor(reducer, initialState) {
        this.reducer = reducer;
        this.state = initialState;
        this.listeners = []; // List of subscribed listeners]
    }
}
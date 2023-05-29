const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  return {
    type: INCREMENT
  }
}; // Define an action creator for incrementing

const decAction = () => {
  return {
    type: DECREMENT
  }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

console.log(store.getState()) // lo state iniziale sarà 0

store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction())
store.dispatch(incAction()) // ho fatto 4 volte l'azione di incremento

console.log(store.getState()) // ora lo state sarà 4

store.dispatch(decAction())
store.dispatch(decAction())
store.dispatch(decAction()) // ho fatto 3 volte l'azione di decremento

console.log(store.getState()) // ora lo state sarà 1

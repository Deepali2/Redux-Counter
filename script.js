//We need a reducer(rootReducer)
//We need some redux store and initialState
//We need some way of changing the state

const initialState = {count: 0}
function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      var newState = {...state}; // cannot use 'let' more than once inside of a switch statement
      newState.count++;
      return newState;
    case "DECREMENT":
      var newState = Object.assign({}, state);
      newState.count--;
      return newState;
    default: 
      return state;
  }  
}

const store = Redux.createStore(rootReducer);

$(document).ready(function() {
  let currentState = store.getState();
  $("#counter").text(currentState.count);
  $("#increment").on("click", function() {
    //dispatch some action to increment the count!
    store.dispatch({
      type: "INCREMENT"
    });
    let currentState = store.getState();
    $("#counter").text(currentState.count)
  })
  $("#decrement").on("click", function() {
    //dispatch some action to decrement the count!
    store.dispatch({
      type: "DECREMENT"        
    });
    let currentState = store.getState();
    $("#counter").text(currentState.count)
  })
})
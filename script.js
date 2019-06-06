//We need a reducer(rootReducer)
//We need some redux store and initialState
//We need some way of changing the state

const initialState = {count: 0}
function rootReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      debugger
      return state;
    default: 
      return state;
  }  
}

const store = Redux.createStore(rootReducer);

$(document).ready(function() {
  $("#increment").on("click", function() {
    //dispatch some action to increment the count!
    store.dispatch({
      type: "INCREMENT"
    })
  })
  $("#decrement").on("click", function() {
    //dispatch some action to decrement the count!

  })
})
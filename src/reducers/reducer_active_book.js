
//state argument is not application state, only state
//this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED': return action.payload;
  }

  //never mutate state, always return a fresh object
  return state;
}

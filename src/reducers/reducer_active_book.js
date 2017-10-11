
//state argument is not application state, only state
//this reducer is responsible for

//redux will throw in actions on the bootup by default
//so initially there wouldnt be a BOOK_SELECTED
//so, it will just return the state aka the default null value
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED': return action.payload;
  }

  //never mutate state, always return a fresh object
  return state;
}

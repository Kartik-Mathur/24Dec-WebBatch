const initialState = 10;

function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'counter/increment':
        return state+1;
      case 'counter/decrement':
        return state>0 ? state-1 : state;
      default:
        return state
    }
  }

export default counterReducer;
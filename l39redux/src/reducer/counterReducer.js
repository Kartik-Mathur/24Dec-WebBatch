const initialState = 0;

function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'counter/incremented':
        return state+1;
      case 'counter/decremented':
        return state-1;
      default:
        return state
    }
  }

export default counterReducer;
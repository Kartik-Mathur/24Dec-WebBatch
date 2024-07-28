const initialState = [];

function activeRestaurantReducer(state = { initialState }, action) {
    switch (action.type) {
        case 'SET_RESTAURANT':
            return action.payload;
        case 'GET_RESTAURANT':
            return state;
        default:
            return state;
    }
}

export default activeRestaurantReducer;
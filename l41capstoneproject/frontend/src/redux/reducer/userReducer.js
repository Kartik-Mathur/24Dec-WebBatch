const initialState = {
    name: '',
    email: '',
    username: "",
    image: '',
    orderHistory: [],
    cart: [],
    isLoggedIn: false
};

function userReducer(state = { initialState }, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                username: action.payload.username,
                image: action.payload.image,
                orderHistory: action.payload.orderHistory,
                cart: action.payload.cart,
                isLoggedIn: true
            }
        case 'GET_USER':
            return state;
        case "UPDATE_USER_CART":
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state;
    }

}

export default userReducer;
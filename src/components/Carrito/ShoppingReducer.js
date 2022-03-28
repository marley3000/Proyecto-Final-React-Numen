import { TYPES } from "./ShoppingAction";

export const shoppingInitialState = {
    product: [
        { id: 1, name: "Producto A", price: 10 },
        { id: 2, name: "Producto B", price: 50 },
        { id: 3, name: "Producto C", price: 100 },
        { id: 4, name: "Producto D", price: 150 },
        { id: 5, name: "Producto E", price: 200 },
        ],
        cart: [],
};

export function shoppingReducer(state, action) {
    switch (action.type) {
        case TYPES.ADD_TO_CART: {

            let newItem = state.product.find(product => product.id === action.payload);
            
            let iteminCart = state.cart.find(item=> item.id===newItem.id)

            return iteminCart ? {...state, 
                cart:state.cart.map((item) => 
                item.id===newItem.id ? {...item, quantity: item.quantity + 1} : item)} 
            : {
                ...state, 
                cart: [...state.cart, {...newItem, quantity: 1}]
            };
        }
        case TYPES.REMOVE_ONE_PRODUCT: {
            let itemToDelete = state.cart.find(item => item.id===action.payload);

            return itemToDelete.quantity > 1 
                ? {...state, cart: state.cart.map((item) => item.id===action.payload ? {...item, quantity:item.quantity - 1} : item)}
                : {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
        }
        case TYPES.CLEAR_CART: 
            return shoppingInitialState
        default:
            return state;
    }
}
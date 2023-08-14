function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
}

export function productReducer(state, action) {
  switch (action.type) {
    case "SORT_PRICE":
      return { ...state, sort: action.payload };
    case "FILTER_STOCK":
      return { ...state, byStock: !state.byStock };
    case "FILTER_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "FILTER_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      // return default state
      return {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
}

export default cartReducer;

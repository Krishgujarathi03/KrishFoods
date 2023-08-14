import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducers";
import { productReducer } from "./Reducers";
faker.seed(99); // only static data generated

const Cart = createContext();
function Context({ children }) {
  const products = [...Array(21)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "food" }),
    inStock: faker.number.int({
      min: 0,
      max: 7,
    }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.number.int({
      min: 1,
      max: 5,
    }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
}

function CartState() {
  return useContext(Cart);
}

export default Context;
export { CartState };
